const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.join().split(",").map(item => (item==="^^")?item:"").filter(el=>el).length;
};
