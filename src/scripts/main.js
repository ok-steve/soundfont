import app from './app';

import '../styles/main.css';

const html = document.querySelector('html');
const body = document.querySelector('body');
const el = document.querySelector('#app');

app(el);

window.addEventListener('hashchange', (e) => {
  html.scrollTop = 0;
  body.scrollTop = 0;
});

if (navigator.serviceWorker !== undefined) {
  navigator.serviceWorker.register('./service-worker.js');
}
