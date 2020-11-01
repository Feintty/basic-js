const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 calculateDepth(arr,i) {
       i=1;
       if (JSON.stringify(arr).match(/\[/g).length !== 1) {
         i=this.calculateDepth(arr.flat(1))+1;  
       }
         return i;
     }
}
