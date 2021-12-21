import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraInputNumberComponent } from './zyfra-input-number.component';
import { ZyfraInputNumberModule } from './zyfra-input-number.module';
import { action } from '@storybook/addon-actions';

export default {
  moduleId: module.id,
  title: 'Form/InputNumber',
  component: ZyfraInputNumberComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, ZyfraInputNumberModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-input-number.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraInputNumberComponent> = (args) => ({
  component: ZyfraInputNumberComponent,
  template: `
    <zyfra-input-number
      [(ngModel)]="value"
      [showButtons]="showButtons"
      [mode]="mode"
      [currency]="currency"
      [label]="label"
      [placeholder]="placeholder"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
      (onInput)="onInput($event)"
    ></zyfra-input-number>
  `,
  props: {
    ...args,
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    onInput: action('onInput'),
  },
});

export const Basic = Template.bind({});
Basic.args = {
  value: null,
  suffix: null,
  disabled: false,
  showButtons: false,
  placeholder: 'Введите число',
  label: 'Basic',
};

export const Decimal = Template.bind({});
Decimal.args = {
  value: 10,
  disabled: false,
  showButtons: true,
  mode: 'decimal',
  suffix: null,
  step: 1,
  min: 0,
  max: 100,
  incrementButtonIcon: 'zyfra-icon add-plus',
  decrementButtonIcon: 'zyfra-icon delete-minus',
  buttonLayout: 'horizontal',
  label: 'Decimal',
};

export const Currency = Template.bind({});
Currency.args = {
  value: 10,
  disabled: false,
  showButtons: true,
  placeholder: 'Введите сумму',
  mode: 'currency',
  suffix: '$',
  currency: 'USD',
  label: 'Currency',
};
