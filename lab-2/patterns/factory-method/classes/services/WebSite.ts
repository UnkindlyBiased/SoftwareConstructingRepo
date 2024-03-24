import Service from "../../abstraction/Service";
import DomesticSubscription from "../subs/DomesticSubscription";

/**
 * Represents a class that creates the DomesticSubscription instance
 */
export default class WebSite implements Service<DomesticSubscription> {
    buySubscription(): DomesticSubscription {
        return new DomesticSubscription()
    }
    cancelSubscription(sub: DomesticSubscription): void {
        sub.cancelSub()
    }
}