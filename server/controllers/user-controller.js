const userService = require('../service/user-service.js');
const {validationResult} = require('express-validator')

class UserController {
    async registration(req, res,next) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){ 
                const err = errors.array()[0];
                return res.status(400).json(`Registration failed: invalid ${err.param}`)
            }
            const {username, email, password} = req.body;
            const userData = await userService.registration(username, email, password)
            // if (typeof userData !== 'object'){
            //     return res.status(400).json(userData)
            // }
            return res.status(200).json(userData)
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const {username, password} = req.body;
            const userData =  await userService.login(username, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:10*24*60*60*1000, httpOnly: true})
            // if (typeof userData !== 'object'){
            //     return res.status(400).json(userData)
            // }
            return res.status(200).json(userData)
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.status(200).json({token})
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:10*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            // console.log(error);
            next(error)
        }
    }

}

module.exports = new UserController();