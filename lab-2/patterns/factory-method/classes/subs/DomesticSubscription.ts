import Subscription from "../../abstraction/Subscription"

export default class DomesticSubscription extends Subscription {
    constructor() {
        super(20, 30, [
            {name: '1+1', logo: '1+1 Logo'},
            {name: 'Novy Channel', logo: 'Novy Channel Logo'},
            {name: 'MEGA', logo: 'MEGA Logo'}
        ])
    }
}