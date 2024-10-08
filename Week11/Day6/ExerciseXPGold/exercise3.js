
    // Analyze the code below, what will be the output?

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();
// pointing at the same object, so already incremented twice
const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count); // 3
