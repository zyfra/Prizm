import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraTableComponent } from '../zyfra-table.component';
import { ZyfraTableModule } from '../zyfra-table.module';
import { ZyfraButtonModule } from '../../button';

export default {
  moduleId: module.id,
  title: 'Tables/Table',
  component: ZyfraTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraTableModule,
        ZyfraButtonModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: require('.//zyfra-table.story.doc.mdx').default,
    },
  },
} as Meta;

export * from './stories/basic.stories';
export * from './stories/status.stories';
export * from './stories/sort.stories';
export * from './stories/sort-multiple.stories';
export * from './stories/selection.stories';
export * from './stories/filter.stories';
export * from './stories/filter-sort-search.stories';
export * from './stories/pagination.stories';
export * from './stories/col-group.stories';
export * from './stories/row-group.stories';
export * from './stories/edit-cell.stories';
export * from './stories/edit-row.stories';
export * from './stories/reorder.stories';
export * from './stories/resize.stories';
export * from './stories/expand.stories';
export * from './stories/scroll-vertical.stories';
export * from './stories/scroll-horizontal-and-vertical.stories';
export * from './stories/scroll-virtual.stories';
export * from './stories/frozen-rows.stories';
export * from './stories/state.stories';
export * from './stories/text-overflow.stories';
