import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getSalesSmall } from '../data';

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table [value]="value" [responsiveLayout]="responsiveLayout" [title]="title">
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th rowspan="3">Product</th>
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

      <ng-template zyfraTableTemplate="body" let-sale>
        <tr [zyfraRow]="sale">
          <td>{{sale.product}}</td>
          <td style="text-align: right;">{{sale.lastYearSale}}%</td>
          <td style="text-align: right;">{{sale.thisYearSale}}%</td>
          <td style="text-align: right;">{{sale.lastYearProfit | currency: 'USD'}}</td>
          <td style="text-align: right;">{{sale.thisYearProfit | currency: 'USD'}}</td>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="footer">
        <tr>
          <td colspan="3">Totals</td>
          <td style="text-align: right;">{{lastYearTotal | currency: 'USD'}}</td>
          <td style="text-align: right;">{{thisYearTotal | currency: 'USD'}}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    lastYearTotal: 3_283_772.0,
    thisYearTotal: 1_541_925.0,
  },
});

export const ColGroup = Template.bind({});

ColGroup.args = {
  value: getSalesSmall(),
  responsiveLayout: 'scroll',
  title: 'Группировка колонок',
};
