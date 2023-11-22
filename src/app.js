import express from "express"
import handlebars from "express-handlebars"
import mongoose from "mongoose"
import productRouter from "./router/product.router.js"
import __dirname from "./utils.js"
import { Server } from "socket.io"
import messageModel from "./dao/models/messages.js"

const app = express()
const url = "mongodb+srv://J4ckson:IIQyDhhK1Ax1pSgX@coderhousebackend.jdnxmo1.mongodb.net/"
const httpServer = app.listen(8080, () => console.log("Running server ...<<(--_--)>>"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + `/public`))

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + `/views`)
app.set("view engine", "handlebars")

app.use("/products", productRouter)
app.get("/chat", (req, res) => {
    res.render("chat", {})
})
const io = new Server(httpServer)
io.on("connection", (socket) => {
    socket.on("message", async (data) => {
        const saveMessage = await messageModel.create(data)
    })
})
mongoose.connect(url, { dbName: "ecommerce" })
    .then(() => {
        console.log("Database connected ...")
    })


