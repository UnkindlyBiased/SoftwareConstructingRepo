import EmbeddedPC from "../../abstraction/EmbeddedPC";

export default class KiaomiEmbeddedPC implements EmbeddedPC {
    startEnterpriseApp(): void {
        console.log("ATM app started")
    }
}