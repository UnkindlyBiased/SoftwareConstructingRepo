import Service from "../../abstraction/Service";
import PremiumSubscription from "../subs/PremiumSucscription";

export default class MobileApp implements Service<PremiumSubscription> {
    buySubscription(): PremiumSubscription {
        return new PremiumSubscription
    }
    cancelSubscription(sub: PremiumSubscription) {
        sub.cancelSub()
    }
}