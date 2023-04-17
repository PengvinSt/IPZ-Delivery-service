import api from "../http req/core";


export default class ProductService {
    static async createProduct(link, name, price){
        return api.post('/product/createproducts',{link, name, price})
    }
    static async getProduct(){
        return api.get('/product/getproducts')
    }
    static async deleteProduct(name){
        return api.post('/product/deleteproduct', {name})
    }
}