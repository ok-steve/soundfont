import fromEvent from '../lib/Observable/fromEvent';
import startWith from '../lib/Observable/startWith';

const form = document.querySelector('form');
const storage = 'soundfont';

// Load initial state
if (localStorage.getItem(storage)) {
  const data = JSON.parse(localStorage.getItem(storage));
  const els = form.elements;

  Object.keys(data).forEach((key) => {
    const el = els.namedItem(key);

    if (el.type === 'checkbox') {
      const checked = data[key] === 'on';
      el.checked = checked;
    } else {
      el.value = data[key];
    }
  });
}

const state = startWith(fromEvent(form, 'change'), new FormData(form)).map(
  () => new FormData(form),
);

export default state;

state.subscribe((data) => {
  const newState = {};

  data.forEach((value, key) => {
    newState[key] = value;
  });

  localStorage.setItem(storage, JSON.stringify(newState));
});
