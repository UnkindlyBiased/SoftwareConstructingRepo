import Subscription from "./Subscription";

export default interface Service<T extends Subscription> {
    buySubscription(): T
    cancelSubscription(sub: T)
}