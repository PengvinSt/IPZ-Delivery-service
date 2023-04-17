const ProductSchema = require('../models/Product/Product.js')
const ApiError = require('../utils/apiError.js')

class ProductService {
    async postProduct(link, name, price) {
        const productTemp = await ProductSchema.findOne({name})
        if(productTemp){
            throw ApiError.BadRequestError(`Product with ${name} name already exists`)
        }
        const product = await ProductSchema.create({link, name, price})
        return {product};
    }

    async deleteProduct(name){
        const product = await ProductSchema.deleteOne({name})
        return product;
    }

    async getProducts() {
       const products = await ProductSchema.find()
       return {products};
    }
}

module.exports = new ProductService();