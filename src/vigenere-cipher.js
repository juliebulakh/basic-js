
class VigenereCipheringMachine {
    constructor(accept) {
      // console.log(accept);
  
    }
    encrypt(message, key) {
        let alpha = [];
        let keyA = key.repeat(10);
        for (let i = 65; i < 91; i++) {
            alpha.push(String.fromCharCode(i));
        }
      let arr = [];
      for (let i = 0; i < message.length; i++) {
          if (alpha.includes(message.toUpperCase().charAt(i))) {
              arr.push((alpha.indexOf(message.toUpperCase().charAt(i)) + alpha.indexOf(keyA.toUpperCase().charAt(i))) % alpha.length);
          }
          else {
              arr.push(message.toUpperCase().charAt(i));
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
    decrypt(encryptedMessage, key) {
        let alpha = [];
        let keyA = key.repeat(10);
        for (let i = 65; i < 91; i++) {
            alpha.push(String.fromCharCode(i));
        }
      let arr = [];
      for (let i = 0; i < message.length; i++) {
          if (alpha.includes(message.toUpperCase().charAt(i))) {
              arr.push((alpha.indexOf(message.toUpperCase().charAt(i)) - alpha.indexOf(keyA.toUpperCase().charAt(i))) % alpha.length);
          }
          else {
              arr.push(message.toUpperCase().charAt(i));
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
  }

module.exports = VigenereCipheringMachine;
