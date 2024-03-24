export default class Virus {
    private weight: number
    private age: number
    private name: string
    private type: string
    private children: Virus[] = []

    constructor(weight: number, age: number, name: string, type: string, children?: Virus[]) {
        this.weight = weight
        this.age = age
        this.name = name
        this.type = type
        if (children) {
            this.children = children
        }
    }

    addChild(virus: Virus): void {
        this.children.push(virus)
    }

    clone(): Virus {
        return this
    }
}