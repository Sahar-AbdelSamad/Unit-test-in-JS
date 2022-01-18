const reverseString = require('./reverseString')

test('Reverse-Hello World', () => {
    //Arrange
    const string = "Hello World";
    //Act
    const result = reverseString(string);
    //Assert
    expect(result).toBe('dlroW olleH')
})