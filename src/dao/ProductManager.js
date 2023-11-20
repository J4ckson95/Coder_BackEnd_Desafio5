import productsModel from "./models/products.js"
export default class ProductManager {
    #validateProduct({ title, description, price, thumbnail, code, stock }) {
        if (!title || !description || !price || !thumbnail || !code || !stock) throw new Error("Error, debe ingresar todos los datos del producto")
        return { title, description, price, thumbnail, code, stock }
    }
    async addProduct(product) {
        try {
            const newProduct = this.#validateProduct(product)
            await productsModel.create(newProduct)
        } catch (e) { console.log(); }
    }
}
