import { app } from './app';
import './synth';

const el = document.querySelector('#app');

app(el).subscribe();

const html = document.querySelector('html');
const body = document.querySelector('body');

window.addEventListener('hashchange', (e) => {
  html.scrollTop = 0;
  body.scrollTop = 0;
});

if (navigator.serviceWorker !== undefined) {
  navigator.serviceWorker.register('./service-worker.js');
}
