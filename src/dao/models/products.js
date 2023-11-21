import mongoose from "mongoose";
const collection = "products"
const productsSchema = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    thumbnail: { type: String, require: true },
    code: {
        type: Number,
        unique: true
    },
    stock: { type: Number, require: true }
})
const productsModel = mongoose.model(collection, productsSchema)
export default productsModel