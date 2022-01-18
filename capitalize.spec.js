const capitalize = require('./capitalize')

test('Capitalize-first-letter', () => {
  //Arrange
  const string = "hello";
  //Act
  const result = capitalize(string);
  //Assert
  expect(result).toBe('Hello');
})