interface UserI {
    readonly id:number;
    name:string;
    email:string;
}

interface PremiumUserI extends UserI {
    membershipLevel ?: number;
}
function printUserDetails(user: PremiumUserI):void {
    console.log(`User Id: ${user.id}\nName: ${user.name}\nEmail: ${user.email}` +(user.membershipLevel? `\nMembership Level: ${user.membershipLevel}`:'') +"\n")
}

let user1:PremiumUserI = {
    id: 1234,
    name: "John",
    email: "jjj@gmail.com"
}

let user2:PremiumUserI = {
    id: 1235,
    name: "Bobby",
    email: "bbb@gmail.com",
    membershipLevel: 5
}

printUserDetails(user1)
printUserDetails(user2)