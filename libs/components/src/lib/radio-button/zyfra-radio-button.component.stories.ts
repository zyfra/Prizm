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

const items = [
  {
    label: 'red',
    value: 'red',
  },
  {
    label: 'black',
    value: 'black',
  },
  {
    label: 'blue',
    value: 'blue',
  },
  {
    label: 'pink',
    value: 'pink',
  },
  {
    label: 'Не заполнено',
    value: null,
  },
];

const SimpleTemplate: Story<ZyfraRadioButtonComponent<string>> = (args) => ({
  template: `
  <div class="p-radiobutton-group">
    <ng-container *ngFor="let item of items">
      <zyfra-radio-button
        [name]="name"
        [styleClass]="styleClass"
        [label]="item.label"
        [value]="item.value"
        [disabled]="disabled"
        [(ngModel)]="model"
        (onClick)="onClick($event)"
        (ngModelChange)="ngModelChange($event)"
        (onFocus)="onFocus($event)"
        (onBlur)="onBlur($event)"
      ></zyfra-radio-button>
    <br/>
  </ng-container>
  </div>
`,
  props: {
    ...args,
    items: items,
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

const formControlTemplateChunk = `
    (Значение: {{control.value === undefined || control.value === null ? 'null' : control.value}})
    <br>
    {{control?.errors ? 'Есть ошибки валидации' : ''}}
    <br>
    <zyfra-button
      label="toggle disable/enable"
      [style]="{ 'margin-right': '5px', 'margin-top': '20px' }"
      (click)="control.disabled ? control.enable() : control.disable()"
    ></zyfra-button>
    <zyfra-button label="toggle red/black" (click)="control.setValue(control.value === 'black' ? 'red' : 'black')"></zyfra-button>
`;
const FormControlTemplate: Story<ZyfraRadioButtonComponent<string>> = (args) => ({
  template: `
<div class="p-radiobutton-group">
    <ng-container *ngFor="let item of items">
      <zyfra-radio-button
        [name]="name"
        [styleClass]="styleClass"
        [label]="item.label"
        [value]="item.value"
        [disabled]="disabled"
        [formControl]="control"
        (onClick)="onClick($event)"
        (ngModelChange)="ngModelChange($event)"
        (onFocus)="onFocus($event)"
        (onBlur)="onBlur($event)"
      ></zyfra-radio-button>
    <br/>
  </ng-container>
  </div>
  ` + formControlTemplateChunk,
  props: {
    ...args,
    items: items,
    disabledPink: true,
    ngModelChange: () => {},
    control: new FormControl('red', [Validators.required]),
  },
});

export const FormControlRadio = FormControlTemplate.bind({});
