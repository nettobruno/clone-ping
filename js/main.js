let inputEmail = document.querySelector('#email');
let textError = document.querySelector("form p");
let buttonForm = document.querySelector('#formButton');

buttonForm.addEventListener('click', function(e) {
  e.preventDefault();

  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if(!regex.test(inputEmail.value)) {
    inputEmail.classList.add('borderRed');
    textError.style.color = 'hsl(354, 100%, 66%)';
    textError.classList.add('showError');
  }
  else {
    inputEmail.classList.remove('borderRed');
    textError.classList.remove('showError');
    alert('Email válido');
  }
})