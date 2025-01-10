class Employee {
    constructor(private name:string, private salary:number, public position:string, protected department:string) {
    }
    public getEmployeeInfo() {
        return `Employee name: ${this.name}, position: ${this.position}`
    }
}

let emp1 = new Employee("John", 12000, "Fullstack", "R&D");
console.log(emp1.getEmployeeInfo())