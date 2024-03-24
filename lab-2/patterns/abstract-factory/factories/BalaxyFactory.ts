import Factory from "../abstraction/Factory";
import BalaxyEmbeddedPC from "../devices/embedded/BalaxyEmbeddedPC";
import BalaxyLaptop from "../devices/laptops/BalaxyLaptop";
import BalaxySmartphone from "../devices/smartphones/BalaxySmartphone";

export default class BalaxyFactory implements Factory {
    createLaptop(): BalaxyLaptop {
        return new BalaxyLaptop()
    }
    createSmartphone(): BalaxySmartphone {
        return new BalaxySmartphone()
    }
    createEmbeddedPC(): BalaxyEmbeddedPC {
        return new BalaxyEmbeddedPC()
    }
}