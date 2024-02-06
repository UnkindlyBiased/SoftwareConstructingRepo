import Product from "../Product";
import { ReporterMsgState } from "./Enums";

export default class ReporterMsg {
    private product: Product
    private amount: number
    private reporterMsgState: ReporterMsgState

    constructor(product: Product, amount: number, state: ReporterMsgState) {
        this.product = product
        this.amount = amount
        this.reporterMsgState = state
    }

    getMessage() : string {
        return `The product "${this.product.getName()}" ${this.reporterMsgState} the warehouse in the amount of ${this.amount} units`
    }
}