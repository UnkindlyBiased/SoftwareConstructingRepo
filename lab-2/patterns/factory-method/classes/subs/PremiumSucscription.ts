import Subscription from "../../abstraction/Subscription"

export default class PremiumSubscription extends Subscription {
    constructor() {
        super(50, 60, [
            {name: 'Sky Sports F1', logo: 'Sky Sports F1 Logo'},
            {name: 'AMC', logo: 'AMC Logo'},
            {name: 'ESPN', logo: 'ESPN Logo'}
        ])
    }
}