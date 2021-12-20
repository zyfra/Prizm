import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraInputMaskComponent } from './zyfra-input-mask.component';
import { ZyfraInputMaskModule } from './zyfra-input-mask.module';

export default {
  moduleId: module.id,
  title: 'Form/InputMask',
  component: ZyfraInputMaskComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, ZyfraInputMaskModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-input-mask.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraInputMaskComponent> = (args) => ({
  component: ZyfraInputMaskComponent,
  template: `
  <zyfra-input-mask
    [label]="label"
    [(ngModel)]="ngModel"
    [mask]="mask"
    [slotChar]="slotChar"
    [placeholder]="placeholder"
></zyfra-input-mask>
  `,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  ngModel: '',
  disabled: false,
  placeholder: '99-999999',
  mask: '99-9999',
  slotChar: ' ',
  label: 'Маска',
};

export const Date = Template.bind({});
Date.args = {
  ngModel: '',
  disabled: false,
  placeholder: '99/99/9999',
  mask: '99/99/9999',
  slotChar: 'mm/dd/yyyy',
  label: 'Маска по дате',
};

export const SSN = Template.bind({});
SSN.args = {
  ngModel: '',
  disabled: false,
  placeholder: '999-99-9999',
  mask: '999-99-9999',
  slotChar: ' ',
  label: 'SSN',
};

export const Phone = Template.bind({});
Phone.args = {
  ngModel: '',
  disabled: false,
  placeholder: '9(999) 999-9999',
  mask: '9(999) 999-9999',
  slotChar: ' ',
  label: 'Мобильный телефон',
  required: true,
};

export const PhoneExt = Template.bind({});
PhoneExt.args = {
  ngModel: '',
  disabled: false,
  placeholder: '9(999) 999-9999? x99999',
  mask: '9(999) 999-9999? x99999',
  slotChar: ' ',
  label: 'Мобильный телефон',
};

export const SerialNumber = Template.bind({});
SerialNumber.args = {
  ngModel: '',
  disabled: false,
  placeholder: 'a*-999-a999',
  mask: 'a*-999-a999',
  slotChar: ' ',
  label: 'Serial Number',
};
