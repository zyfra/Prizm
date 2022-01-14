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
import { ZyfraCalendarComponent } from '../calendar/zyfra-calendar.component';
import { ZyfraDatepickerModeSelectComponent } from '../zyfra-datepicker-mode-select/zyfra-datepicker-mode-select.component';
import { ZyfraRelativeDatepickerComponent } from '../zyfra-relative-datepicker/zyfra-relative-datepicker.component';
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
      declarations: [
        ZyfraDatepickerModeSelectComponent,
        ZyfraCalendarComponent,
        ZyfraRelativeDatepickerComponent,
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
    [relativeValue]="relativeValue"
    [absoluteValue]="absoluteValue"
    [label]='label'
    [placeholder]='placeholder'
    [dateFormat]='dateFormat'
    [disabled]='disabled'
    [inline]='inline'
    [showOtherMonths]='showOtherMonths'
    [selectOtherMonths]='selectOtherMonths'
    [showOnFocus]='showOnFocus'
    [showWeek]='showWeek'
    [readonlyInput]='readonlyInput'
    [showTime]='showTime'
    [timeOnly]='timeOnly'
    [required]='required'
    [showButtonBar]='showButtonBar'
    [firstDayOfWeek]='firstDayOfWeek'
    [mode]='mode'
  >
  </zyfra-datepicker-multi>
  `,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  absoluteValue: '10.01.2022',
  relativeValue: '',
  label: 'Дата',
  placeholder: 'Выберите дату',
  dateFormat: 'dd.mm.yy',
  disabled: false,
  inline: false,
  showOtherMonths: true,
  selectOtherMonths: false,
  showOnFocus: true,
  showWeek: false,
  readonlyInput: false,
  showTime: false,
  timeOnly: false,
  required: false,
  showButtonBar: false,
  firstDayOfWeek: 1,
  mode: 'absolute',
};
