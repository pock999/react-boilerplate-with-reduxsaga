const accessStorage = {
  get() {
    return {
      email: localStorage.getItem('_email'),
      key: localStorage.getItem('_token'),
    };
  },
  set(email, key) {
    localStorage.setItem('_email', email);
    localStorage.setItem('_token', key);
  },
};

export default accessStorage;
