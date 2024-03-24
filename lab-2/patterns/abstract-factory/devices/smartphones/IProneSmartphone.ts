import Smartphone from "../../abstraction/Smartphone";

export default class IProneSmartphone implements Smartphone {
    callSomeone(): void {
        console.log("Calling a friend")
    }
}