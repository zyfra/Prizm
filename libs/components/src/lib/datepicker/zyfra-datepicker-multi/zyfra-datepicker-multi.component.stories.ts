import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ZyfraButtonModule } from '../../button';
import { ZyfraCheckBoxModule } from '../../checkbox';
import { ZyfraDropdownModule } from '../../dropdown';
import { ZyfraInputModule } from '../../input';
import { ZyfraRadioButtonModule } from '../../radio-button';
import { ZyfraDatepickerMultiComponent } from './zyfra-datepicker-multi.component';

// @ts-ignore
import DatepickerDoc from './zyfra-datepicker-multi.component.story.doc.mdx';

export default {
  title: 'Datepickers/Multi',
  component: ZyfraDatepickerMultiComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ZyfraCheckBoxModule,
        CalendarModule,
        ZyfraButtonModule,
        ZyfraRadioButtonModule,
        ZyfraInputModule,
        ZyfraDropdownModule,
        OverlayPanelModule,
        ListboxModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: DatepickerDoc,
    },
  },
} as Meta<ZyfraDatepickerMultiComponent>;

const Template: Story<ZyfraDatepickerMultiComponent> = (args: ZyfraDatepickerMultiComponent) => ({
  component: ZyfraDatepickerMultiComponent,
  template: `
  <zyfra-datepicker-multi
    [label]='label'
    [placeholder]='placeholder'
    [disabled]='disabled'
    [showClear]='showClear'
    [relativeValue]='value'
    [ngModel]="model"
    [dateFormat]="dateFormat"
    [timeFormat]="timeFormat"
    [returnFormatValue]="returnFormatValue"
    [required]="required"
    [spanClass]="spanClass"
    [locale]="locale"
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
    [mode]="mode"
  >
  </zyfra-datepicker-multi>
  `,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Время',
  placeholder: 'Введите значение',
  disabled: false,
  showClear: true,
  relativeValue: '',
  model: '21.09.2021 20:17:07',
  dateFormat: 'DD.MM.YYYY',
  timeFormat: 'HH:mm:ss',
  returnFormatValue: 'string',
  required: true,
  spanClass: null,
  locale: 'ru_RU',
  showChangeMode: false,
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
  mode: 'absolute'
};
