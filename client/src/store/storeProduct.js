import ProductService from "../service/ProductService.js";

import {makeAutoObservable} from 'mobx'

export default class StoreProduct {
    products = []
    filterProducts = []
    cart = []
    price = 0;
    constructor(){
        makeAutoObservable(this);
    }
    

    setCart(cart){
        this.cart.push(cart);
        this.price = this.price + Number(cart.price);
    }

    setFilterProducts(target) {
        this.filterProducts = this.products.filter(product => product.name.toLowerCase().includes(target.toLowerCase()))
    }

    setProducts(products){
        this.products = products
        this.filterProducts = products
    }

    deleteCart(id, price) {
        this.cart = this.cart.filter(prod => prod.id !== id)
        this.price = this.price - Number(price);
    }

    submitCart(){
        this.cart = []
        this.price = 0; 
    }

    async getProducts(){
        const res = await ProductService.getProduct()
        this.setProducts(res.data.products)
    }

    async createProduct(link, name, price){
        const res = await ProductService.createProduct(link, name, price)
        console.log(res)
    }

    async deleteProduct(name) {
        const res = await ProductService.deleteProduct(name)
        console.log(res)
    }
}