import { storageAvailable, loadDataFromStore } from './utils/localHelper.js';
import { userName, email, message } from './form.js';

if (storageAvailable('localStorage')) {
  const formData = { userNameValue: '', emailValue: '', messageValue: '' };

  const userFun = (e) => {
    formData.userNameValue = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const emailFun = (e) => {
    formData.emailValue = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const messageFun = (e) => {
    formData.messageValue = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  userName.addEventListener('change', userFun);
  email.addEventListener('change', emailFun);
  message.addEventListener('change', messageFun);

  window.addEventListener(
    'load',
    loadDataFromStore(userName, email, message, formData),
  );
}
