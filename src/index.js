const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const message_text = document.getElementById('message_text');
const start = document.getElementById('start');
const container = document.getElementById('container');

// https://developer.mozilla.org/en-US/docs/Web/Events/keypress
ejemplo.addEventListener('keypress', (event) => {
    if (!(event.keyCode >= 65 && event.keyCode <=90)) {
        event.preventDefault();
    }
})


start.addEventListener('click', () => {
    // Aquí va lógica de validación de comprobación de nombre ante de continuar

   if (document.getElementById('name').value.length == 0) {
       alert('Ingrese su nombre para poder continuar, porfavor')
   } else {
     container.style.display = 'block';
   }




})




