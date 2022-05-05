import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @ts-ignore
import TreeTableDoc from './zyfra-tree-table.story.doc.mdx';
import { ZyfraTreeTableComponent } from '../tree-table.component';
import { ZyfraTreeTableModule } from '../zyfra-tree-table.module';
import { ZyfraButtonModule } from '../../button/zyfra-button.module';

export default {
  moduleId: module.id,
  title: 'Tables/TreeTable',
  component: ZyfraTreeTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraTreeTableModule,
        ZyfraButtonModule,
      ]
    }),
  ],
  parameters: {
    docs: {
      page: TreeTableDoc,
    }
  }
} as Meta;

export * from './stories/basic.stories';
export * from './stories/selection.stories';
export * from './stories/edit.stories';
export * from './stories/sort.stories';
export * from './stories/scroll.stories';
export * from './stories/col-group.stories';
export * from './stories/reorder.stories';
export * from './stories/filter.stories';
