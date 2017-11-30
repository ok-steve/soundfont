import { h } from 'snabbdom/h';

const option = (textContent, value, selected) => h('option', {
  attrs: {
    value,
    selected: value === selected,
  },
}, textContent);

const select = (label, { attrs, on }, options) => h('div', [
  h('label.db', {
    attrs: {
      for: attrs.id,
    },
  }, label),
  h('select.w-100', {
    attrs,
    on,
  }, [
    h('option', {
      value: '',
    }, 'Select an option'),
    ...options.map(({ textContent, value }) => option(textContent, value, attrs.value)),
  ]),
]);

export default select;
