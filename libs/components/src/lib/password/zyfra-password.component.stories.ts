import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraPasswordComponent } from './zyfra-password.component';
import { ZyfraPasswordModule } from './zyfra-password.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';

export default {
  moduleId: module.id,
  title: 'Form/Password',
  component: ZyfraPasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, ZyfraPasswordModule, NoopAnimationsModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-password.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraPasswordComponent> = (args) => ({
  component: ZyfraPasswordComponent,
  template: `
    <zyfra-password
      [(ngModel)]='ngModel'
      [toggleMask]='toggleMask'
      [mediumRegex]='mediumRegex'
      [strongRegex]='strongRegex'
      [weakLabel]='weakLabel'
      [mediumLabel]='mediumLabel'
      [strongLabel]='strongLabel'
      [label]='label'
      [promptLabel]='promptLabel'
      [required]='required'
      [disabled]='disabled'>
      (onBlur)="onBlur($event)"
      (onFocus)="onFocus($event)"
    ></zyfra-password>
  `,
  props: {
    ...args,
    onBlur: action('onBlur'),
    onFocus: action('onFocus'),
  },
});

export const Simple = Template.bind({});
Simple.args = {
  ngModel: '',
  label: 'Пароль',
  promptLabel: 'Введите пароль',
  weakLabel: 'Слабый пароль',
  mediumLabel: 'Средний пароль',
  strongLabel: 'Сильный пароль',
  toggleMask: false,
  disabled: false,
  required: false,
  mediumRegex: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).',
  strongRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'
};

export const ToggleMask = Template.bind({});
ToggleMask.args = {
  ngModel: '',
  label: 'Пароль',
  promptLabel: 'Введите пароль',
  weakLabel: 'Слабый пароль',
  mediumLabel: 'Средний пароль',
  strongLabel: 'Сильный пароль',
  toggleMask: true,
  disabled: false,
  required: false,
  mediumRegex: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).',
  strongRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'
};
