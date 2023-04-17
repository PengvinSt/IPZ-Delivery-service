const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({ 
    link: {type: String}, 
    name: {type: String, unique: true, required: true}, 
    price: {type: String, required: true},
})

module.exports = model('Product', ProductSchema)