import { EyeColor, HairColor, Sex, Weapon } from "../utils/Types";

export default interface Character {
    hairColor?: HairColor,
    eyeColor?: EyeColor, 
    weapon?: Weapon,
    sex?: Sex
}