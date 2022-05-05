import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraButtonModule } from '../button';
import { ZyfraCheckBoxModule } from './zyfra-checkbox.module';
import { ZyfraCheckboxComponent } from './zyfra-checkbox.component';
import { ZyfraCheckboxMultipleComponent } from './story/miltiple-checkbox.component';

export default {
  moduleId: module.id,
  title: 'Form/CheckBox',
  component: ZyfraCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, ZyfraButtonModule, ZyfraCheckBoxModule],
      declarations: [ZyfraCheckboxMultipleComponent],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-checkbox.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraCheckboxComponent> = args => ({
  template: `<div>
    <zyfra-checkbox
      [formControl]="formControl"
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
      [trueValue]="trueValue"
      [falseValue]="falseValue"
    ></zyfra-checkbox>
    </div>
    <div style="font-family: var(--fontFamily); margin-top: 20px;">(Значение чекбокса: {{formControl?.value === undefined ? 'undefined' : formControl?.value}})</div>
  `,
  props: {
    ...args,
    formControl: new FormControl(true),
  },
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'Простой чекбокс',
  binary: true,
  disabled: false,
  trueValue: true,
  falseValue: false,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  checkboxIcon: 'zyfra-icon arrows-replay',
  label: 'Чекбокс с измененнной иконкой',
  binary: true,
  disabled: false,
  trueValue: true,
  falseValue: false,
};

const CheckboxWithFormControlComponentTemplate: Story<ZyfraCheckboxComponent> = args => ({
  template: `
    <div><zyfra-checkbox label="Чекбокс с FormControl" [formControl]="formControl"></zyfra-checkbox></div>
    <div style="font-family: var(--fontFamily); margin-top: 20px;">(Значение чекбокса: {{formControl?.value === undefined ? 'undefined' : formControl?.value}})</div>
    <br>
    <br>
    <zyfra-button [style]="{ 'margin-right': '5px' }" label="toggle disable/enable" (click)="toggleStatus()"></zyfra-button>
    <zyfra-button label="toggle true/false" (click)="toggleValue()"></zyfra-button>
  `,
  props: {
    ...args,
    formControl: new FormControl(false),
    toggleStatus(): void {
      if (this.formControl.disabled) {
        this.formControl.enable();
      } else {
        this.formControl.disable();
      }
    },
    toggleValue(): void {
      this.formControl.setValue(!this.formControl.value);
    },
  },
});

export const WithFormControl = CheckboxWithFormControlComponentTemplate.bind({});

const CheckboxMultipleTemplate: Story = args => ({
  template: `
  <zyfra-checkbox-multiple></zyfra-checkbox-multiple>
  `,
  props: {
    ...args,
  },
});

export const Multiple = CheckboxMultipleTemplate.bind({});
