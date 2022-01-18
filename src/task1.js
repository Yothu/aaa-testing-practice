const stringLength = (string) => {
  if (typeof string === 'string' && string.length >= 1 && string.length <= 10) {
    return true;
  }
  return false;
};

module.exports = stringLength;
