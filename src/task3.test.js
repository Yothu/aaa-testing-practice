const Calculator = require('./task3');

describe('Calculator calculates that adding', () => {
  test('2 and 3 equals 5', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 2;
    const y = 3;
    //Act
    const result = calculator.add(x, y);
    //Assert
    expect(result).toBe(5);
  });
  test('0 and 4 equals 4', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 0;
    const y = 4;
    //Act
    const result = calculator.add(x, y);
    //Assert
    expect(result).toBe(4);
  });
  test('1 and 0 equals 1', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 1;
    const y = 0;
    //Act
    const result = calculator.add(x, y);
    //Assert
    expect(result).toBe(1);
  });
});

describe('Calculator calculates that subtracting', () => {
  test('6 and 2 equals 4', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 6;
    const y = 2;
    //Act
    const result = calculator.subtract(x, y);
    //Assert
    expect(result).toBe(4);
  });
  test('3 and 8 equals -5', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 3;
    const y = 8;
    //Act
    const result = calculator.subtract(x, y);
    //Assert
    expect(result).toBe(-5);
  });
  test('7 and 0 equals 7', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 7;
    const y = 0;
    //Act
    const result = calculator.subtract(x, y);
    //Assert
    expect(result).toBe(7);
  });
});

describe('Calculator calculates that multiplying', () => {
  test('3 and 5 is 15', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 3;
    const y = 5;
    //Act
    const result = calculator.multiply(x, y);
    //Assert
    expect(result).toBe(15);
  });
  test('4 and 0 is 0', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 4;
    const y = 0;
    //Act
    const result = calculator.multiply(x, y);
    //Assert
    expect(result).toBe(0);
  });
  test('5 and asd is null', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 5;
    const y = 'asd';
    //Act
    const result = calculator.multiply(x, y);
    //Assert
    expect(result).toBeNull();
  });
});

describe('Calculator calculates that dividing', () => {
  test('6 and 3 is 2', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 6;
    const y = 3;
    //Act
    const result = calculator.divide(x, y);
    //Assert
    expect(result).toBe(2);
  });
  test('4 and 0 is 0', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 0;
    const y = 4;
    //Act
    const result = calculator.divide(x, y);
    //Assert
    expect(result).toBe(0);
  });
  test('0 and 5 is undefined', () => {
    //Arrange
    const calculator = new Calculator();
    const x = 5;
    const y = 0;
    //Act
    const result = calculator.divide(x, y);
    //Assert
    expect(result).toBeUndefined();
  });
});
