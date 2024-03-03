import { Currency } from "./helpers/Enums"

export default class Money {
    private whole: number
    private fractional: number
    private currency: Currency

    constructor(whole: number, fractional: number, currency: Currency) {
        this.whole = Math.floor(whole)
        this.fractional = fractional
        this.currency = currency
    }
    moneyOutput(): string {
        return `${this.currency} ${this.whole + this.fractional}`
    }
    addAmount(setWhole: number, setFractional: number) : void {
        this.whole += Math.floor(setWhole)
        this.fractional += setFractional
    }
}