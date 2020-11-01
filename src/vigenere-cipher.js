const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse){
    this.reverse=reverse;
  }
  encrypt(message,key) {
    let vig = new Viginere();
    if(this.reverse == true||this.reverse ==undefined){
    return vig.encrypt(message,key);
    }
    else {
      return vig.encrypt(message,key).split("").reverse().join("");
    }
  } 
  decrypt(message,key) {
    let vig = new Viginere();
    if(this.reverse == true||this.reverse ==undefined){
    return vig.decrypt(message,key);
    }
    else {
      return vig.decrypt(message,key).split("").reverse().join("");
    }
  }

}
class Viginere {
  constructor() {
    this.arr = function () {
      return "abcdefghijklmnopqrstuvwxyz".split("");
    };
    this.result = "";
  }

  shift(index) {
    return this.arr().splice(index).concat(this.arr());
  }

  letterEnc(firstLetter, secondLetter) {
    if (this.arr().includes(firstLetter)) {
      return this.shift(this.arr().indexOf(firstLetter))[
        this.arr().indexOf(secondLetter)
      ];
    } else return firstLetter;
  }

  encrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
    let index = 0;
    if (message.length > key.length)
      while (key.length !== message.length) {
        key += key[index++];
      }
    else {
      key = key.split("");
      key.splice(message.length, key.length);
      key = key.join("");
    }

    message.split("").forEach((element,i) => {
      if(!this.arr().includes(element)){
        key = key.split("");
        key.splice(i,0,element);
        key = key.join("");
      }
    });

    for (let i = 0; i < message.length; i++) {
        this.result += this.letterEnc(message[i], key[i]);
    }
    let enctypted = this.result.toUpperCase();
    this.result = "";
    return enctypted;
  }

  letterDec(firstLetter,secondLetter){
    if(this.arr().includes(secondLetter))
    return this.arr()[this.shift(this.arr().indexOf(firstLetter)).indexOf(secondLetter)];
    else return secondLetter;
  }

  decrypt(message,key){
    message = message.toLowerCase();
    key = key.toLowerCase();
    let index = 0;
    if (message.length > key.length)
      while (key.length !== message.length) {
        key += key[index++];
      }
    else {
      key = key.split("");
      key.splice(message.length, key.length);
      key = key.join("");
    }
    message.split("").forEach((element,i) => {
      if(!this.arr().includes(element)){
        key = key.split("");
        key.splice(i,0,element);
        key = key.join("");
      }
    });
    for (let i = 0; i < message.length; i++) {
      this.result += this.letterDec(key[i], message[i]);
  }
  let decrypted = this.result.toUpperCase();
  this.result = "";
  return decrypted;
  }
}
module.exports = VigenereCipheringMachine;
