import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraDropdownWithContentComponent } from './zyfra-dropdown-with-content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDropdownWithContentModule } from './zyfra-dropdown-with-content.module';
import { BrowserModule } from '@angular/platform-browser';

// @ts-ignore
import DropdownWithContentDoc from './zyfra-dropdown-with-content.component.story.doc.mdx';
import { action } from '@storybook/addon-actions';

export default {
  moduleId: module.id,
  title: 'Form/Dropdown with content',
  component: ZyfraDropdownWithContentComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraDropdownWithContentModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: DropdownWithContentDoc,
    },
  },
} as Meta;

const TemplateWithContent: Story<ZyfraDropdownWithContentComponent> = args => ({
  component: ZyfraDropdownWithContentComponent,
  template: `
    <div>
       <zyfra-dropdown-with-content
        [(ngModel)]="value"
        [options]="options"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [placeholder]="placeholder"
        [showClear]="showClear"
        [label]="label"
        [mini]="mini"
        [disabled]="disabled"
        [required]="required"
        [group]="group"
        [virtualScroll]="virtualScroll"
        [itemSize]="itemSize"
        [filter]="filter"
        [style]="{ width: '360px' }"
        (onChange)="onChange($event)"
        (onClick)="onClick($event)"
        (onFocus)="onFocus($event)"
        (onBlur)="onBlur($event)"
        (onShow)="onShow($event)"
        (onHide)="onHide($event)"
      >
        <span left  style="width: 15px; height: 15px; background: pink; border-radius: 50%; margin: 5px;"></span>
        <div right style="display: flex; align-items: center;">
          <span style="width: 25px; height: 25px; background: cadetblue; border-radius: 50%;"></span>
          <span style="width: 25px; height: 25px; background: wheat; border-radius: 50%; margin: 5px;"></span>
        </div>
      </zyfra-dropdown-with-content>
    </div>
    <div style="font-family: var(--fontFamily); margin-top: 20px;">
      <p>Selected value:</p>
      <pre style="font-family: var(--fontFamily);">{{value | json}}</pre>
    </div>
  `,
  props: {
    ...args,
    onChange: event => action('onChange')({ value: event.value, ...event }),
    onClick: action('onClick'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    onShow: action('onShow'),
    onHide: action('onHide'),
  },
});

export const SimpleWithContent = TemplateWithContent.bind({});
SimpleWithContent.args = {
  options: [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ],
  optionLabel: 'name',
  optionValue: 'code',
  placeholder: 'Select a City',
  showClear: true,
  required: false,
  disabled: false,
  mini: true,
  label: 'City',
};

export const GroupWithContent = TemplateWithContent.bind({});
GroupWithContent.args = {
  options: [
    {
      label: 'Germany',
      value: 'de',
      items: [
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Frankfurt', value: 'Frankfurt' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Munich', value: 'Munich' },
      ],
    },
    {
      label: 'USA',
      value: 'us',
      items: [
        { label: 'Chicago', value: 'Chicago' },
        { label: 'Los Angeles', value: 'Los Angeles' },
        { label: 'New York', value: 'New York' },
        { label: 'San Francisco', value: 'San Francisco' },
      ],
    },
    {
      label: 'Japan',
      value: 'jp',
      items: [
        { label: 'Kyoto', value: 'Kyoto' },
        { label: 'Osaka', value: 'Osaka' },
        { label: 'Tokyo', value: 'Tokyo' },
        { label: 'Yokohama', value: 'Yokohama' },
      ],
    },
  ],
  required: false,
  value: null,
  placeholder: 'Select a City',
  group: true,
};
