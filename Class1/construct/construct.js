import abstract from "./abstract.js"
export class construct extends abstract{
    
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    print() {
        console.log(this.name + ", " + this.age)
    }
}