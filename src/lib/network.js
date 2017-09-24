export const makeRequest = (input, init) => {
  return fetch(input, init).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return Promise.resolve(response);
  });
};
