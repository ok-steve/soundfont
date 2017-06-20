import { h } from 'snabbdom/h';

export interface IOption {
  textContent: string;
  value: number | string;
}

const option = (textContent: string, value: number | string, selected: number | string): VNode => {
  return h('option', {
    attrs: {
      value,
      selected: value === selected,
    },
  }, textContent);
};

export const select = (label: string, { attrs, on }, options: IOption[]): VNode => {
  return h('div', [
    h('label', {
      attrs: {
        for: id,
      },
    }, label),
    h('select', {
      attrs,
      on,
    }, [
      ...options.map(({ textContent, value }: IOption): VNode => {
        return option(textContent, value, attrs.value);
      }),
    ]),
  ]);
};
