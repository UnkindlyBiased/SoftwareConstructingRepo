import Subscription from "../../abstraction/Subscription";

export default class EducationalSubscription extends Subscription {
    constructor() {
        super(15, 60, [
            {name: 'National Geographic', logo: 'NG Logo'}
        ])
    }
}