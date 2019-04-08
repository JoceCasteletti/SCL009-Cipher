const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const message_text = document.getElementById('message_text');
const start = document.getElementById('start');
const container = document.getElementById('container');


const encodeMessage = document.getElementById('encode_message');
const encodeOffset = document.getElementById('encode_offset');
const resultContainer = document.getElementById('result_container');
const result = document.getElementById('result');
const sendEmail= document.getElementById('send_email');

// https://developer.mozilla.org/en-US/docs/Web/Events/keypress
encodeMessage.addEventListener('keypress', (event) => {
    if (!(event.keyCode >= 65 && event.keyCode <=90)) {
        event.preventDefault();
    }
})

encode.addEventListener('click', () => {
    if (encodeMessage.value.length == 0) {
        alert('Ingrese algun mensaje por favor');
        return;
    } else if (!Number.isInteger(encodeOffset.value) && encodeOffset.value == 0) {
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/isInteger
        alert('Ingrese número válido por favor');
        return;
    }

    // Lista de las clases del elemento del DOM
    resultContainer.classList.remove('hidden');

    result.value = window.cipher.encode(encodeOffset.value, encodeMessage.value);
});


start.addEventListener('click', () => {
    // Aquí va lógica de validación de comprobación de nombre ante de continuar

   if (document.getElementById('name').value.length == 0) {
       alert('Ingrese su nombre para poder continuar, porfavor')
   } else {
     container.style.display = 'block';
   }




})


sendEmail.addEventListener('click',() => {
    if(document.getElementById('send_email').value.length == 0) {
        alert('Ingrese el email al que desea enviar el texto')
    } else {
        container.style.display = 'block';
      }
   

})





