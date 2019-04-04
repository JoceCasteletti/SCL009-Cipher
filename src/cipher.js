window.cipher = {
  encode: (offset, message) => {
    let result = '';
   
    for (let i=0; i < message.length; i++) {
      let asciiNumber = message.charCodeAt(i);

      if (asciiNumber >= 65 && asciiNumber <=90) {
        asciiNumber = ((asciiNumber - 65 + offset) % 26) + 65;
      }
      
      if (asciiNumber >= 97 && asciiNumber <=122){
        asciiNumber = ((asciiNumber - 97 + offset) % 26) + 97;
      }

      if (asciiNumber >= 48 && asciiNumber <=57){
        asciiNumber = ((asciiNumber - 48 + offset) % 10) + 48;
      }

      if (asciiNumber == 32) {
        asciiNumber = ((asciiNumber - 32 + offset) % 1) + 32;
      }

      result += String.fromCharCode(asciiNumber);
    }
    return result;
  },

  decode: (message,ofset) => {
    /* Acá va tu código */
  }
};
