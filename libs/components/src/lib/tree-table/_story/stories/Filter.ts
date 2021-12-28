import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTreeTableComponent } from '../../tree-table.component';
import { getFileSystem } from '../data';
import { consoleLogAction } from '../../../../../.storybook/helpers';

const actions = {
  onNodeExpand: action('onNodeExpand'),
  onNodeCollapse: action('onNodeCollapse'),
};

const Template: Story<ZyfraTreeTableComponent> = (args) => ({
  template: `
    <zyfra-tree-table
      #tt
      [title]="title"
      [value]="value"
      [columns]="columns"
      (onFilter)="onFilter($event)"
      (onNodeExpand)="onNodeExpand($event)"
      (onNodeCollapse)="onNodeCollapse($event)"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns">
            {{col.header}}
          </th>
        </tr>
        <tr>
          <th *ngFor="let col of columns" zyfra-search-cell [field]="col.field"></th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowNode let-rowData="rowData">
        <tr [zyfraRow]="rowData" [zyfraTTRow]="rowNode">
          <td *ngFor="let col of columns; let i = index">
            <zyfra-tree-table-toggler [rowNode]="rowNode" *ngIf="i == 0"></zyfra-tree-table-toggler>
            {{rowData[col.field]}}
          </td>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="emptymessage">
        <tr>
          <td [attr.colspan]="cols.length">No data found.</td>
        </tr>
      </ng-template>
    </zyfra-tree-table>
  `,
  props: {
    ...args,
    onFilter: consoleLogAction('onFilter'),
    onNodeExpand: event => actions.onNodeExpand({ node: event.node, ...event }),
    onNodeCollapse: event => actions.onNodeCollapse({ node: event.node, ...event }),
  },
});

export const Filter = Template.bind({});

Filter.args = {
  title: 'Таблица с фильтрацией',
  value: getFileSystem(),
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ],
};
