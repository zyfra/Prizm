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

export default {
  moduleId: module.id,
  title: 'Select/Dropdown',
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

const Template: Story<ZyfraDropdownComponent> = (args) => ({
  component: ZyfraDropdownComponent,
  template: `
    <zyfra-dropdown
      [(value)]="value"
      [options]="options"
      [optionLabel]="optionLabel"
      [placeholder]="placeholder"
      [showClear]="showClear"
      [label]="label"
      [style]="{ width: '360px' }"
      [group]="group"
      [virtualScroll]="virtualScroll"
      [itemSize]="itemSize"
      [filter]="filter"
    ></zyfra-dropdown>

    <br>

    <p>Selected value:</p>
    <pre>{{value | json}}</pre>
  `,
  props: {
    ...args,
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
  value: null,
  optionLabel: 'name',
  placeholder: 'Select a City',
  showClear: true,
  label: 'City',
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
