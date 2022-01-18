class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    static add = (a, b) => a+b;
    static subtract = (a, b) => a-b;
    static divide = (a, b) => a/b;
    static multiply = (a, b) => a*b;
  };

module.exports = Calculator