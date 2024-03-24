import ICharacterBuilder from "../abstraction/ICharacterBuilder";
import { HairColor, EyeColor, Weapon, Sex } from "../utils/Types";
import Enemy from "./Enemy";

export default class EnemyBuilder implements ICharacterBuilder {
    public character: Enemy = new Enemy()

    reset() {
        this.character = new Enemy()
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

    public build(): Enemy {
        const enemy = this.character
        this.reset()

        return enemy
    }
}