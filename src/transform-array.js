const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    switch (arr[i]) {
      case "--discard-next":
        newArr.push("--isComplete");
        ++i;
        break;
      case "--discard-prev":
        newArr.pop();
        newArr.push("--isComplete");
        break;
      case "--double-next":
        if (i + 1 < arr.length) newArr.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (i - 1 >= 0) newArr.push(newArr[newArr.length - 1]);
        break;
      default:
        newArr.push(arr[i]);
    }
  }

  let result = newArr.filter(function (value) {
    return value !== "--isComplete";
  });

  return result;
};
