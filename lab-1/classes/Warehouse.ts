import Product from "./Product";
import Reporting from "./Reporting";

export default class Warehouse {
    private localProducts: Map<Product, number>
    private lastAdditionDate: Date
    private reporter: Reporting

    constructor() {
        this.localProducts = new Map<Product, number>
        this.updateShippingDate()
        this.reporter = new Reporting()
    }

    addProduct(product: Product, amount?: number): void {
        const isProductAvailable = this.localProducts.has(product)
        if (isProductAvailable) {
            const productAmount = this.localProducts.get(product)!
            amount ? this.productAdditionWithReporting(product, productAmount + amount)
                : this.productAdditionWithReporting(product, productAmount + 1)
        } else {
            amount ? this.productAdditionWithReporting(product, amount)
                : this.productAdditionWithReporting(product)
        }
        this.reporter.productLoadingMessage(product, amount)
    }

    getWarehouseInfo(): void {
        for (let [key, value] of this.localProducts) {
            console.log(`${key.getName()} - ${value} units`)
        }
    }

    private updateShippingDate(): void {
        this.lastAdditionDate = new Date()
    }

    private productAdditionWithReporting(product: Product, amount: number = 1) : void {
        this.localProducts.set(product, amount)
    }

    getReports() : void {
        this.reporter.getReportsInfo()
    }
}