import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraDatepickerComponent } from './zyfra-datepicker.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraCheckBoxModule } from '../checkbox';
import { CommonModule } from '@angular/common';
import { ZyfraInputModule } from '../input';
import { ZyfraDatepickerModule } from './zyfra-datepicker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraButtonModule } from '../button';

// @ts-ignore
import DatepickerDoc from './zyfra-datepicker.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Datepickers/Datepicker',
  component: ZyfraDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraButtonModule,
        ZyfraCheckBoxModule,
        ZyfraInputModule,
        ZyfraDatepickerModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: DatepickerDoc,
    },
  },
} as Meta;

const Template: Story<ZyfraDatepickerComponent> = (args) => ({
  component: ZyfraDatepickerComponent,
  template: `
  <zyfra-datepicker
  [ngModel]="model"
  (ngModelChange)="$event"
  [dateFormat]="dateFormat"
  [timeFormat]="timeFormat"
  [returnFormatValue]="returnFormatValue"
  [placeholder]="placeholder"
  [disabled]="disabled"
  [required]="required"
  [label]="label"
  [spanClass]="spanClass"
  [locale]="locale"
  [showClear]="showClear"
  [showDate]="showDate"
  [showTime]="showTime"
  [monthNavigator]="monthNavigator"
  [yearNavigator]="yearNavigator"
  [yearRange]="yearRange"
  [showCalendarBtn]="showCalendarBtn"
  [calendarBtnLabel]="calendarBtnLabel"
  [numberOfMonths]="numberOfMonths"
  [selectionMode]="selectionMode"
  [disabledDates]="disabledDates"
  [firstDayOfWeek]="firstDayOfWeek"
  >
  </zyfra-datepicker>
  `,
  props: args,
});

export const Absolute = Template.bind({});
Absolute.args = {
  model: '21.09.2021 20:17:07',
  dateFormat: 'DD.MM.YYYY',
  timeFormat: 'HH:mm:ss',
  returnFormatValue: 'string',
  placeholder: 'Выберите дату и время',
  disabled: false,
  required: true,
  label: 'Абсолютное',
  spanClass: null,
  locale: 'ru_RU',
  showChangeMode: false,
  showClear: true,
  showDate: true,
  showTime: true,
  monthNavigator: false,
  yearNavigator: false,
  yearRange: null,
  showCalendarBtn: true,
  calendarBtnLabel: 'Выбрать',
  hideOnDateTimeSelect: false,
  numberOfMonths: 1,
  selectionMode: 'single',
  disabledDates: null,
  disabledDays: null,
  firstDayOfWeek: 1,
};

export const AbsoluteMini = Template.bind({});
AbsoluteMini.args = {
  model: '21.09.2021 20:17:07',
  dateFormat: 'DD.MM.YYYY',
  timeFormat: 'HH:mm:ss',
  returnFormatValue: 'string',
  placeholder: 'Выберите дату и время',
  inputClass: 'p-inputtext-mini',
  disabled: false,
  required: true,
  label: 'Абсолютное',
  spanClass: null,
  locale: 'ru_RU',
  showChangeMode: false,
  showClear: true,
  showDate: true,
  showTime: true,
  monthNavigator: false,
  yearNavigator: false,
  yearRange: null,
  showCalendarBtn: true,
  calendarBtnLabel: 'Выбрать',
  hideOnDateTimeSelect: false,
  numberOfMonths: 1,
  selectionMode: 'single',
  disabledDates: null,
  disabledDays: null,
  firstDayOfWeek: 1,
};

export const RangeMode = Template.bind({});
RangeMode.args = {
  model: '21.09.2021 - 26.09.2021',
  dateFormat: 'DD.MM.YYYY',
  returnFormatValue: 'string',
  placeholder: 'Выберите дату и время',
  inputClass: 'p-inputtext-mini',
  disabled: false,
  required: true,
  label: 'Абсолютное',
  spanClass: null,
  locale: 'ru_RU',
  showChangeMode: false,
  showClear: true,
  showDate: true,
  showTime: false,
  monthNavigator: false,
  yearNavigator: false,
  yearRange: null,
  showCalendarBtn: true,
  calendarBtnLabel: 'Выбрать',
  hideOnDateTimeSelect: false,
  numberOfMonths: 1,
  selectionMode: 'range',
  disabledDates: null,
  disabledDays: null,
  firstDayOfWeek: 1
};
