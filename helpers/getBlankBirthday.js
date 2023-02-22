const getBlankBirthday = () => {
  const date = new Date(0);
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join(".");
};

module.exports = getBlankBirthday;
