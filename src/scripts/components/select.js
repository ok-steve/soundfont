import { h } from 'snabbdom/h';

const option = (textContent, value, selected) => {
  return h('option', {
    attrs: {
      value,
      selected: value === selected,
    },
  }, textContent);
};

export const select = (label, { attrs, on }, options) => {
  return h('div', [
    h('label', {
      attrs: {
        for: attrs.id,
      },
    }, label),
    h('select', {
      attrs,
      on,
    }, [
      ...options.map(({ textContent, value }) => {
        return option(textContent, value, attrs.value);
      }),
    ]),
  ]);
};
