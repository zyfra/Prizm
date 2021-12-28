import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [sortField]="sortField"
      [sortMode]="sortMode"
      [scrollable]="scrollable"
      [scrollHeight]="scrollHeight"
      [rowGroupMode]="rowGroupMode"
      [groupRowsBy]="groupRowsBy"
      [responsiveLayout]="responsiveLayout"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th style="min-width:200px">Name</th>
          <th style="min-width:200px">Country</th>
          <th style="min-width:200px">Company</th>
          <th style="min-width:200px">Status</th>
          <th style="min-width:200px">Date</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="groupheader" let-customer>
        <tr zyfraRowGroupHeader>
          <td colspan="5">
            <span style="font-weight: 600;">{{customer.representative.name}}</span>
          </td>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="groupfooter" let-customer>
        <tr class="p-rowgroup-footer">
          <td style="min-width: 80%">
            <div style="width: 100%">Total Customers</div>
          </td>
          <td style="width: 20%; display: flex; justify-content: end;">
            {{calculateCustomerTotal(value, customer.representative.name)}}
          </td>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-customer>
        <tr [zyfraRow]="customer">
          <td style="min-width:200px">
            {{customer.name}}
          </td>
          <td style="min-width:200px">
            <span class="image-text">{{customer.country.name}}</span>
          </td>
          <td style="min-width:200px">
            {{customer.company}}
          </td>
          <td style="min-width:200px">
            <span [class]="'customer-badge status-' + customer.status">{{customer.status}}</span>
          </td>
          <td style="min-width:200px; display: flex; justify-content: end;">
            {{customer.date}}
          </td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    calculateCustomerTotal(customers, name): number {
      let total = 0;

      if (customers) {
        for (const customer of customers) {
          if (customer.representative.name === name) {
            total++;
          }
        }
      }

      return total;
    },
  },
});

export const RowGroup = Template.bind({});

RowGroup.args = {
  value: getCustomers(),
  title: 'Группировка по свойству',
  sortField: 'representative.name',
  sortMode: 'single',
  scrollable: true,
  scrollHeight: '400px',
  rowGroupMode: 'subheader',
  groupRowsBy: 'representative.name',
  responsiveLayout: 'scroll',
};
