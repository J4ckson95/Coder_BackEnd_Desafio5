import mongoose from "mongoose";
const collection = "messages"
const messagesSchema = mongoose.Schema({
    user: String,
    message: String
})
const messagesModel = mongoose.model(collection, messagesSchema)
export default messagesModel