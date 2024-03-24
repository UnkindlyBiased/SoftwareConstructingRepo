import Factory from "../abstraction/Factory";
import IProneEmbeddedPC from "../devices/embedded/IProneEmbeddedPC";
import IProneLaptop from "../devices/laptops/IProneLaptop";
import IProneSmartphone from "../devices/smartphones/IProneSmartphone";

export default class IProneFactory implements Factory {
    createLaptop(): IProneLaptop {
        return new IProneLaptop()
    }
    createSmartphone(): IProneSmartphone {
        return new IProneSmartphone()
    }
    createEmbeddedPC(): IProneEmbeddedPC {
        return new IProneEmbeddedPC
    }
}