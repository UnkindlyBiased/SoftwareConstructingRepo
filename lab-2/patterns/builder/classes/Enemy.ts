import Character from "../abstraction/Character";
import { EyeColor, HairColor, Sex, Weapon } from "../utils/Types";

export default class Enemy implements Character {
    public eyeColor: EyeColor | undefined
    public hairColor: HairColor | undefined
    public weapon: Weapon | undefined
    public sex: Sex | undefined

    public doBadThings(): void {
        console.log("Call someone names")
    }
}