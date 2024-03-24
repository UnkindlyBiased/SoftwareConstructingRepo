import Factory from "../abstraction/Factory";
import KiaomiEmbeddedPC from "../devices/embedded/KiaomiEmbeddedPC";
import KiaomiLaptop from "../devices/laptops/KiaomiLaptop";
import KiaomiSmartphone from "../devices/smartphones/KiaomiSmartphone";

export default class KiaomiFactory implements Factory {
    createLaptop(): KiaomiLaptop {
        return new KiaomiLaptop()
    }
    createSmartphone(): KiaomiSmartphone {
        return new KiaomiSmartphone()
    }
    createEmbeddedPC(): KiaomiEmbeddedPC {
        return new KiaomiEmbeddedPC()
    }
}