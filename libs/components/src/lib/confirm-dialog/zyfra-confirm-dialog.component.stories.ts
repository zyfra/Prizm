import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { BrowserModule } from '@angular/platform-browser';
import { ZyfraConfirmDialogComponent } from './zyfra-confirm-dialog.component';
import { ZyfraButtonModule } from '../button';
import { ZyfraConfirmDialogModule } from './zyfra-confirm-dialog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  moduleId: module.id,
  title: 'Dialogs/ConfirmDialog',
  component: ZyfraConfirmDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [ZyfraButtonModule, ZyfraConfirmDialogModule, BrowserAnimationsModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-confirm-dialog.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraConfirmDialogComponent> = (args) => ({
  template: `
    <zyfra-button
      (click)="confirmDialog.onClick($event)"
      label="for dialog"
      icon="zyfra-icon selection-check-simple"
    ></zyfra-button>

    <zyfra-confirm-dialog
      #confirmDialog
      [message]="message"
      [icon]="icon"
      [header]="header"
      [acceptLabel]="acceptLabel"
      [rejectLabel]="rejectLabel"
      [acceptButtonStyleClass]="acceptButtonStyleClass"
      [rejectButtonStyleClass]="rejectButtonStyleClass"
      [acceptMessages]="acceptMessages"
      (onHide)="onHide($event)"
    ></zyfra-confirm-dialog>
  `,
  props: {
    ...args,
    onHide: action('onHide'),
  },
});

export const Empty = Template.bind({});

Empty.args = {
  message: 'Вы действительно этого хотите?',
  header: 'Confirmation',
  acceptLabel: 'Удалить',
  rejectLabel: 'Отменить',
  acceptButtonStyleClass: 'p-button-danger',
  rejectButtonStyleClass: '',
  acceptMessages: [{ severity: 'info1', summary: 'Confirmed1', detail: 'You have accepted1' }]
};

export const Simple = Template.bind({});
Simple.args = {
  message: 'Вы действительно этого хотите?',
  header: 'Confirmation',
  acceptLabel: 'Удалить',
  rejectLabel: 'Отменить',
  acceptButtonStyleClass: 'p-button-danger',
  rejectButtonStyleClass: '',
  acceptMessages: [{ severity: 'info1', summary: 'Confirmed1', detail: 'You have accepted1' }]
};
