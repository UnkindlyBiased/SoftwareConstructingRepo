import { EyeColor, HairColor, Sex, Weapon } from "../utils/Types"

export default interface ICharacterBuilder {
    buildHair(hairColor: HairColor): void
    buildEyes(eyeColor: EyeColor): void
    buildWeapon(weapon: Weapon): void
    buildSex(sex: Sex): void

    reset(): void
}