import express from "express"
import handlebars from "express-handlebars"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(8080, () => console.log("Running server ...<<(--_--)>>"))