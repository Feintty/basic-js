const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date !== 'object')return "Unable to determine the time of year!";
  if (!date.getTime || date.getMilliseconds() === 0) throw new Error();
    
    if (date.getMonth() < 2 
    || date.getMonth() === 11) 
    return 'winter';
  
    if (date.getMonth() >= 2 
    && date.getMonth() < 5) 
    return 'spring';
  
    if (date.getMonth() >= 5 
    && date.getMonth() < 8) 
    return 'summer';

    return 'autumn';
};
