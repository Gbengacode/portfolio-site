export const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) { return (e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && storage && storage.length !== 0); }
};

export const loadDataFromStore = (userName, email, message, formData) => {
  if (localStorage.getItem('formData')) {
    const retrivedData = JSON.parse(localStorage.getItem('formData'));
    userName.value = retrivedData.userNameValue;
    email.value = retrivedData.emailValue;
    message.value = retrivedData.messageValue;
    formData.userNameValue = retrivedData.userNameValue;
    formData.emailValue = retrivedData.emailValue;
    formData.messageValue = retrivedData.messageValue;
  }
};
