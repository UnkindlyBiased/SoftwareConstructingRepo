import BalaxyFactory from "./factories/BalaxyFactory";
import IProneFactory from "./factories/IProneFactory";
import KiaomiFactory from "./factories/KiaomiFactory";

const kiaomi = new KiaomiFactory()
const iprone = new IProneFactory()
const balaxy = new BalaxyFactory()

const phone = kiaomi.createSmartphone()
const laptop = iprone.createLaptop()
const pc = balaxy.createEmbeddedPC()

phone.callSomeone()
laptop.launchOS()
pc.startEnterpriseApp()