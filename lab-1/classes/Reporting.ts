import Product from "./Product";
import { ReporterMsgState } from "./helpers/Enums";
import ReporterMsg from "./helpers/ReporterMsg";

export default class Reporting {
    private productsInfo: string[]

    constructor() {
        this.productsInfo = []
    }

    productLoadingMessage(product: Product, amount: number = 1) : void {
        this.productsInfo.push(new ReporterMsg(product, amount, ReporterMsgState.Added).getMessage())
    }

    productShipmentMessage(product: Product,  amount: number = 1) : void {
        this.productsInfo.push(new ReporterMsg(product, amount, ReporterMsgState.Shipped).getMessage())
    }

    getReportsInfo() : void {
        for (let elem of this.productsInfo) {
            console.log(elem)
        }
    }
}