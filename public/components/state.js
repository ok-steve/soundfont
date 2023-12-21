import fromEvent from "../lib/Observable/fromEvent.js";
import startWith from "../lib/Observable/startWith.js";

const form = document.querySelector("form");
const storage = "soundfont";

// Disable normal form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Sync input and output values
document.querySelectorAll('input[type="range"][id]').forEach((input) => {
  input.addEventListener("input", (e) => {
    const id = e.target.id;
    const output = document.querySelector(`output[for="${id}"]`);

    if (output !== null) {
      output.textContent = e.target.value;
    }
  });
});

// Load initial state
if (localStorage.getItem(storage)) {
  const data = JSON.parse(localStorage.getItem(storage));
  const els = form.elements;

  Object.keys(data).forEach((key) => {
    const el = els.namedItem(key);

    if (el.type === "checkbox") {
      const checked = data[key] === "on";
      el.checked = checked;
    } else {
      el.value = data[key];
    }
  });
}

const state = startWith(fromEvent(form, "change"), new FormData(form)).map(
  () => new FormData(form)
);

export default state;

state.subscribe((data) => {
  const newState = {};

  data.forEach((value, key) => {
    newState[key] = value;
  });

  localStorage.setItem(storage, JSON.stringify(newState));
});
