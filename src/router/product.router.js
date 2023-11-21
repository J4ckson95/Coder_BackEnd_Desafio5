import productModel from "../dao/models/products.js"
import { Router } from "express"
const router = Router()

router.get("/", async (req, res) => {
    const data = await productModel.find().lean()
    res.render("products", { data })
})
router.post("/", async (req, res) => {
    const newProduct = req.body
    const result = await productModel.create(newProduct)
    res.status({ status: "Success", payload: result })
})

export default router