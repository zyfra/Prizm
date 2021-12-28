import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';
import { consoleLogAction } from '../../../../../.storybook/helpers';

const PaginationTemplate: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [paginator]="paginator"
      [rows]="rows"
      [responsiveLayout]="responsiveLayout"
      [rowsPerPageOptions]="rowsPerPageOptions"
      (page)="page($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Company</th>
          <th>Representative</th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-customer>
        <tr [zyfraRow]="customer">
          <td>{{customer.name}}</td>
          <td>{{customer.country.name}}</td>
          <td>{{customer.company}}</td>
          <td>{{customer.representative.name}}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    page: consoleLogAction('page'),
  }
});

export const Pagination = PaginationTemplate.bind({});
Pagination.args = {
  title: 'Пагинация',
  value: getCustomers(),
  paginator: true,
  rows: 10,
  responsiveLayout: 'scroll',
  rowsPerPageOptions: [10, 25, 50]
};
