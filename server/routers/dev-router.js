const Router = require('express')
const router = new Router()
const controller = require('../controllers/dev-controller.js')
const roleMiddleware = require('../middleware/roleMiddleware.js')


router.get('/dev',roleMiddleware('ADMIN'), controller.devFun)
// router.post('/dev', controller.devFun)

module.exports = router;