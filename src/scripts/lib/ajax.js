import { Observable } from './observable';

export const httpFetch = (url, { method = 'GET', responseType = 'text' } = {}) => new Observable((observer) => {
  const xhr = new XMLHttpRequest();

  xhr.responseType = responseType;
  xhr.open(method, url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        observer.next(xhr.response);
      } else {
        observer.error(xhr.response);
      }

      observer.complete();
    }
  };

  xhr.send();
});
