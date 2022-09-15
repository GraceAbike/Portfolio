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
  if (isValid === false) {
    e.preventDefault();
    validationMessage.innerText = 'Email must contain only lowercase letters';
    setTimeout(() => {
      validationMessage.textContent = '';
    }, 5000);
  }
});

// Local Storage
const nameEl = document.querySelector('#name');
const nameVal = localStorage.getItem('nameEl');
if (nameEl) {
  nameEl.value = nameVal;
}
const namEl = document.querySelector('#name');
const namVal = localStorage.getItem('nameEl');
if (namEl) {
  namEl.value = namVal;
}

const mailEl = document.querySelector('#email');
const emailVal = localStorage.getItem('mailEl');
if (mailEl) {
  mailEl.value = emailVal;
}
const messageEl = document.querySelector('#message');
const messageVal = localStorage.getItem('messageEl');
if (messageEl) {
  messageEl.value = messageVal;
}
nameEl.addEventListener('input', (e) => {
  localStorage.setItem('nameEl', e.target.value);
});
namEl.addEventListener('input', (e) => {
  localStorage.setItem('namEl', e.target.value);
});
mailEl.addEventListener('input', (e) => {
  localStorage.setItem('mailEl', e.target.value);
});

messageEl.addEventListener('input', (e) => {
  localStorage.setItem('messageEl', e.target.value);
});