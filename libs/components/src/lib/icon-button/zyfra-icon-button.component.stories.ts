import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraIconModule } from '../icon';
import { ZyfraIconButtonDirective } from './zyfra-icon-button.directive';

export default {
  moduleId: module.id,
  title: 'Buttons/IconButton',
  component: ZyfraIconButtonDirective,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, ZyfraIconModule, CommonModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-icon-button.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraIconButtonDirective> = args => ({
  component: ZyfraIconButtonDirective,
  props: args,
  template: `
  <button zyfraIconButton [disabled]='disabled'>
    <zyfra-icon [iconClass]='iconClass'></zyfra-icon>
  </button>
`,
});

export const Simple = Template.bind({});
Simple.args = {
  disabled: false,
  iconClass: 'tools-broom'
};
