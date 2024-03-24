import Character from "../abstraction/Character";
import { EyeColor, HairColor, Sex, Weapon } from "../utils/Types";

export default class Hero implements Character {
    public eyeColor: EyeColor | undefined
    public hairColor: HairColor | undefined
    public weapon: Weapon | undefined
    public sex: Sex | undefined

    public helpPedestrians(): void {
        console.log("You've helped the pedestrians to cross the road")
    }
}