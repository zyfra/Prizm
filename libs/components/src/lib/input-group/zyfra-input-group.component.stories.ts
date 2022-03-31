import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraIconModule } from '../icon';
import { ZyfraInputTextModule } from '../input-text';
import { ZyfraInputGroupComponent } from './zyfra-input-group/zyfra-input-group.component';

export default {
  moduleId: module.id,
  title: 'Form/InputGroup',
  component: ZyfraInputGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ZyfraIconModule,
        ZyfraInputTextModule,
        CommonModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-input-group.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraInputGroupComponent> = args => ({
  component: ZyfraInputGroupComponent,
  props: args,
  template: `
  <zyfra-input-group [label]="label">
    <input zyfraInput [placeholder]='placeholder' [ngModel]='model'>
  </zyfra-input-group>
`,
});

export const Simple = Template.bind({});
Simple.args = {
  label: 'Label',
  model: 'Text',
  placeholder: 'Placeholder',
};
