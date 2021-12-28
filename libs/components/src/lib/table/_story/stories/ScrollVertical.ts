import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table [value]="value" [scrollable]="scrollable" [scrollHeight]="scrollHeight" [title]="title">
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th style="min-width:200px">Name</th>
          <th style="min-width:200px">Country</th>
          <th style="min-width:200px">Company</th>
          <th style="min-width:200px">Representative</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-customer>
        <tr [zyfraRow]="customer">
          <td style="min-width:200px">{{ customer.name }}</td>
          <td style="min-width:200px">{{ customer.country.name }}</td>
          <td style="min-width:200px">{{ customer.company }}</td>
          <td style="min-width:200px">{{ customer.representative.name }}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: args,
});

export const ScrollVertical = Template.bind({});

ScrollVertical.args = {
  title: 'Таблица с вертикальным скроллом',
  value: getCustomers(),
  scrollable: true,
  scrollHeight: '400px',
};
