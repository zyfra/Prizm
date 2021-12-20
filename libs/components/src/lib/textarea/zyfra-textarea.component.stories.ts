import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraTextareaComponent } from './zyfra-textarea.component';
import { ZyfraTextareaModule } from './zyfra-textarea.module';

export default {
  moduleId: module.id,
  title: 'Form/Textarea',
  component: ZyfraTextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, ZyfraTextareaModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-textarea.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraTextareaComponent> = (args) => ({
  component: ZyfraTextareaComponent,
  props: args,
  template: `
<zyfra-textarea
  [rows]="rows"
  [cols]="cols"
  [autoResize]="autoResize"
  [(ngModel)]="ngModel"
  [placeholder]="placeholder"
  [class]="class"
  [label]="label"
  [disabled]="disabled"
  [maxlength]="maxlength"
  [minlength]="minlength"
  [name]="name"
></zyfra-textarea>
  `,
});

export const Simple = Template.bind({});
Simple.args = {
  rows: '5',
  cols: '100',
  autoResize: false,
  ngModel: 'my model for textarea',
  disabled: false,
  placeholder: 'placeholder',
  class: 'my-class',
  maxlength: 100,
  minlength: 0,
  name: 'someName',
  label: 'Заголовок',
  required: true,
};
