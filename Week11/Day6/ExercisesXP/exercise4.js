class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');

// "object" since it's not instanceof
console.log(typeof member);