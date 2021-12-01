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

export * from './stories/Basic';
export * from './stories/Selection';
export * from './stories/Edit';
export * from './stories/Sort';
export * from './stories/Scroll';
export * from './stories/ColGroup';
export * from './stories/Reorder';
export * from './stories/Filter';
