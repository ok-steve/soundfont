const httpFetch = (url, { method = 'GET', responseType = 'text' } = {}) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = responseType;
    xhr.open(method, url);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      }
    };

    xhr.send();
  });

export default httpFetch;
