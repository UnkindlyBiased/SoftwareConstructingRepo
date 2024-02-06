import Money from "./Money"
import { Category } from "./helpers/Enums"

export default class Product {
    private name: string
    private category: Category
    private price: Money

    public getName() : string {
        return this.name
    }

    constructor(name, category, price) {
        this.name = name
        this.category = category
        this.price = price
    }

    toString() : string {
        return `${this.name}, belongs to the "${Category[this.category]}" category, costs ${this.price.moneyOutput}`
    }
}