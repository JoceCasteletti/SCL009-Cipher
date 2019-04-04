window.cipher = {
  encode: (offset, message) => {
    let result = '';
   
    for (let i=0; i < message.length; i++) {
      let asciiNumber = message.charCodeAt(i);

      if (asciiNumber >= 65 && asciiNumber <=90) {
        asciiNumber = ((asciiNumber - 65 + offset) % 26) + 65;
      }

      result += String.fromCharCode(asciiNumber);
    }
    return result;
  },

  decode: (message,ofset) => {
    /* Acá va tu código */
  }
};
