const Router = require('express')
const controller = require('../controllers/user-controller.js')
const {body} = require('express-validator')
const router = new Router()

router.post('/registration',
body('username').isLength({max:16, min:4}),
body('password').isLength({max:16, min:4}),
body('email').isEmail()
, controller.registration)

router.post('/login', controller.login)

router.post('/logout', controller.logout)

router.get('/refresh', controller.refresh)

module.exports = router;