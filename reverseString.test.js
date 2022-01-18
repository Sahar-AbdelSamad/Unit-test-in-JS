const reverseString = require('./reverseString')

test('String-reverse', () => {
    //Arrange
    const string = "Hello World";
    //Act
    const result = reverseString(string);
    //Assert
    expect(result).toBe('dlroW olleH')
})