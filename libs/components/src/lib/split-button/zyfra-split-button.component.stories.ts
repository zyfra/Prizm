import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraSplitButtonComponent } from './zyfra-split-button.component';
import { ZyfraSplitButtonModule } from './zyfra-split-button.module';

export default {
  moduleId: module.id,
  title: 'Buttons/SplitButton',
  component: ZyfraSplitButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, BrowserAnimationsModule, CommonModule, ZyfraSplitButtonModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./').default,
    },
  },
} as Meta;

const Template: Story<ZyfraSplitButtonComponent> = (args) => ({
  component: ZyfraSplitButtonComponent,
  props: args,
});

const items = [
  { label: 'Item1', icon: 'zyfra-icon arrows-replay' },
  { label: 'Item2', icon: 'zyfra-icon cancel-close' },
  { separator: true },
  { label: 'Item3', icon: 'zyfra-icon cancel-close' },
];

export const Simple = Template.bind({});
Simple.args = {
  label: 'SplitButton',
  model: items,
};

export const SimpleMini = Template.bind({});
SimpleMini.args = {
  ...Simple.args,
  styleClass: 'p-splitbutton-mini',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'disabled SplitButton',
  styleClass: 'p-splitbutton-secondary',
};

export const WarningWithIcon = Template.bind({});
WarningWithIcon.args = {
  disabled: false,
  model: items,
  label: 'color warning',
  styleClass: 'p-splitbutton-warning',
  icon: 'zyfra-icon location-compass',
};

export const AnimationSpeed = Template.bind({});
AnimationSpeed.args = {
  label: 'animation speed',
  model: items,
  showTransitionOptions: '1000ms',
  hideTransitionOptions: '2000ms',
  styleClass: 'p-splitbutton-danger',
};
