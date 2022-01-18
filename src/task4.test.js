const capitalize = require('./task4');

test('Reverse a string', () => {
  //Arrange
  const stringToCapitalize = 'pera';
  //Act
  const capitalizedString = capitalize(stringToCapitalize);
  //Assert
  expect(capitalizedString).toBe('Pera');
});
