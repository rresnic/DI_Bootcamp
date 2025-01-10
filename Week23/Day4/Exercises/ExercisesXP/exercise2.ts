// I don't quite understand what was intended with this assignment. If I don't allow emiting with errors, it obviously won't allow it. If I do, it obviously works fine, as these properties are mostly not supported by js...
class Product {
    readonly id:number;
    constructor(public name:string, public price:number) {
        this.id = new Date().getTime()
    }
    public getProductInfo():string{
        return `Product ${this.name} costs ${this.price}`;
    }
}

let prod1 = new Product("Iphone", 1500)
console.log(prod1)
prod1.id = 55;
console.log(prod1)
