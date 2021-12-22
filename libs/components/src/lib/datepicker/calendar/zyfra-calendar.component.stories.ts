import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraCalendarComponent } from './zyfra-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraCheckBoxModule } from './../../checkbox';
import { CommonModule } from '@angular/common';
import { ZyfraInputModule } from './../../input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';

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
        CalendarModule
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
  showButtonBar: false
};

export const DateFormat = Template.bind({});
DateFormat.args = {
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
  showButtonBar: false
};

export const Icon = Template.bind({});
Icon.args = {
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
  showButtonBar: false
};

export const DisabledDays = Template.bind({});
DisabledDays.args = {
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
  disabledDays: [0,6]
};

export const Multiple = Template.bind({});
Multiple.args = {
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
  showButtonBar: false
};

export const Range = Template.bind({});
Range.args = {
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
  showButtonBar: false
};

export const Time= Template.bind({});
Time.args = {
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
  showButtonBar: false
};

export const OnlyTime= Template.bind({});
OnlyTime.args = {
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
  showButtonBar: false
};

const CustomTemplate: Story = (args) => ({
  component: ZyfraCalendarComponent,
  props: args,
  template: `
<zyfra-calendar [placeholder]="placeholder" [ngModel]="'12/22/2021 18:00'" [showTime]="true" [label]="label">
  <div buttons-right>
     <button class="zyfra-datepicker-control zyfra-datepicker-button">
        Time
     </button>
  </div>
</zyfra-calendar>
  `
});

export const CustomButtons= CustomTemplate.bind({});
CustomButtons.args = {
  placeholder: 'Set time',
  label: 'Выберите время',
}
