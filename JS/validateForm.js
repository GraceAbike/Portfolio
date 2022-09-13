const formContainer = document.querySelector('.form-container');
const email = document.querySelector('#email');
const validationMessage = document.querySelector('#error');
validationMessage.style.color = '#ff0000';
validationMessage.style.fontSize = '15px';
validationMessage.style.padding = '4px';
formContainer.addEventListener('submit', (e) => {
    let isValid = false;
    if (email.value === email.value.toLowerCase()) {
      isValid = true;
    }
})