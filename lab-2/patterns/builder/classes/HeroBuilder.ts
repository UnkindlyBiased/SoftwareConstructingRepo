import ICharacterBuilder from "../abstraction/ICharacterBuilder";
import { EyeColor, HairColor, Sex, Weapon } from "../utils/Types";
import Hero from "./Hero";

export default class HeroBuilder implements ICharacterBuilder {
    private character: Hero = new Hero()

    reset(): void {
        this.character = new Hero()
    }

    public buildHair(hairColor: HairColor) {
        this.character.hairColor = hairColor
        return this
    }
    public buildEyes(eyeColor: EyeColor) {
        this.character.eyeColor = eyeColor
        return this
    }
    public buildWeapon(weapon: Weapon) {
        this.character.weapon = weapon
        return this
    }
    buildSex(sex: Sex) {
        this.character.sex = sex
        return this
    }

    public build(): Hero {
        const charac = this.character
        this.reset()
        return charac
    }
}