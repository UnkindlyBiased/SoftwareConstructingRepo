import EnemyBuilder from "./classes/EnemyBuilder";
import HeroBuilder from "./classes/HeroBuilder";

const builder = new HeroBuilder()
builder.buildEyes("red").buildHair("blonde").buildWeapon("sword")

const character = builder.build()
character.helpPedestrians()

console.log(character)

const anotherBuilder = new EnemyBuilder()
anotherBuilder.buildEyes("blue").buildHair("red").buildWeapon("sword")

const enemy = anotherBuilder.build()
enemy.doBadThings()

console.log(enemy)