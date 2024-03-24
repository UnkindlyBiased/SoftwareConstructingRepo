import Virus from "./Virus";

const firstVirus = new Virus(5, 5, "Foo", "Bar")

const secondVirus = new Virus(69, 420, "haha", "tooltip", [firstVirus])

const thirdVirus = new Virus(7, 9, "Undefined Virus", "Unknown", [secondVirus])
const additionalVirus = new Virus(11, 121, "TypeScript", "Overtyped languages")

const parentVirus = new Virus(10, 19, "Parent", "Idk", [thirdVirus, additionalVirus])

const virusCopy = parentVirus.clone()

console.log(parentVirus)
console.log(virusCopy)