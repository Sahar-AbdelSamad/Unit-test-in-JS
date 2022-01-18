const Calculator = require('./calculator')

describe('Calculator', () => {
//Arrange
const a = 10;
const b = 5;
//Act
test('Adding 10 + 5', () => {
    const addition = Calculator.add(a, b)
    //Assign
    expect(addition).toBe(15);
});

test('Substracting 10 - 5', () => {
    //Act
    const subtraction = Calculator.subtract(a, b)
    //Assign
    expect(subtraction).toBe(5);
});

test('Dividing 10 / 5', () => {
    //Act
    const division = Calculator.divide(a, b)
    //Assign
    expect(division).toBe(2);
    });

test('Multipling 10 * 5', () => {
    //Act
    const multiplication = Calculator.multiply(a, b)
    //Assign
    expect(multiplication).toBe(50);
});

//Arrange
const c = 15;
const d = 3;
test('Adding 15 + 3', () => {
    const addition = Calculator.add(c, d)
    //Assign
    expect(addition).toBe(18);
});

test('Substracting 15 - 3', () => {
    //Act
    const subtraction = Calculator.subtract(c, d)
    //Assign
    expect(subtraction).toBe(12);
});

test('Dividing 15 / 3', () => {
    //Act
    const division = Calculator.divide(c, d)
    //Assign
    expect(division).toBe(5);
    });

test('Multipling 15 * 3', () => {
    //Act
    const multiplication = Calculator.multiply(c, d)
    //Assign
    expect(multiplication).toBe(45);
});

//Arrange
const e = 20;
const f = 10;
test('Adding 20 + 10', () => {
    const addition = Calculator.add(e, f)
    //Assign
    expect(addition).toBe(30);
});

test('Substracting 20 - 10', () => {
    //Act
    const subtraction = Calculator.subtract(e, f)
    //Assign
    expect(subtraction).toBe(10);
});

test('Dividing 20 / 10', () => {
    //Act
    const division = Calculator.divide(e, f)
    //Assign
    expect(division).toBe(2);
    });

test('Multipling 20 * 10', () => {
    //Act
    const multiplication = Calculator.multiply(e, f)
    //Assign
    expect(multiplication).toBe(200);
});
});