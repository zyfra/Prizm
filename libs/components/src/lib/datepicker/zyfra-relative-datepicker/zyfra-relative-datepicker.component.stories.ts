import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraButtonModule } from '../../button';
import { ZyfraCheckBoxModule } from '../../checkbox';
import { ListboxModule } from 'primeng/listbox';
import { ZyfraInputModule } from '../../input';
import { ZyfraRelativeDatepickerComponent } from './zyfra-relative-datepicker.component';

export default {
  title: 'Datapickers/RelativeDatapicker',
  component: ZyfraRelativeDatepickerComponent,
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
        ZyfraCheckBoxModule,
        ZyfraInputModule,
        ListboxModule
      ],
    }),
  ],
} as Meta<ZyfraRelativeDatepickerComponent>;

const Template: Story<ZyfraRelativeDatepickerComponent> = (args: ZyfraRelativeDatepickerComponent) => ({
  component: ZyfraRelativeDatepickerComponent,
  template: `
  <zyfra-relative-datepicker
    [label]='label'
    [placeholder]='placeholder'
    [disabled]='disabled'
    [showClear]='showClear'
    [(ngModel)]='ngModel'
    [showChangeMode]='showChangeMode'
  >
  </zyfra-relative-datepicker>
  `,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Относительное',
  placeholder: 'Введите значение',
  disabled: false,
  showClear: false,
  showChangeMode: false,
  ngModel: '*+8h',
};
