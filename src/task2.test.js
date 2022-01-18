const reverseString = require('./task2');

test('Funtion returns a reversed string', () => {
  //Arrange
  const stringToReverse = 'abcde';
  //Assert
  const reversedString = reverseString(stringToReverse);
  //Act
  expect(reversedString).toBe('edcba');
});
