class Calculator {
  add(x = 0, y = 0) {
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
    }
    return null;
  }

  subtract(x = 0, y = 0) {
    if (typeof x === 'number' && typeof y === 'number') {
      return x - y;
    }
    return null;
  }

  divide(x = 1, y = 1) {
    return x/y;
  }

  multiply(x = 1, y = 1) {
    return x * y;
  }
}

module.exports = Calculator;
