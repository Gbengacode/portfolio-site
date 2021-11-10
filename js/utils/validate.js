export const errors = [];
export const userNameValidator = (name) => {
  if (name === '') errors.push('Please enter your name');
  if (name !== '') {
    if (!name.match(/^[a-zA-Z" "\s]+$/)) {
      errors.push('Only letter allowed');
    }
  }
};

export const emailValidator = (email) => {
  if (email.trim() === '') errors.push('Please enter your email');
  if (email.trim() !== '') {
    if (!/\S+@\S+\.\S+/.test(email)) errors.push('Email address format is invalid');
    if (email !== email.toLowerCase()) errors.push('Please enter your email in lowercase');
  }
};

export const messageValidator = (message) => {
  if (message.trim() === '') errors.push('Please enter your message');
};
