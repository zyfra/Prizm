import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { ZyfraRadioButtonComponent } from './zyfra-radio-button.component';
import { ZyfraButtonModule } from '../button';
import { ZyfraRadioButtonModule } from './zyfra-radio-button.module';

export default {
  moduleId: module.id,
  title: 'Form/RadioButton',
  component: ZyfraRadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraButtonModule,
        ZyfraRadioButtonModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-radio-button.component.story.doc.mdx').default,
    },
  },
} as Meta;

const template = (str: string) => `
    <div class="p-radiobutton-group">
    <zyfra-radio-button
      [name]="name"
      [styleClass]="styleClass"
      value="red"
      label="red"
      [disabled]="disabled"
      ${str}
      (onClick)="onClick($event)"
      (ngModelChange)="ngModelChange($event)"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
    ></zyfra-radio-button><br>
    <zyfra-radio-button
      [name]="name"
      [styleClass]="styleClass"
      value="black"
      label="black"
      [disabled]="disabled"
      ${str}
      (onClick)="onClick($event)"
      (ngModelChange)="ngModelChange($event)"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
    ></zyfra-radio-button><br>
    <zyfra-radio-button
      [name]="name"
      [styleClass]="styleClass"
      value="blue"
      label="blue"
      [disabled]="disabled"
      ${str}
      (onClick)="onClick($event)"
      (ngModelChange)="ngModelChange($event)"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
    ></zyfra-radio-button><br>
    <zyfra-radio-button
      [name]="name"
      [styleClass]="styleClass"
      value="pink"
      label="pink"
      [disabled]="disabled || disabledPink"
      ${str}
      (onClick)="onClick($event)"
      (ngModelChange)="ngModelChange($event)"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
    ></zyfra-radio-button><br>
    <zyfra-radio-button
      [name]="name"
      [styleClass]="styleClass"
      [value]="null"
      label="Не заполнено"
      [disabled]="disabled"
      ${str}
      (onClick)="onClick($event)"
      (ngModelChange)="ngModelChange($event)"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
    ></zyfra-radio-button>
    </div>
  `;

const SimpleTemplate: Story<ZyfraRadioButtonComponent<string>> = (args) => ({
  template: template(`[(ngModel)]="model"`),
  props: {
    ...args,
    ngModelChange: () => {},
    onClick: action('onClick'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
  },
});

export const SimpleRadio = SimpleTemplate.bind({});
SimpleRadio.args = {
  model: 'red',
  name: 'color',
};

export const DisabledRadio = SimpleTemplate.bind({});
DisabledRadio.args = {
  disabled: true,
  disabledPink: false,
  model: 'red',
  name: 'color',
};

export const MiniRadio = SimpleTemplate.bind({});
MiniRadio.args = {
  model: 'red',
  name: 'color',
  styleClass: 'p-radiobutton-mini',
};

const formControlTemplateChunk = `<div style="font-family: var(--fontFamily);">
    (Значение: {{control.value === undefined || control.value === null ? 'null' : control.value}})
    <br>
    {{control?.errors ? 'Есть ошибки валидации' : ''}}
    <br>
    </div>
    <zyfra-button
      label="toggle disable/enable"
      [style]="{ 'margin-right': '5px', 'margin-top': '20px' }"
      (click)="control.disabled ? control.enable() : control.disable()"
    ></zyfra-button>
    <zyfra-button label="toggle red/black" (click)="control.setValue(control.value === 'black' ? 'red' : 'black')"></zyfra-button>
`;
const FormControlTemplate: Story<ZyfraRadioButtonComponent<string>> = (args) => ({
  template: template(`[formControl]="control"`) + formControlTemplateChunk,
  props: {
    ...args,
    disabledPink: true,
    ngModelChange: () => {},
    control: new FormControl('red', [Validators.required]),
  },
});

export const FormControlRadio = FormControlTemplate.bind({});
