import Subscription from "../abstraction/Subscription";

export default class Application {
    private sub?: Subscription

    /**
     * Supposes to be a login feature (getting user data and his sub) before using it
     * 
     * @param sub Subscription itself
     */
    constructor(sub: Subscription) {
        this.setSub(sub)
    }

    useSub(): void {
        if (!this.sub?.getIsValid()) {
            console.log('Your subscription is not valid')
            return
        }
        console.log('Subscription is working')
    }

    setSub(sub: Subscription): void {
        this.sub = sub
    }
}