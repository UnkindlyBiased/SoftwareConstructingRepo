import Smartphone from "../../abstraction/Smartphone";

export default class BalaxySmartphone implements Smartphone {
    callSomeone(): void {
        console.log("Calling delivery")
    }
}