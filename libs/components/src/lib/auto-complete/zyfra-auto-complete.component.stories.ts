import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraAutoCompleteComponent } from './zyfra-auto-complete.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraAutoCompleteModule } from './zyfra-auto-complete.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraTemplateModule } from '../@core/shared/zyfra-template.module';
import { action } from '@storybook/addon-actions';

export default {
  moduleId: module.id,
  title: 'Form/AutoComplete',
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
        ZyfraTemplateModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      // TODO fix component
      // page: require('./zyfra-auto-complete.component.story.doc.mdx'),
    },
  },
} as Meta;

const Template: Story<ZyfraAutoCompleteComponent> = (args) => ({
  template: `
    <zyfra-auto-complete
      [ngModel]="value"
      [placeholder]="placeholder"
      [label]="label"
      [suggestions]="suggestions"
      [field]="field"
      [scrollHeight]="scrollHeight"
      [dropdown]="dropdown"
      [multiple]="multiple"
      [dropdownIcon]="dropdownIcon"
      [minLength]="minLength"
      [delay]="delay"
      [completeOnFocus]="completeOnFocus"
      [style]="style"
      [inputStyle]="inputStyle"
      [panelStyle]="panelStyle"
      [styleClass]="styleClass"
      [inputStyleClass]="inputStyleClass"
      [panelStyleClass]="panelStyleClass"
      [inputId]="inputId"
      [name]="name"
      [optionGroupLabel]="optionGroupLabel"
      [group]="group"
      [optionGroupChildren]="optionGroupChildren"
      [readonly]="readonly"
      [disabled]="disabled"
      [maxlength]="maxlength"
      [size]="size"
      [appendTo]="appendTo"
      [tabindex]="tabindex"
      [dataKey]="dataKey"
      [autoHighlight]="autoHighlight"
      [type]="type"
      [showEmptyMessage]="showEmptyMessage"
      [emptyMessage]="emptyMessage"
      [required]="required"
      [autofocus]="autofocus"
      [forceSelection]="forceSelection"
      [dropdownMode]="dropdownMode"
      [baseZIndex]="baseZIndex"
      [autoZIndex]="autoZIndex"
      [showTransitionOptions]="showTransitionOptions"
      [hideTransitionOptions]="hideTransitionOptions"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
      [unique]="unique"
      [autocomplete]="autocomplete"
      [virtualScroll]="virtualScroll"
      [itemSize]="itemSize"
      (completeMethod)="completeMethod($event)"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
      (onKeyUp)="onKeyUp($event)"
      (onSelect)="onSelect($event)"
      (onUnselect)="onUnselect($event)"
      (onDropdownClick)="onDropdownClick($event)"
      (onClear)="onClear($event)"
      (onShow)="onShow($event)"
      (onHide)="onHide($event)"
    >
      <ng-template zyfraTemplate="item" let-obj>{{ obj.name}} ({{obj.code}})</ng-template>
      <ng-template zyfraTemplate="selectedItem" let-obj>{{ obj.name}} - {{obj.code}}</ng-template>
    </zyfra-auto-complete>
  `,
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
    completeMethod(event): void {
      const query = event.query.toLowerCase();
      this.suggestions = this.countries.filter(country => country.name.toLowerCase().indexOf(query) > -1);
      action('completeMethod')(event);
    },
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    onKeyUp: action('onKeyUp'),
    onSelect: action('onSelect'),
    onUnselect: action('onUnselect'),
    onDropdownClick: action('onDropdownClick'),
    onClear: action('onClear'),
    onShow: action('onShow'),
    onHide: action('onHide'),
  },
});

export const Simple = Template.bind({});
Simple.args = {
  ngModel: null,
  suggestions: [],
  field: 'name',
  minLength: 1,
  placeholder: 'Выберите страну',
  label: 'Страна',
};

export const withDropdown = Template.bind({});
withDropdown.args = {
  ngModel: null,
  suggestions: null,
  field: 'name',
  minLength: 1,
  placeholder: 'Выберите страны',
  dropdown: true,
  label: 'Страна',
};
