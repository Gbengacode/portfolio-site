import * as validator from './utils/validate.js';

const form = document.querySelector('form');
export const userName = document.querySelector('#name');
export const email = document.querySelector('#email');
export const message = document.querySelector('#message');
const errMsg = document.createElement('div');
errMsg.className = 'errorMsg';
const ul = document.createElement('ul');
errMsg.appendChild(ul);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validator.errors.length = 0;
  validator.userNameValidator(userName.value);
  validator.emailValidator(email.value);
  validator.messageValidator(message.value);

  const container = errMsg.firstElementChild;
  container.innerHTML = '';
  if (validator.errors.length) {
    form.insertAdjacentElement('beforeend', errMsg);
    validator.errors.forEach((error) => {
      const li = document.createElement('li');
      const text = document.createTextNode(error);
      li.appendChild(text);
      container.appendChild(li);
    });
    return;
  }
  errMsg.style.display = 'none';
  form.submit();
  form.reset();
});
