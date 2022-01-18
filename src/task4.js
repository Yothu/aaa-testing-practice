const capitalize = (string) => {
  if (typeof string === 'string') {
    if (string.length > 0) {
      let capitalizedString = string[0].toUpperCase() + string.slice(1);
      return capitalizedString;
    }
  }
  return null;
};

module.exports = capitalize;
