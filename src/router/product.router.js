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
router.get("/:idp", async (req, res) => {
    const idProduct = req.params.idp
    const result = await productModel.find({ _id: idProduct }).lean()
    res.status({ status: "Success", payload: result })
})
router.put("/:idp", async (req, res) => {
    const idProduct = req.params.idp
    const newData = req.body
    const result = await productModel.updateOne({ _id: idProduct }, newData)
    res.status({ status: "Success", payload: result })
})
router.delete("/:idp", async (req, res) => {
    const idProduct = req.params.idp
    const result = await productModel.deleteOne({ _id: idProduct })
    res.status({ status: "Success", payload: result })
})
export default router