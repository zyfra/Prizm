import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [scrollable]="scrollable"
      [scrollHeight]="scrollHeight"
      [scrollDirection]="scrollDirection"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th style="width:200px" zyfraFrozenColumn>Name</th>
          <th style="width:100px">Id</th>
          <th style="width:200px">Country</th>
          <th style="width:200px">Date</th>
          <th style="width:200px">Balance</th>
          <th style="width:200px">Company</th>
          <th style="width:200px">Status</th>
          <th style="width:200px">Activity</th>
          <th style="width:200px">Representative</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-customer>
        <tr [zyfraRow]="customer">
          <td style="width:200px" zyfraFrozenColumn>{{customer.name}}</td>
          <td style="width:100px">{{customer.id}}</td>
          <td style="width:200px">{{customer.country.name}}</td>
          <td style="width:200px; display: flex; justify-content: end;">{{customer.date}}</td>
          <td style="width:200px; display: flex; justify-content: end;">{{formatCurrency(customer.balance)}}</td>
          <td style="width:200px">{{customer.company}}</td>
          <td style="width:200px">{{customer.status}}</td>
          <td style="width:200px; display: flex; justify-content: end;">{{customer.activity}}</td>
          <td style="width:200px">{{customer.representative.name}}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    formatCurrency(value): string {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    },
  },
});

export const ScrollHorizontalAndVertical = Template.bind({});
ScrollHorizontalAndVertical.args = {
  title: 'Таблица с горизонтальным и вертикальным скроллом',
  value: getCustomers(),
  scrollable: true,
  scrollHeight: '400px',
  scrollDirection: 'both',
};
