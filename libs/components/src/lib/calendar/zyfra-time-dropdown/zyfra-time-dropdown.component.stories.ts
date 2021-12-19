import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraButtonModule } from '../../button';
import { ZyfraInputModule } from '../../input';
import { ZyfraTimeDropdownComponent } from './zyfra-time-dropdown.component';
import { ZyfraCheckBoxModule } from '../../checkbox';

// @ts-ignore
import TimeDropdownDoc from './zyfra-time-dropdown.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Datepickers/DropdownTime',
  component: ZyfraTimeDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        OverlayPanelModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraButtonModule,
        ZyfraInputModule
      ],
    }),
  ],
  parameters: {
    docs: {
      page: TimeDropdownDoc,
    },
  },
} as Meta<ZyfraTimeDropdownComponent>;

const Template: Story = (args) => ({
  component: ZyfraTimeDropdownComponent,
  props: args
});

export const Primary = Template.bind({});
Primary.args = {
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
  showDate: false,
  showTime: true,
  monthNavigator: false,
  showCalendarBtn: true,
  calendarBtnLabel: 'Выбрать',
  hideOnDateTimeSelect: false,
  numberOfMonths: 1,
  selectionMode: 'single',
  disabledDates: null,
  disabledDays: null,
  firstDayOfWeek: 1,
};
