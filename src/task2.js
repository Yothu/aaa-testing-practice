const reverseString = (string) => {
  let reversedString = '';
  if (typeof string === 'string') {
    for (let i = string.length - 1; i >= 0; i -= 1) {
      reversedString += string[i];
    }
    return reversedString;
  }
  return null;
};

module.exports = reverseString;
