import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraButtonModule } from '../button';
import { ZyfraCheckBoxModule } from './zyfra-checkbox.module';
import { ZyfraCheckboxComponent } from './zyfra-checkbox.component';

export default {
  moduleId: module.id,
  title: 'Form/CheckBox',
  component: ZyfraCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraButtonModule,
        ZyfraCheckBoxModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-checkbox.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraCheckboxComponent> = (args) => ({
  template: `
    <zyfra-checkbox
      [(model)]="model"
      [name]="name"
      [value]="value"
      [label]="label"
      [disabled]="disabled"
      [binary]="binary"
      [tabindex]="tabindex"
      [inputId]="inputId"
      [ariaLabelledBy]="ariaLabelledBy"
      [style]="style"
      [styleClass]="styleClass"
      [labelStyleClass]="labelStyleClass"
      [checkboxIcon]="checkboxIcon"
      [readonly]="readonly"
      [required]="required"
    ></zyfra-checkbox>
    <br>
    (Значение чекбокса: {{model === null ? 'null' : model}})
  `,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  model: false,
  label: 'Простой чекбокс',
  binary: true,
  disabled: false
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  model: true,
  checkboxIcon: 'zyfra-icon arrows-replay',
  label: 'Чекбокс с измененнной иконкой',
  binary: true,
  disabled: false
};

const CheckboxWithFormControlComponentTemplate: Story = (args) => ({
  template: `
    <zyfra-checkbox label="Чекбокс с FormControl" [formControl]="fControl"></zyfra-checkbox>
    <br>
    (Значение чекбокса: {{fControl?.value === undefined ? 'undefined' : fControl?.value}})
    <br>
    <br>
    <zyfra-button [style]="{ 'margin-right': '5px' }" label="toggle disable/enable" (click)="toggleStatus()"></zyfra-button>
    <zyfra-button label="toggle true/false" (click)="toggleValue()"></zyfra-button>
  `,
  props: {
    ...args,
    fControl: new FormControl(true),
    toggleStatus(): void {
      if (this.fControl.disabled) {
        this.fControl.enable();
      } else {
        this.fControl.disable();
      }
    },
    toggleValue(): void {
      this.fControl.setValue(!this.fControl.value);
    },
  },
});

export const WithFormControl = CheckboxWithFormControlComponentTemplate.bind({});
