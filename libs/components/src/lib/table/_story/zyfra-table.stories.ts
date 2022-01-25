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

export * from './stories/Basic';
export * from './stories/Status';
export * from './stories/Sort';
export * from './stories/SortMultiple';
export * from './stories/Selection';
export * from './stories/Filter';
export * from './stories/FilterSortSearch';
export * from './stories/Pagination';
export * from './stories/ColGroup';
export * from './stories/RowGroup';
export * from './stories/EditCell';
export * from './stories/EditRow';
export * from './stories/Reorder';
export * from './stories/Resize';
export * from './stories/Expand';
export * from './stories/ScrollVertical';
export * from './stories/ScrollHorizontalAndVertical';
export * from './stories/ScrollVirtual';
export * from './stories/FrozenRows';
export * from './stories/State';
