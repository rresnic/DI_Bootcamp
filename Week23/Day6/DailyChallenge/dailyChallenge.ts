type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
type: 'product';
id: number;
price: number;
};

type Order = {
type: 'order';
orderId: string;
amount: number;
};

function handleData(arg: User | Product | Order): string {
    if(arg.type === `user`) {
        return `Welcome ${arg.name}, ${arg.age} `
    }
    if(arg.type === `product`) {
        return `Product ID: ${arg.id}, Product Price: ${arg.price} `
    }
    if(arg.type === `order`) {
        return `Order ID: ${arg.orderId} totaling ${arg.amount}`
    }
    return "Invalid data type"
}

let user1:User = {
    type: "user",
    name: "John",
    age: 25
}

let prod1:Product = {
    type: "product",
    id: 1,
    price: 12.5
}

let order1:Order = {
    type: "order",
    orderId: "ab123",
    amount: 25
}

console.log(handleData(user1))
console.log(handleData(prod1))
console.log(handleData(order1))