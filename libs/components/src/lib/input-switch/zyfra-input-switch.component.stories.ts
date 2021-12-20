import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraInputSwitchComponent } from './zyfra-input-switch.component';
import { ZyfraInputSwitchModule } from './zyfra-input-switch.module';

export default {
  moduleId: module.id,
  title: 'Form/InputSwitch',
  component: ZyfraInputSwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, ZyfraInputSwitchModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-input-switch.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraInputSwitchComponent> = (args) => ({
  component: ZyfraInputSwitchComponent,
  props: args,
  template: `
<zyfra-input-switch [(ngModel)]="checked"></zyfra-input-switch>`,
});

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};
