module.exports = function countCats(matrix) {
  let num = 0;
  if (matrix) {
    for (let array of matrix) {
      num += array.reduce((curr, item) => item == '^^' ? ++curr : curr, 0);
    }
    return num;
  }
  return num;
};
