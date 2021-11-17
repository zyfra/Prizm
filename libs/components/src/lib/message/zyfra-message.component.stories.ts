import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Message } from 'primeng/api';
import { ZyfraMessageComponent } from './zyfra-message.component';
import { ZyfraMessageModule } from './zyfra-message.module';

export default {
  moduleId: module.id,
  title: 'Messages/Message',
  component: ZyfraMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ZyfraMessageModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-message.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraMessageComponent> = (args) => ({
  component: ZyfraMessageComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  value: [
    {
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
      life: 1000,
    },
  ] as Message[],
};

export const MultiMessages = Template.bind({});
MultiMessages.args = {
  value: [
    {
      severity: 'success',
      summary: 'Success',
      detail: 'Надпись появляется плавно',
      life: 3000,
    },
    {
      severity: 'error',
      summary: 'Error',
      detail: 'Сообщение ошибки',
      life: 2000,
    },
  ] as Message[],
  enableService: true,
};

export const Animation = Template.bind({});
Animation.args = {
  value: [
    {
      severity: 'success',
      summary: 'Success',
      detail: 'Надпись появляется плавно',
      life: 3000,
    },
  ] as Message[],
  enableService: false,
  closable: true,
  style: '',
  styleClass: '',
  escape: true,
  key: null,
  showTransitionOptions: '3000ms ease-out',
  hideTransitionOptions: '3000ms ease-in',
};
