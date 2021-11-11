import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { BrowserModule, SafeHtml } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraDialogComponent } from './zyfra-dialog.component';
import { ZyfraButtonModule } from '../button';
import { ZyfraDialogModule } from './zyfra-dialog.module';

export default {
  moduleId: module.id,
  title: 'Dialogs/Dialog',
  component: ZyfraDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, BrowserAnimationsModule, CommonModule, ZyfraButtonModule, ZyfraDialogModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-dialog.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraDialogComponent> = (args) => ({
  template: `
    <zyfra-button
      (click)="dialog.onInit($event)"
      label="for dialog"
      icon="zyfra-icon selection-check-simple"
    ></zyfra-button>

    <zyfra-dialog
      #dialog
      [header]="header"
      [htmlTemplate]="htmlTemplate"
      (onShow)="onShow($event)"
      (onHide)="onHide($event)"
      (onResizeInit)="onResizeInit($event)"
      (onResizeEnd)="onResizeEnd($event)"
      (onDragEnd)="onDragEnd($event)"
      (onMaximize)="onMaximize($event)"
    ></zyfra-dialog>
  `,
  props: {
    ...args,
    onResizeInit: action('onResizeInit'),
    onResizeEnd: action('onResizeEnd'),
    onDragEnd: action('onDragEnd'),
    onMaximize: action('onMaximize'),
    onShow: action('onShow'),
    onHide: action('onHide'),
  },
});

const htmlTemplate: SafeHtml = `
  <div>
    <p>content</p>
    <ul>
      <li>item 1 (for example)</li>
      <li><b>item 2</b></li>
    </ul>
  </div>
`;

export const Simple = Template.bind({});
Simple.args = {
  header: 'Header',
};

export const WithTemplate = Template.bind({});
WithTemplate.args = {
  header: 'With template',
  htmlTemplate,
};
