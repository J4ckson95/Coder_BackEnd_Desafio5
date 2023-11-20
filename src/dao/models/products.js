import mongoose from "mongoose";
const collection = "products"
const productsSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    code: {
        type: Number,
        unique: true
    },
    stock: Number
})
const productsModel = mongoose.model(collection, productsSchema)
export default productsModel