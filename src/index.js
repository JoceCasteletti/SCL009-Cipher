const $ = window.$;
//se crea variable para pasar test
const start = document.getElementById('start');
const encodeMessage = document.getElementById('encode_message');
const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const container = document.getElementById('container');
const instructions = document.getElementById('instructions');
const welcomeName = document.getElementById('welcome_name');
const encodeOffset = document.getElementById('encode_offset');
const resultContainer = document.getElementById('result_container');
const result = document.getElementById('result');
const sendEmail = document.getElementById('send_email');
const decodeMessage = document.getElementById('decode_message');
const decodeOffset = document.getElementById('decode_offset');
const clean = document.getElementById('clean');
const name = document.getElementById('name');
const modalText = document.getElementById('modal_text');

start.addEventListener('click', () => {
    // Aquí va lógica de validación de comprobación de nombre ante de continuar

   if (name.value.length == 0) {
       alert('Ingrese su nombre para poder continuar, porfavor')
   } else {
    // no se muestra hasta ingresar el nombre y presionar el botón comenzar
     container.classList.remove('hidden');
     instructions.classList.remove('hidden');
     welcomeName.innerText = name.value;
   }
})



// https://developer.mozilla.org/en-US/docs/Web/Events/keypress
encodeMessage.addEventListener('keypress', (event) => {
    if (
        !(event.keyCode >= 65 && event.keyCode <=90 ||
        event.keyCode >= 97 && event.keyCode <=122 ||
        event.keyCode >= 48 && event.keyCode <=57 ||
        event.keyCode >= 32 && event.keyCode <=32)
        ) {
        event.preventDefault();
    }
})
//preventDefault es para determinar el comportamiento predeterminado
//en este caso que al hacer click no se vaya hacia arriba en encode
encode.addEventListener('click', (event) => {
    event.preventDefault();
    
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



decode.addEventListener('click',(event) => {
    event.preventDefault();

    if (decodeMessage.value.length == 0) {
        alert('Ingrese algun mensaje por favor');
        return; 


    } else if (!Number.isInteger(decodeOffset.value) && decodeOffset.value == 0) {
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/isInteger
        alert('Ingrese número válido por favor');
        return;
    }

    // Lista de las clases del elemento del DOM
    resultContainer.classList.remove('hidden');

    result.value = window.cipher.decode(decodeOffset.value, decodeMessage.value);
});

sendEmail.addEventListener('click', (event) => {
    event.preventDefault();

    //https://getbootstrap.com/docs/4.0/components/modal/
    //Muestra el resultado codificado o decodificado en el modal
    modalText.innerHTML = result.value;
    $('#modal_email').modal('show');

});

//Limpiar 
clean.addEventListener('click', (event) => {
    event.preventDefault();

    encodeMessage.value = '';
    decodeMessage.value = '';
    decodeOffset.value = '';
    encodeOffset.value = '';
    resultContainer.value='';
});


