import mongoose from "mongoose";
const collection = "messages"
const messagesSchema = mongoose.Schema({
    user: { type: String, require: true },
    message: { type: String, require: true }
})
const messagesModel = mongoose.model(collection, messagesSchema)
export default messagesModel