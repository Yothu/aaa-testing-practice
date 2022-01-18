const reverseString = require('./task2');

test('Funtion returns a reversed string', () => {
  //Arrange
  const stringToReverse = 'abcde';
  //Act
  const reversedString = reverseString(stringToReverse);
  //Assert
  expect(reversedString).toBe('edcba');
});
