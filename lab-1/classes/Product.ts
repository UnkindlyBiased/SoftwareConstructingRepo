import Money from "./Money"
import { Category } from "./helpers/Enums"

export default class Product {
    name: string
    private category: Category
    private price: Money

    constructor(name, category, price) {
        this.name = name
        this.category = category
        this.price = price
    }

    toString() {
        console.log(`${this.name}, belongs to the "${Category[this.category]}" category, costs ${this.price.moneyOutput}`)
    }
}