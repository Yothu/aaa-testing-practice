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
    if (typeof x === 'number' && typeof y === 'number') {
      if (y > 0) {
        return x/y;
      }
      return undefined;
    }
    return null;
  }

  multiply(x = 1, y = 1) {
    if (typeof x === 'number' && typeof y === 'number') {
      return x * y;
    }
    return null;
  }
}

module.exports = Calculator;
