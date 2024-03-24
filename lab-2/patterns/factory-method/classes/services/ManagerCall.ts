import Service from "../../abstraction/Service";
import EducationalSubscription from "../subs/EducationalSubscription";

/**
 * Represents a class that creates the EducationalSubscription instance
 */
export default class ManagerCall implements Service<EducationalSubscription> {
    buySubscription(): EducationalSubscription {
        return new EducationalSubscription()
    }
    cancelSubscription(sub: EducationalSubscription): void {
        sub.cancelSub()
    }
}