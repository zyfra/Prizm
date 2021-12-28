import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTreeTableComponent } from '../../tree-table.component';
import { getFileSystem } from '../data';
import { action } from '@storybook/addon-actions';

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
      [scrollable]="scrollable"
      [scrollHeight]="scrollHeight"
      (onNodeExpand)="onNodeExpand($event)"
      (onNodeCollapse)="onNodeCollapse($event)"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns">
            {{col.header}}
          </th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [zyfraRow]="rowData" [zyfraTTRow]="rowNode">
          <td *ngFor="let col of columns; let i = index">
            <zyfra-tree-table-toggler [rowNode]="rowNode" *ngIf="i == 0"></zyfra-tree-table-toggler>
            {{rowData[col.field]}}
          </td>
        </tr>
      </ng-template>
    </zyfra-tree-table>
  `,
  props: {
    ...args,
    onNodeExpand: event => actions.onNodeExpand({ node: event.node, ...event }),
    onNodeCollapse: event => actions.onNodeCollapse({ node: event.node, ...event }),
  },
});

export const Scroll = Template.bind({});

Scroll.args = {
  title: 'Таблица со скроллом',
  value: getFileSystem(),
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ],
  scrollable: true,
  scrollHeight: '200px'
};
