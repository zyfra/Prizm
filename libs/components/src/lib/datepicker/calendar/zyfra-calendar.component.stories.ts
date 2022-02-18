import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraCalendarComponent } from './zyfra-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraCheckBoxModule } from './../../checkbox';
import { CommonModule } from '@angular/common';
import { ZyfraInputModule } from './../../input';
import { ZyfraDropdownModule } from '../../dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { generateTimeArray } from '../utils/generate-time-array';
import { CustomCalendarComponent } from './story/custom-calendar.component';

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
        ZyfraDropdownModule,
      ],
      declarations: [CustomCalendarComponent],
    }),
  ],
  parameters: {
    docs: {
      page: CalendarDoc,
    },
  },
} as Meta;

const Template: Story = args => ({
  component: ZyfraCalendarComponent,
  props: args,
  template: `
  <zyfra-calendar
    [label]='label'
    [selectionMode]='selectionMode'
    [placeholder]='placeholder'
    [ngModel]='ngModel'
    [dateFormat]='dateFormat'
    [hourFormat]='hourFormat'
    [disabled]='disabled'
    [inline]='inline'
    [showOtherMonths]='showOtherMonths'
    [selectOtherMonths]='selectOtherMonths'
    [showIcon]='showIcon'
    [showOnFocus]='showOnFocus'
    [showWeek]='showWeek'
    [readonlyInput]='readonlyInput'
    [showTime]='showTime'
    [timeOnly]='timeOnly'
    [required]='required'
    [showButtonBar]='showButtonBar'
    [firstDayOfWeek]='firstDayOfWeek'
    [disabledDays]='disabledDays'
    [minDate]="minDate"
    [maxDate]="maxDate"
  >
  </zyfra-calendar>
  `
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'Дата',
  selectionMode: 'single',
  placeholder: 'Выберите дату',
  ngModel: '10.01.2022',
  dateFormat: 'dd.mm.yy',
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
  firstDayOfWeek: 1,
};

export const DateFormat = Template.bind({});
DateFormat.args = {
  label: 'Дата',
  placeholder: 'Выберите дату',
  disabled: false,
  ngModel: '10/01/2022',
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
  firstDayOfWeek: 1,
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Дата',
  placeholder: 'Выберите дату',
  ngModel: '10.01.2022',
  dateFormat: 'dd.mm.yy',
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
  firstDayOfWeek: 1,
};

export const ButtonBar = Template.bind({});
ButtonBar.args = {
  label: 'Дата',
  placeholder: 'Выберите дату',
  ngModel: '10.01.2022',
  dateFormat: 'dd.mm.yy',
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
  firstDayOfWeek: 1,
};

export const DisabledDays = Template.bind({});
DisabledDays.args = {
  label: 'Дата',
  placeholder: 'Select a date',
  ngModel: '10.01.2022',
  dateFormat: 'dd.mm.yy',
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
  disabledDays: [0, 6],
  firstDayOfWeek: 1,
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Дата',
  selectionMode: 'multiple',
  placeholder: 'Выберите даты',
  ngModel: '10.01.2022, 12.01.2022',
  dateFormat: 'dd.mm.yy',
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
  firstDayOfWeek: 1,
};

export const Range = Template.bind({});
Range.args = {
  label: 'Период',
  selectionMode: 'range',
  placeholder: 'Выберите даты',
  ngModel: '10.01.2022 - 12.01.2022',
  dateFormat: 'dd.mm.yy',
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
  firstDayOfWeek: 1,
};

export const Time = Template.bind({});
Time.args = {
  label: 'Время',
  placeholder: 'Выберите дату',
  ngModel: '10.01.2022 10:10',
  dateFormat: 'dd.mm.yy',
  hourFormat: 24,
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
  firstDayOfWeek: 1,
};

export const OnlyTime = Template.bind({});
OnlyTime.args = {
  label: 'Время',
  placeholder: 'Введите время',
  ngModel: '10:10',
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
  firstDayOfWeek: 1,
};

const CustomTemplate: Story = args => ({
  component: ZyfraCalendarComponent,
  props: args,
  template: `
  <zyfra-custom-calendar [placeholder]='placeholder' [label]='label' [times]='times' [selectedTime]='selectedTime'></zyfra-custom-calendar>
  `,
});

const items = generateTimeArray('HH:mm:ss');

export const CustomButtons = CustomTemplate.bind({});
CustomButtons.args = {
  placeholder: 'Set time',
  label: 'Время',
  selectedTime: '16:00:00',
  times: items,
};