class Dog {
  constructor(name) {
    this.name = name;
  }
};

    // Analyze the options below. Which constructor will successfully extend the Dog class?

    // Not 1. No super. 
  // 1 
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};

// yes, 2.
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// not 3, no name parameter
  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

// unneccessary duplication... might count as extending if there are other functions, but not for the small class we have
  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

// number 2 correctly extends Dog.