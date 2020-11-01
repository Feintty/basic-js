const CustomError = require("../extensions/custom-error");

const chainMaker = {
  finishedChain:[],
  getLength() {
 this.finishedChain.length;
return this;
  },
  addLink(value) {
    value=(value!== null)? value.toString():value;
  this.finishedChain.push(`( ${value} )`);
  return this;
  },
  removeLink(position) {
    if (position>0)
 this.finishedChain.splice(position-1,1);
 else {  this.finishedChain = [];
   throw new Error();
}
  return this;
  },
  reverseChain() {
  this.finishedChain.reverse();
  return this;
  },
  finishChain() {
    result = this.finishedChain.join("~~");
    this.finishedChain=[];
return result
  }
};

module.exports = chainMaker;
