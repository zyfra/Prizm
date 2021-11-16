import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraAutoCompleteComponent } from './zyfra-auto-complete.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraAutoCompleteModule } from './zyfra-auto-complete.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @ts-ignore
import AutoCompleteDoc from './zyfra-auto-complete.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Select/AutoComplete',
  component: ZyfraAutoCompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraAutoCompleteModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: AutoCompleteDoc,
    },
  },
} as Meta;

const Template: Story<ZyfraAutoCompleteComponent> = (args) => ({
  component: ZyfraAutoCompleteComponent,
  props: {
    ...args,
    countries: [
      { name: 'Argentina', code: 'AR' },
      { name: 'Armenia', code: 'AM' },
      { name: 'Aruba', code: 'AW' },
      { name: 'Russia', code: 'RU' },
      { name: 'India', code: 'IN' },
      { name: 'Indonesia', code: 'ID' },
      { name: 'Iran, Islamic Republic Of', code: 'IR' },
      { name: 'Iraq', code: 'IQ' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Isle of Man', code: 'IM' },
      { name: 'Israel', code: 'IL' },
      { name: 'Italy', code: 'IT' },
      { name: 'Zambia', code: 'ZM' },
      { name: 'Zimbabwe', code: 'ZW' },
    ],
    completeMethodHandler(event): void {
      const filtered = [];
      const query = event.query;

      for (const country of this.countries) {
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
          filtered.push(country);
        }
      }

      this.suggestions = filtered;
    },
  },
});

export const Simple = Template.bind({});
Simple.args = {
  value: null,
  suggestions: [],
  field: 'name',
  minLength: 1,
  placeholder: 'Выберите страну',
  label: 'Страна',
};

export const withDropdown = Template.bind({});
withDropdown.args = {
  value: null,
  suggestions: null,
  field: 'name',
  minLength: 1,
  placeholder: 'Выберите страну',
  dropdown: true,
  label: 'Страна',
};
