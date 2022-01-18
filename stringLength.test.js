const stringLength = require('./stringLength')

test('Correct_string_length', () => {
    //Arrange
    const string = "hi";
    //Act
    const value = stringLength(string);
    //Assert
    expect(value).toBe(2);
});

test('String-at-least-1-character-long', () => {
    //Arrange
    const string = "hi";
    //Act
    const value = stringLength(string);
    //Assert
    expect(value).toBeGreaterThan(1);
  });

test('String-less-then-10-characters-long', () => {
   //Arrange
   const string = "hi";
   //Act
   const value = stringLength(string);
   //Assert
   expect(value).toBeLessThan(10);
 });
