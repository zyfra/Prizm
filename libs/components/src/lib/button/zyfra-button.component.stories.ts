import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import ButtonDoc from './zyfra-button.component.story.doc.mdx';
import { ZyfraButtonComponent } from './zyfra-button.component';
import { ZyfraButtonModule } from './zyfra-button.module';

export default {
  moduleId: module.id,
  title: 'Buttons/Button',
  component: ZyfraButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, CommonModule, ZyfraButtonModule],
    }),
  ],
  parameters: {
    docs: {
      page: ButtonDoc,
    },
  },
} as Meta;

const Template: Story<ZyfraButtonComponent> = (args) => ({
  component: ZyfraButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  type: 'button',
  styleClass: '',
};

export const DefaultMini = Template.bind({});
DefaultMini.args = {
  label: 'Default',
  type: 'button',
  styleClass: 'p-button-mini',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  disabled: true,
  label: 'disabled Button',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  type: 'button',
  styleClass: 'p-button-success',
};

export const SuccessMini = Template.bind({});
SuccessMini.args = {
  label: 'Button',
  type: 'button',
  styleClass: 'p-button-success p-button-mini',
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  label: 'Delete',
  styleClass: 'p-button-secondary',
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info',
  type: 'button',
  styleClass: 'p-button-info',
};

export const Warning = Template.bind({});
Warning.args = {
  disabled: false,
  label: 'Warning',
  styleClass: 'p-button-warning',
};

export const Danger = Template.bind({});
Danger.args = {
  disabled: false,
  label: 'Delete',
  styleClass: 'p-button-danger',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'zyfra-icon selection-check-simple',
  iconPos: 'left',
  label: 'Icon',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: 'zyfra-icon selection-check-simple',
};

export const Submit = Template.bind({});
Submit.args = {
  label: 'Submit',
  type: 'submit',
  icon: 'zyfra-icon selection-check-simple',
  iconPos: 'right',
};

export const Badge = Template.bind({});
Badge.args = {
  label: 'with Badge 8',
  badge: '8',
};
