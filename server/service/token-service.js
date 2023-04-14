const jwt = require('jsonwebtoken')
const TokenSchema = require('../models/User/Token.js')


class TokenService {
    createToken(data){
        const accessToken = jwt.sign(data, process.env.JWT_ACCESS_SECRET,{expiresIn:'1h'})
        const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_SECRET,{expiresIn:'5d'})
        return{
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken){
        const userToken = await TokenSchema.findOne({user:userId})
        if(userToken){
            userToken.refreshToken = refreshToken;
        }
        const token = await TokenSchema.create({user:userId, refreshToken})
        return token;
    }

    async removeToken(refreshToken){
        const token =  await TokenSchema.deleteOne({refreshToken})
        return token;
    }

    async findToken(refreshToken){
        try {
            const token = await TokenSchema.findOne({refreshToken})
            return token;
        } catch (error) {
            return null;
        }
    }

    validateAccessToken(refreshToken){
        try {
           const userData = jwt.verify(refreshToken, process.env.JWT_ACCESS_SECRET)
           return userData;
        } catch (error) {
            return null;
        }
    }

    validateRefreshToken(refreshToken){
        try {
           const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
           return userData;
        } catch (error) {
            return null;
        }
    }

    
}

module.exports = new TokenService();