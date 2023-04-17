const Router = require('express');
const userRouter = require('./user-router.js')
const devRouter = require('./dev-router.js')
const productRouter = require('./product-router.js')
const router = new Router()

router.use('/user', userRouter)
router.use('/dev', devRouter)
router.use('/product', productRouter)
module.exports = router
