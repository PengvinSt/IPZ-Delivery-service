const Router = require('express')
const controller = require('../controllers/user-controller.js')
const {body} = require('express-validator')
const roleMiddleware = require('../middleware/roleMiddleware.js')
const router = new Router()

router.post('/registration',
body('username').isLength({max:16, min:4}),
body('password').isLength({max:16, min:4}),
body('email').isEmail()
, controller.registration)

router.post('/login', controller.login)

router.post('/logout', controller.logout)

router.get('/refresh', controller.refresh)


router.post('/partner',
body('name').isLength({min:4}),
body('email').isEmail(),
body('phone').isLength({max:14, min:9})
, controller.createPartner)

router.get('/getpartner',roleMiddleware('ADMIN'),controller.getPartners)

router.post('/deletepartner',roleMiddleware('ADMIN'),controller.deletePartners)

module.exports = router;