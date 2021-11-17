import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ZyfraSelectButtonComponent } from './zyfra-select-button.component';
import { ZyfraSelectButtonModule } from './zyfra-select-button.module';

export default {
  moduleId: module.id,
  title: 'Buttons/SelectButton',
  component: ZyfraSelectButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ZyfraSelectButtonModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-select-button.component.story.doc.mdx').default,
    },
  },
} as Meta;

interface StoryCity {
  name: string;
  code: string;
}

const cities: StoryCity[] = [
  { name: 'Russia', code: 'RU' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
];

const Template: Story<ZyfraSelectButtonComponent<StoryCity, string>> = (args) => ({
  component: ZyfraSelectButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: cities,
  optionLabel: 'name',
  optionDisabled: 'inactive',
  multiple: true,
  optionValue: 'code',
  disabled: false,
  styleClass: 'selectbutton-default',
};

export const DefaultMini = Template.bind({});
DefaultMini.args = {
  ...Default.args,
  styleClass: 'p-selectbutton-default p-selectbutton-mini',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  styleClass: 'p-selectbutton-danger',
};
