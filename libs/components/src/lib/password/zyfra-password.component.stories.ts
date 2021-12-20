import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraPasswordComponent } from './zyfra-password.component';
import { ZyfraPasswordModule } from './zyfra-password.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
  props: args,
  template: `<zyfra-password [(ngModel)]="ngModel" [toggleMask]="toggleMask"></zyfra-password>`,
});

export const Simple = Template.bind({});
Simple.args = {
  ngModel: 'password',
  label: 'Пароль',
  toggleMask: false,
};

export const ToggleMask = Template.bind({});
ToggleMask.args = {
  value: 'password',
  toggleMask: true,
  label: 'Пароль',
};
