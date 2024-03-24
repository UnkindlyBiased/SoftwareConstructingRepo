import Smartphone from "../../abstraction/Smartphone";

export default class KiaomiSmartphone implements Smartphone {
    callSomeone(): void {
        console.log("Calling a co-worker")
    }
}