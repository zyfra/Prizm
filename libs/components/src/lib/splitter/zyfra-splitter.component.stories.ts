import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraSplitterComponent } from './zyfra-splitter.component';

import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { ZyfraSplitterModule } from './zyfra-splitter.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// @ts-ignore
import SplitterDoc from './zyfra-splitter.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Panel/Splitter',
  component: ZyfraSplitterComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, ZyfraSplitterModule],
    }),
  ],
  parameters: {
    docs: {
      page: SplitterDoc,
    },
  },
} as Meta;

const Template: Story<ZyfraSplitterComponent> = (args) => ({
  template: `
    <zyfra-splitter
      [panelSizes]="panelSizes"
      [minSizes]="minSizes"
      [style]="style"
      (onResizeStart)="onResizeStart($event)"
      (onResizeEnd)="onResizeEnd($event)"
    >
      <ng-template zyfraSplitterTemplate>
        <div>Panel 1</div>
      </ng-template>
      <ng-template zyfraSplitterTemplate>
        <div>Panel 2</div>
      </ng-template>
    </zyfra-splitter>
  `,
  props: {
    ...args,
    onResizeStart: (event) => action('onResizeStart')({ ...event, sizes: [...event.sizes] }),
    onResizeEnd: (event) => action('onResizeEnd')({ ...event, sizes: [...event.sizes] }),
  },
});

export const Simple = Template.bind({});
Simple.args = {
  panelSizes: [50, 0],
  minSizes: [1, 0],
  style: { height: '300px' },
};
