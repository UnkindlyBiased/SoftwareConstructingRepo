import Laptop from "../../abstraction/Laptop";

export default class BalaxyLaptop implements Laptop {
    launchOS(): void {
        console.log("Windows 11 is launched")
    }
}