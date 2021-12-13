import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraTriCheckboxComponent } from './zyfra-tri-checkbox.component';
import { ZyfraTriCheckBoxModule } from './zyfra-tri-checkbox.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ZyfraButtonModule } from '../button';

export default {
  moduleId: module.id,
  title: 'Form/TriCheckBox',
  component: ZyfraTriCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraButtonModule,
        ZyfraTriCheckBoxModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-tri-checkbox.component.story.doc.mdx'),
    },
  },
} as Meta;

const Template: Story<ZyfraTriCheckboxComponent> = (args) => ({
  template: `
    <zyfra-tri-checkbox
      [label]="label"
      [name]="name"
      [disabled]="disabled"
      [readonly]="readonly"
      [tabindex]="tabindex"
      [inputId]="inputId"
      [ariaLabelledBy]="ariaLabelledBy"
      [style]="style"
      [styleClass]="styleClass"
      [(model)]="model"
      (onChange)="onChangeHandler($event)"
    ></zyfra-tri-checkbox>
    <br>
    (Значение чекбокса: {{model === undefined || model === null ? 'null' : model}})
    <br>
    <br>
    <br>
    <zyfra-tri-checkbox
      [formControl]="fControl"
      label="Чекбокс С FormControl. Свойства disabled, readonly, name, label не распространяются"
      [tabindex]="tabindex"
      [inputId]="inputId"
      [ariaLabelledBy]="ariaLabelledBy"
      [style]="style"
      [styleClass]="styleClass"
    ></zyfra-tri-checkbox>
    <br>
    (Значение чекбокса: {{fControl.value === undefined || fControl.value === null ? 'null' : fControl.value}})
    <br>
    <br>
    <zyfra-button
      label="toggle disable/enable"
      [style]="{ 'margin-right': '5px' }"
      (click)="this.fControl.disabled ? this.fControl.enable() : this.fControl.disable()"
    ></zyfra-button>
    <zyfra-button label="toggle true/false" (click)="fControl.setValue(!fControl.value)"></zyfra-button>
  `,
  props: {
    ...args,
    fControl: new FormControl(true),
  },
});

export const Binary = Template.bind({});
Binary.args = {
  model: false,
  label: 'Чекбокс БЕЗ FormControl',
};
