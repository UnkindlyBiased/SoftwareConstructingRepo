import EmbeddedPC from "./EmbeddedPC";
import Laptop from "./Laptop";
import Smartphone from "./Smartphone";

export default interface Factory {
    createLaptop(): Laptop
    createSmartphone(): Smartphone
    createEmbeddedPC(): EmbeddedPC
}