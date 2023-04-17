const ProductService = require('../service/product-service.js')

class ProductController {
    async postProduct(req, res, next) {
        try {
            const {link, name, price} = req.body;
            const productData = await ProductService.postProduct(link, name, price)
            return res.status(200).json(productData)
        } catch (error) {
            next(error)
        }
    }

    async getProducts(req, res, next) {
        try {
            const productData = await ProductService.getProducts()
            return res.status(200).json(productData)
        } catch (error) {
            next(error)
        }
    }

    async deleteProduct(req,res,next) {
        try {
            const {name} = req.body
            const productData = await ProductService.deleteProduct(name)
            return res.status(200).json(productData)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ProductController();