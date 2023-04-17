const Router = require('express')
const controller = require('../controllers/product-controller.js')
const router = new Router()
const roleMiddleware = require('../middleware/roleMiddleware.js')


router.post('/createproducts',controller.postProduct)
router.post('/deleteproduct', controller.deleteProduct)

router.get('/getproducts',controller.getProducts)

module.exports = router;