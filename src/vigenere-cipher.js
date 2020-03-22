
class VigenereCipheringMachine {
    constructor(accept) {
 
    }
    encrypt(message, key) {
        let alpha = [];
        let keyA = key.repeat(2).split("");
        for (let i = 65; i < 91; i++) {
            alpha.push(String.fromCharCode(i));
        }
      let arr = [];
      for (let i = 0; i < message.length; i++) {
          if (alpha.includes(message.toUpperCase().charAt(i))) {
              arr.push((alpha.indexOf(message.toUpperCase().charAt(i)) + alpha.indexOf(keyA[i].toUpperCase().charAt())) % alpha.length);
          }
          else {
              arr.push(message.toUpperCase().charAt(i));
              keyA.splice(i,0," ");
          }
        }
      let final = [];
      for (let i = 0; i < message.length; i++) {
        if (alpha.includes(alpha[arr[i]])) {
          final.push(alpha[arr[i]]);
        }
        else final.push(arr[i]);
        // final.push(alpha[arr[i]]);
        }
  
      return final.join("");
      // return arr;
  
    }
    decrypt(message, key) {
      let alpha = [];
        let keyA = key.repeat(3).split("");
      for (let i = 65; i < 91; i++) {
          alpha.push(String.fromCharCode(i));
      }
    let arr = [];
    for (let i = 0; i < message.length; i++) {
        if (alpha.includes(message.toUpperCase().charAt(i))) {
            arr.push((Math.abs(alpha.indexOf(message.toUpperCase().charAt(i)) - alpha.indexOf(keyA[i].toUpperCase().charAt()))) % alpha.length);
        }
  
        else {
            arr.push(message.toUpperCase().charAt(i));
            keyA.splice(i, 0, " ");
        }
      }
    let final = [];
    for (let i = 0; i < message.length; i++) {
      if (alpha.includes(alpha[arr[i]])) {
        final.push(alpha[arr[i]]);
      }
      else final.push(arr[i]);
  
      }
    return final.join("");
    }
  }

module.exports = VigenereCipheringMachine;
