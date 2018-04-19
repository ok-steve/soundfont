import './app';
import '../styles/main.css';

/* eslint-disable compat/compat */
if (navigator.serviceWorker !== undefined) {
  navigator.serviceWorker.register('./service-worker.js');
}
/* eslint-enable */
