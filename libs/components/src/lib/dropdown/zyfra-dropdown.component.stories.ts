import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraDropdownComponent } from './zyfra-dropdown.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDropdownModule } from './zyfra-dropdown.module';
import { BrowserModule } from '@angular/platform-browser';

// @ts-ignore
import DropdownDoc from './zyfra-dropdown.component.story.doc.mdx';
import { action } from '@storybook/addon-actions';

export default {
  moduleId: module.id,
  title: 'Form/Dropdown',
  component: ZyfraDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraDropdownModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: DropdownDoc,
    },
  },
} as Meta;

const Template: Story<ZyfraDropdownComponent> = args => ({
  component: ZyfraDropdownComponent,
  template: `<div>
    <zyfra-dropdown
      [(ngModel)]="value"
      [options]="options"
      [optionLabel]="optionLabel"
      [placeholder]="placeholder"
      [showClear]="showClear"
      [label]="label"
      [style]="{ width: '360px' }"
      [group]="group"
      [mini]="mini"
      [virtualScroll]="virtualScroll"
      [itemSize]="itemSize"
      [filter]="filter"
      (onChange)="onChange($event)"
      (onClick)="onClick($event)"
      (onFocus)="onFocus($event)"
      (onBlur)="onBlur($event)"
      (onShow)="onShow($event)"
      (onHide)="onHide($event)"
    ></zyfra-dropdown>
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

export const Simple = Template.bind({});
Simple.args = {
  options: [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ],
  value: { name: 'New York', code: 'NY' },
  optionLabel: 'name',
  placeholder: 'Select a City',
  showClear: true,
  label: 'City',
};

export const Filter = Template.bind({});
Filter.args = {
  options: [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ],
  value: { name: 'New York', code: 'NY' },
  optionLabel: 'name',
  placeholder: 'Select a City',
  showClear: true,
  label: 'City',
  filter: true,
};

export const Group = Template.bind({});
Group.args = {
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
  value: null,
  placeholder: 'Select a City',
  group: true,
};

const items: SelectItem[] = [];

for (let i = 0; i < 10000; i++) {
  items.push({ label: 'Item ' + i, value: 'Item ' + i });
}

export const VirtualScroll = Template.bind({});
VirtualScroll.args = {
  options: items,
  model: null,
  placeholder: 'Select Item',
  virtualScroll: true,
  itemSize: 31,
  filter: false,
};
VirtualScroll.argTypes = {
  options: {
    control: {
      disable: true,
    },
  },
};
