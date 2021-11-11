import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraInputComponent } from './zyfra-input.component';
import { ZyfraInputModule } from './zyfra-input.module';

export default {
  moduleId: module.id,
  title: 'Form/Input',
  component: ZyfraInputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, ZyfraInputModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-input.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraInputComponent> = (args) => ({
  component: ZyfraInputComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  id: 'input1',
  type: 'text',
  value: 'my model',
  disabled: false,
  placeholder: 'placeholder',
  label: 'Simple',
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  id: 'input2',
  type: 'text',
  value: 'my model',
  disabled: false,
  placeholder: 'placeholder',
  tooltip: 'текст для тултипа',
  tooltipPosition: 'right',
  label: 'Tooltip',
};
