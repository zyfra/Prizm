import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraTreeComponent } from './zyfra-tree.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraTreeModule } from './zyfra-tree.module';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import TreeDoc from './zyfra-tree.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Tree/Tree',
  component: ZyfraTreeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraTreeModule
      ]
    }),
  ],
  parameters: {
    docs: {
      page: TreeDoc,
    }
  }
} as Meta;

const Template: Story<ZyfraTreeComponent> = (args) => ({
  component: ZyfraTreeComponent,
  props: args,
});

const items = [
  {
    label: 'Documents',
    data: 'Documents Folder',
    expandedIcon: 'zyfra-icon files-folder',
    collapsedIcon: 'zyfra-icon files-folder',
    children: [{
      label: 'Work',
      data: 'Work Folder',
      expandedIcon: 'zyfra-icon files-folder',
      collapsedIcon: 'zyfra-icon files-folder',
      children: [
        { label: 'Expenses.doc', icon: 'zyfra-icon files-file', data: 'Expenses Document' },
        { label: 'Resume.doc', icon: 'zyfra-icon files-file', data: 'Resume Document' }
      ]
    },
      {
        label: 'Home',
        data: 'Home Folder',
        expandedIcon: 'zyfra-icon files-folder',
        collapsedIcon: 'zyfra-icon files-folder',
        children: [{ label: 'Invoices.txt', icon: 'zyfra-icon files-file', data: 'Invoices for this month' }]
      }]
  },
  {
    label: 'Pictures',
    data: 'Pictures Folder',
    expandedIcon: 'zyfra-icon files-folder',
    collapsedIcon: 'zyfra-icon files-folder',
    children: [
      { label: 'barcelona.jpg', icon: 'zyfra-icon files-document-image', data: 'Barcelona Photo' },
      { label: 'logo.jpg', icon: 'zyfra-icon files-document-image', data: 'PrimeFaces Logo' },
      { label: 'primeui.png', icon: 'zyfra-icon files-document-image', data: 'PrimeUI Logo' }]
  },
  {
    label: 'Movies',
    data: 'Movies Folder',
    expandedIcon: 'zyfra-icon files-folder',
    collapsedIcon: 'zyfra-icon files-folder ',
    children: [{
      label: 'Al Pacino',
      data: 'Pacino Movies',
      expandedIcon: 'zyfra-icon files-folder',
    collapsedIcon: 'zyfra-icon files-folder ',
      children: [
        { label: 'Scarface', icon: 'zyfra-icon camera-video', data: 'Scarface Movie' },
        { label: 'Serpico', icon: 'zyfra-icon camera-image', data: 'Serpico Movie' }
      ]
    },
      {
        label: 'Robert De Niro',
        data: 'De Niro Movies',
        expandedIcon: 'zyfra-icon files-folder',
        collapsedIcon: 'zyfra-icon files-folder ',
        children: [
          { label: 'Goodfellas', icon: 'zyfra-icon camera-video', data: 'Goodfellas Movie' },
          { label: 'Untouchables', icon: 'zyfra-icon camera-video', data: 'Untouchables Movie' }
        ]
      }]
  }
];

export const Simple = Template.bind({});
Simple.args = {
  items,
};
