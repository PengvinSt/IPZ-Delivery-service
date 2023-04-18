const Router = require('express')
const controller = require('../controllers/product-controller.js')
const router = new Router()
const roleMiddleware = require('../middleware/roleMiddleware.js')


router.post('/createproducts',roleMiddleware('ADMIN'),controller.postProduct)
router.post('/deleteproduct',roleMiddleware('ADMIN'), controller.deleteProduct)

router.get('/getproducts',controller.getProducts)

module.exports = router;