import Laptop from "../../abstraction/Laptop";

export default class KiaomiLaptop implements Laptop {
    launchOS(): void {
        console.log("EndeavourOS Gallileo Neo is launched")
    }
}