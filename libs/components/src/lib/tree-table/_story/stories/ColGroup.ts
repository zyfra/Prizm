import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTreeTableComponent } from '../../tree-table.component';
import { getSales } from '../data';
import { action } from '@storybook/addon-actions';

const actions = {
  onNodeExpand: action('onNodeExpand'),
  onNodeCollapse: action('onNodeCollapse'),
};

const Template: Story<ZyfraTreeTableComponent> = (args) => ({
  template: `
    <zyfra-tree-table
      [title]="title"
      [stripedMode]="stripedMode"
      [value]="value"
      [columns]="columns"
      [paginator]="paginator"
      [rows]="7"
      (onNodeExpand)="onNodeExpand($event)"
      (onNodeCollapse)="onNodeCollapse($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th rowspan="3">Brand</th>
          <th colspan="4">Sale Rate</th>
        </tr>
        <tr>
          <th colspan="2">Sales</th>
          <th colspan="2">Profits</th>
        </tr>
        <tr>
          <th>Last Year</th>
          <th>This Year</th>
          <th>Last Year</th>
          <th>This Year</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowNode let-rowData="rowData">
        <tr [zyfraRow]="rowData" [zyfraTTRow]="rowNode">
          <td>
            <zyfra-tree-table-toggler [rowNode]="rowNode"></zyfra-tree-table-toggler>
            {{rowData.brand}}
          </td>
          <td style="text-align: right;">{{rowData.lastYearSale}}</td>
          <td style="text-align: right;">{{rowData.thisYearSale}}</td>
          <td style="text-align: right;">{{rowData.lastYearProfit}}</td>
          <td style="text-align: right;">{{rowData.thisYearProfit}}</td>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="footer">
        <tr>
          <td colspan="3">Totals</td>
          <td style="text-align: right;">$3,283,772</td>
          <td style="text-align: right;">$2,126,925</td>
        </tr>
      </ng-template>
    </zyfra-tree-table>
  `,
  props: {
    ...args,
    onNodeExpand: (event) => actions.onNodeExpand({ node: event.node, ...event }),
    onNodeCollapse: (event) => actions.onNodeCollapse({ node: event.node, ...event }),
  },
});

export const ColGroup = Template.bind({});

ColGroup.args = {
  title: 'Таблица с группировкой столбцов',
  value: getSales(),
  paginator: true,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' },
  ],
  stripedMode: true,
};
