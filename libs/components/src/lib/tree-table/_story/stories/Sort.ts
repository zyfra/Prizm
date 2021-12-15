import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTreeTableComponent } from '../../tree-table.component';
import { getFileSystem } from '../data';

const actions = {
  onNodeExpand: action('onNodeExpand'),
  onNodeCollapse: action('onNodeCollapse'),
  onSort: action('onSort'),
};

const Template: Story<ZyfraTreeTableComponent> = (args) => ({
  template: `
    <zyfra-button label="Reset sort" (onClick)="table.resetSort()"></zyfra-button>

    <br><br>

    <zyfra-tree-table
      #table
      [title]="title"
      [value]="value"
      [columns]="columns"
      (onSort)="onSort($event)"
      (onNodeExpand)="onNodeExpand($event)"
      (onNodeCollapse)="onNodeCollapse($event)"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns" [zyfraTTSortableColumn]="col.field">
            {{col.header}}
            <zyfra-tree-table-sort-icon [field]="col.field"></zyfra-tree-table-sort-icon>
          </th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [zyfraRow]="rowData" [zyfraTTRow]="rowNode">
          <td *ngFor="let col of columns; let i = index">
            <zyfra-tree-table-toggler [rowNode]="rowNode" *ngIf="i == 0"></zyfra-tree-table-toggler>
            <span>{{rowData[col.field]}}</span>
          </td>
        </tr>
      </ng-template>
    </zyfra-tree-table>
  `,
  component: ZyfraTreeTableComponent,
  props: {
    ...args,
    onSort: actions.onSort,
    onNodeExpand: event => actions.onNodeExpand({ node: event.node, ...event }),
    onNodeCollapse: event => actions.onNodeCollapse({ node: event.node, ...event }),
  },
});

export const Sort = Template.bind({});

Sort.args = {
  title: 'Таблица с сортировкой',
  value: getFileSystem(),
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ],
};
