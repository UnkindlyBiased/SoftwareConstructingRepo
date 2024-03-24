import Laptop from "../../abstraction/Laptop";

export default class IProneLaptop implements Laptop {
    launchOS(): void {
        console.log("macOS Ventura is launched")
    }
}