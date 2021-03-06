window.cipher = {
  encode: (offset, message) => {
    let resultEncode = '';

    //Recorrer el mensaje , almacenarlo y convertirlo a código Ascii
    for (let i = 0; i < message.length; i++) {
      let asciiNumber = message.charCodeAt(i);//pasar la letra a código Ascii

      //Mayúsculas
      if (asciiNumber >= 65 && asciiNumber <= 90) {
        asciiNumber = ((asciiNumber - 65 + parseInt(offset)) % 26) + 65;
      }
      //Minúsculas
      else if (asciiNumber >= 97 && asciiNumber <= 122) {
        asciiNumber = ((asciiNumber - 97 + parseInt(offset)) % 26) + 97;
      }
      //Números
      else if (asciiNumber >= 48 && asciiNumber <= 57) {
        asciiNumber = ((asciiNumber - 48 + parseInt(offset)) % 10) + 48;
      }
      //Espacio
      else if (asciiNumber == 32) {
        asciiNumber = ((asciiNumber - 32 + parseInt(offset)) % 1) + 32;
      }
      //Ñ o ñ
      else if (asciiNumber >= 164 && asciiNumber <= 165) {
        asciiNumber = ((asciiNumber - 164 + parseInt(offset)) % 2) + 164;
      }

      resultEncode += String.fromCharCode(asciiNumber);
    }
    return resultEncode;
  },

  decode: (offset, message) => {
    let resultDecode = '';
    let newOffset = 0;

    //Recorrer el mensaje , almacenarlo y convertirlo a código Ascii
    for (let i = 0; i < message.length; i++) {
      let asciiNumber = message.charCodeAt(i);

      // Mayúsculas
      if (asciiNumber >= 65 && asciiNumber <= 90) {
        newOffset = 26 - offset % 26;
        asciiNumber = ((asciiNumber - 65 + parseInt(newOffset)) % 26) + 65;
      }
      //Minúsculas
      else if (asciiNumber >= 97 && asciiNumber <= 122) {
        newOffset = 26 - offset % 26;
        asciiNumber = ((asciiNumber - 97 + parseInt(newOffset)) % 26) + 97;
      }
      //Números
      else if (asciiNumber >= 48 && asciiNumber <= 57) {
        newOffset = 10 - offset % 26;
        asciiNumber = ((asciiNumber - 48 + parseInt(newOffset)) % 10) + 48;
      }
      //Espacio
      else if (asciiNumber == 32) {
        asciiNumber = ((asciiNumber - 32 + parseInt(newOffset)) % 1) + 32;
      }
      else if (asciiNumber >= 164 && asciiNumber <= 165) {
        newOffset = 2 - offset % 26;
        asciiNumber = ((asciiNumber - 164 + parseInt(newOffset)) % 2) + 164;
      }

      resultDecode = resultDecode + String.fromCharCode(asciiNumber);
    }

    return resultDecode;

  }
};
