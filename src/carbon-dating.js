const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if (!isNaN(Number(sampleActivity))
  &&(typeof sampleActivity =='string')
  &&(Number(sampleActivity)>0)){
  k = 0.693/HALF_LIFE_PERIOD;
  result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  return (result>0)? result: false;
  }
  else return false;
  };