import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraCalendarComponent } from './zyfra-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraCheckBoxModule } from './../../checkbox';
import { CommonModule } from '@angular/common';
import { ZyfraInputModule } from './../../input';
import { ZyfraDropdownModule } from '../../dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { generateTimeArray } from '../utils/generate-time-array';

// @ts-ignore
import CalendarDoc from './zyfra-calendar.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Datepickers/Calendar',
  component: ZyfraCalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraCheckBoxModule,
        ZyfraInputModule,
        CalendarModule,
        ZyfraDropdownModule
      ],
    }),
  ],
  parameters: {
    docs: {
      page: CalendarDoc,
    },
  },
} as Meta;

const Template: Story = (args) => ({
  component: ZyfraCalendarComponent,
  props: args
});



export const Basic = Template.bind({});
Basic.args = {
  label: 'Дата',
  selectionMode: 'single',
  placeholder: 'Select a date',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1
};

export const DateFormat = Template.bind({});
DateFormat.args = {
  label: 'Дата',
  placeholder: 'Select a date',
  disabled: false,
  dateFormat: 'dd/mm/yy',
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Дата',
  placeholder: 'Select a date',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: true,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1
};

export const ButtonBar = Template.bind({});
ButtonBar.args = {
  label: 'Дата',
  placeholder: 'Select a date',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: true,
  firstDayOfWeek: 1
};

export const DisabledDays = Template.bind({});
DisabledDays.args = {
  label: 'Дата',
  placeholder: 'Select a date',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  disabledDays: [0,6],
  firstDayOfWeek: 1
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Дата',
  selectionMode: 'multiple',
  placeholder: 'Select dates',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1
};

export const Range = Template.bind({});
Range.args = {
  label: 'Период',
  selectionMode: 'range',
  placeholder: 'Select dates',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1
};

export const Time= Template.bind({});
Time.args = {
  label: 'Время',
  placeholder: 'Select a date',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: true,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1
};

export const OnlyTime= Template.bind({});
OnlyTime.args = {
  label: 'Время',
  placeholder: 'Set time',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showIcon: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: true,
  timeOnly: true,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1
};

const CustomTemplate: Story = (args) => ({
  component: ZyfraCalendarComponent,
  props: args,
  template: `
<zyfra-calendar [placeholder]="placeholder" [ngModel]="'12/22/2021 18:00'" [showTime]="true" [label]="label">
  <div buttons-right>
     <button class="zyfra-datepicker-control zyfra-datepicker-button" type="button">
        <zyfra-dropdown
          [options]="options"
          [ngModel]="null"
          [disabled]="disabled"
          (ngModelChange)="setInputTime($event)"
          [panelStyleClass]="'zyfra-datepicker-dropdown-overlay'"
          [styleClass]="'zyfra-datepicker-dropdown'"
          [dropdownIcon]="'zyfra-icon date-update'"
          [optionLabel]="'value'"
        >
        </zyfra-dropdown>
     </button>
  </div>
</zyfra-calendar>
  `
});

const items = generateTimeArray('HH:mm:ss')

export const CustomButtons= CustomTemplate.bind({});
CustomButtons.args = {
  placeholder: 'Set time',
  label: 'Время',
  options: items
}
