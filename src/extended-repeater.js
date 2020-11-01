const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,options) {
  resultstring="";
  addition="";
if (options!=undefined){
  basicOptions = {
    repeatTimes:(options.repeatTimes==undefined)?1:options.repeatTimes,
    separator:(options.separator==undefined)?'+':options.separator.toString(),
    addition:(String(options.addition)=='undefined')?'':String(options.addition),
    additionRepeatTimes:(options.additionRepeatTimes==undefined)?1:options.additionRepeatTimes,
    additionSeparator:(options.additionSeparator==undefined)?'|':options.additionSeparator.toString(),
  }
  for(let i = 0;i<basicOptions.additionRepeatTimes;i++){
    addition+=(i+1!=basicOptions.additionRepeatTimes)?basicOptions.addition+basicOptions.additionSeparator:basicOptions.addition;
  }
  for (let index = 0; index < basicOptions.repeatTimes; index++) {
    resultstring+=(index+1!=basicOptions.repeatTimes)?str+addition+basicOptions.separator:str+addition;
  }
  return resultstring;
}
};
  
  