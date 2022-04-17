import axios from 'axios';

const methods = ['get', 'post', 'put', 'delete'];

const request = (method, url, data, options) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...options,
  };
  if (methods.includes(method)) {
    return axios({ method, url, data, headers })
      .then((response) => response.data)
      .catch((err) => err);
  }
  return console.error(`${url} servisi ${method} tipinde olamaz!!!`);
};

const requestWithoutToken = (method, url, data, options) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options,
  };
  if (methods.includes(method)) {
    return axios({ method, url, data, headers })
      .then((response) => response.data)
      .catch((err) => err);
  }
  return console.error(`${url} servisi ${method} tipinde olamaz!!!`);
};

export { request, requestWithoutToken };
