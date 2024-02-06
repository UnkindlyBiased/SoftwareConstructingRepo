import Product from "./Product";

export default class Warehouse {
    private localProducts: Map<Product, number>
    private lastShippingDate: Date

    constructor() {
        this.localProducts = new Map<Product, number>
        this.lastShippingDate = new Date()
    }

    addProduct(product: Product) {
        const isProductAvailable = this.localProducts.has(product)
        if (isProductAvailable) {
            const productAmount = this.localProducts.get(product)!
            this.localProducts.set(product, productAmount + 1)
        } else {
            this.localProducts.set(product, 1)
        }
    }

    getWarehouseInfo() {
        for (let [key, value] of this.localProducts) {
            console.log(`${key.name} - ${value}`)
        }
    }
}