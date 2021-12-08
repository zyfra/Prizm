import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraButtonModule } from '../../button';
import { ZyfraCheckBoxModule } from '../../checkbox';
import { ListboxModule } from 'primeng/listbox';
import { ZyfraInputModule } from '../../input';
import { ZyfraRelativeDatepickerComponent } from './zyfra-relative-datepicker.component';

// @ts-ignore
import DatepickerDoc from './zyfra-relative-datepicker.component.story.doc.mdx';

export default {
  title: 'Datepickers/RelativeDatepicker',
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
  parameters: {
    docs: {
      page: DatepickerDoc,
    },
  },
} as Meta<ZyfraRelativeDatepickerComponent>;

const Template: Story<ZyfraRelativeDatepickerComponent> = (args: ZyfraRelativeDatepickerComponent) => ({
  component: ZyfraRelativeDatepickerComponent,
  template: `
  <zyfra-relative-datepicker
    [label]="'Относительное'"
    [placeholder]="'Введите значение'"
    [disabled]="false"
    [showClear]="false"
    [(ngModel)]="'*+8h'"
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
  ngModel: '*+8h',
};
