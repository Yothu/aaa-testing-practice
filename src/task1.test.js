const stringLength = require('./task1');

test("Function returns the length of a string", () => {
  // Arrange
  const stringToMeasure = 'abc';
  // Act
  const receivedStringLength = stringLength(stringToMeasure);
  // Assert
  expect(receivedStringLength).toBe(true);
});
