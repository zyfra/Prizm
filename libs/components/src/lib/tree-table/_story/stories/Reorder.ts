import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTreeTableComponent } from '../../tree-table.component';
import { getFileSystem } from '../data';

const actions = {
  onNodeExpand: action('onNodeExpand'),
  onNodeCollapse: action('onNodeCollapse'),
};

const Template: Story<ZyfraTreeTableComponent> = (args) => ({
  template: `
    <zyfra-tree-table
      [title]="title"
      [value]="value"
      [columns]="columns"
      [reorderableColumns]="reorderableColumns"
      (onColReorder)="onColReorder($event)"
      (onNodeExpand)="onNodeExpand($event)"
      (onNodeCollapse)="onNodeCollapse($event)"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns" zyfraTTReorderableColumn>
            {{col.header}}
          </th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [zyfraRow]="rowData">
          <td *ngFor="let col of columns; let i = index">
            <zyfra-tree-table-toggler [rowNode]="rowNode" *ngIf="i == 0"></zyfra-tree-table-toggler>
            {{rowData[col.field]}}
          </td>
        </tr>
      </ng-template>
    </zyfra-tree-table>
  `,
  component: ZyfraTreeTableComponent,
  props: {
    ...args,
    onColReorder: action('onColReorder'),
    onNodeExpand: event => actions.onNodeExpand({ node: event.node, ...event }),
    onNodeCollapse: event => actions.onNodeCollapse({ node: event.node, ...event }),
  },
});

export const Reorder = Template.bind({});

Reorder.args = {
  title: 'Таблица с возможностью перестановки колонок',
  value: getFileSystem(),
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ],
  reorderableColumns: true,
};
