import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from './toast.service';
import { ZyfraToastComponent } from './zyfra-toast.component';
import { ZyfraToastModule } from './zyfra-toast.module';
import { ZyfraButtonModule } from '../button';

@Component({
  selector: 'toast-container',
  template: `
    <zyfra-button (click)="showMessage('myKey0')" label="show config"></zyfra-button>
    <zyfra-button (click)="showMessage()" label="show default toast"></zyfra-button>

    <!--  Default toast  -->
    <zyfra-toast></zyfra-toast>

    <!--  Custom toast  -->
    <zyfra-toast
      [key]="'myKey0'"
      [position]="position"
      [showTransitionOptions]="showTransitionOptions"
      [preventOpenDuplicates]="preventOpenDuplicates"
      [preventDuplicates]="preventDuplicates"
      [customTemplate]="useCustomTemplate && customTemplate"
    ></zyfra-toast>

    <ng-template #customTemplate>
      <div>
        <p>content</p>
        <ul>
          <li>item 1 (for example)</li>
          <li><b>item 2</b></li>
        </ul>
      </div>
    </ng-template>
  `,
  providers: [ToastService],
})
class MyToastContainerComponent {
  @Input() key;
  @Input() position;
  @Input() showTransitionOptions;
  @Input() preventOpenDuplicates;
  @Input() preventDuplicates;
  @Input() useCustomTemplate;

  constructor(private toast: ToastService) {}

  public showMessage(key?: string) {
    this.toast.add({ key, severity: 'success', summary: 'Summary Text', detail: 'Detail Text' });
  }
}

export default {
  moduleId: module.id,
  title: 'Messages/Toast',
  component: MyToastContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, BrowserAnimationsModule, CommonModule, ZyfraButtonModule, ZyfraToastModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-toast.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraToastComponent> = args => ({
  template: `
  <toast-container
  [key]="key"
  [position]="position"
  [showTransitionOptions]="showTransitionOptions"
  [preventOpenDuplicates]="preventOpenDuplicates"
  [preventDuplicates]="preventDuplicates"
  [useCustomTemplate]="useCustomTemplate"
  ></toast-container>
  `,
  props: {
    ...args,
  },
});

export const Simple = Template.bind({});
Simple.args = {
  position: 'bottom-center',
  severity: 'success',
  summary: 'Info',
  detail: 'Message Content',
  preventDuplicates: false,
  preventOpenDuplicates: false,
  life: 30000,
};

export const NoIcons = Template.bind({});
NoIcons.args = {
  position: 'bottom-center',
  closable: false,
  detail: 'Message Content',
  life: 3000,
};

export const Animation = Template.bind({});
Animation.args = {
  position: 'bottom-center',
  detail: 'for Animation',
  life: 3000,
  showTransitionOptions: '3000ms ease-out',
  hideTransitionOptions: '3000ms ease-in',
};

export const CustomTemplate = Template.bind({});
CustomTemplate.args = {
  useCustomTemplate: true,
  position: 'bottom-center',
  severity: 'success',
  summary: 'Info',
  detail: 'Message Content',
  life: 3000,
  closable: true,
};
