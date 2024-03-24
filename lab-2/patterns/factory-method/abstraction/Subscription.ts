import { Channel } from "../utils/Channel"

export default abstract class Subscription {
    protected monthlyPrice: number // in USD
    protected subPeriod: number // in days
    protected channels: Channel[]
    protected isValid: boolean = true

    constructor(price: number, period: number, channels: Channel[]) {
        this.monthlyPrice = price
        this.subPeriod = period,
        this.channels = channels
    }

    public getIsValid(): boolean {
        return this.isValid
    }

    cancelSub(): void {
        this.isValid = false
    }
}