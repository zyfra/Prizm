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

const Template: Story<ZyfraTriCheckboxComponent> = args => ({
  template: `
    <div>
      <h3>Работа через ngModel</h3>
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
        [(ngModel)]="model"
        [checkboxTrueIcon]="checkboxTrueIcon"
        [checkboxFalseIcon]="checkboxFalseIcon"
      ></zyfra-tri-checkbox>
      <br>
      <small>(Значение чекбокса: {{model === undefined || model === null ? 'null' : model}})</small>
      <br>
      <br>
      <h3>Работа через formControl</h3>
      <zyfra-tri-checkbox
        [formControl]="fControl"
        [tabindex]="tabindex"
        [inputId]="inputId"
        [ariaLabelledBy]="ariaLabelledBy"
        [style]="style"
        [styleClass]="styleClass"
        label="Чекбокс FormControl. Свойства disabled, readonly, name, label не распространяются"
      ></zyfra-tri-checkbox>
      <br>
      <small>(Значение чекбокса: {{fControl.value === undefined || fControl.value === null ? 'null' : fControl.value}})</small>
      <br>
      <br>
      <zyfra-button
        label="toggle disable/enable"
        [style]="{ 'margin-right': '5px' }"
        (click)="this.fControl.disabled ? this.fControl.enable() : this.fControl.disable()"
      ></zyfra-button>
      <zyfra-button [style]="{ 'margin-right': '5px' }" label="toggle true/false" (click)="fControl.setValue(!fControl.value)"></zyfra-button>
      <zyfra-button label="toggle null" (click)="fControl.setValue(null)"></zyfra-button>
    </div>
    <div>
      <h3>Изменены checkboxTrueIcon zyfra-icon add-plus и checkboxFalseIcon на zyfra-icon delete-minus</h3>
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
        [(ngModel)]="model"
        checkboxTrueIcon="zyfra-icon add-plus"
        checkboxFalseIcon="zyfra-icon delete-minus"
      ></zyfra-tri-checkbox>
      <br>
      <small>(Значение чекбокса: {{model === undefined || model === null ? 'null' : model}})</small>
    </div>
  `,
  props: {
    ...args,
    fControl: new FormControl(true),
  },
});

export const Binary = Template.bind({});
Binary.args = {
  model: false,
  checkboxTrueIcon: 'pi pi-check',
  checkboxFalseIcon: 'pi pi-times',
  label: 'Чекбокс ngModel',
};
