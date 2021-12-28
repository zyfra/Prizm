import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';
import { consoleLogAction } from '../../../../../.storybook/helpers';

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table
      #dt
      [title]="title"
      [value]="value"
      [dataKey]="dataKey"
      [rows]="rows"
      [rowsPerPageOptions]="rowsPerPageOptions"
      [paginator]="paginator"
      [globalFilterFields]="globalFilterFields"
      (page)="page($event)"
      (onFilter)="onFilter($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th>
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Name
              <zyfra-table-column-filter type="text" field="name" display="menu"></zyfra-table-column-filter>
            </div>
          </th>
          <th>
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Country
              <zyfra-table-column-filter type="text" field="country.name" display="menu"></zyfra-table-column-filter>
            </div>
          </th>
          <th>
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Agent
              <zyfra-table-column-filter
                field="representative"
                matchMode="in"
                display="menu"
                [showMatchModes]="false"
                [showOperator]="false"
                [showAddButton]="false"
              >
                <ng-template zyfraTableTemplate="header">
                  <div class="p-px-3 p-pt-3 p-pb-0">
                    <span class="p-text-bold">Agent Picker</span>
                  </div>
                </ng-template>

                <ng-template zyfraTableTemplate="filter" let-value let-filter="filterCallback">
                   filter testing
                </ng-template>
              </zyfra-table-column-filter>
            </div>
          </th>
          <th>
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Date
              <zyfra-table-column-filter type="date" field="date" display="menu"></zyfra-table-column-filter>
            </div>
          </th>
          <th>
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Balance
              <zyfra-table-column-filter type="numeric" field="balance" display="menu" currency="USD"></zyfra-table-column-filter>
            </div>
          </th>
          <th>
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Status
              <zyfra-table-column-filter field="status" matchMode="equals" display="menu">
                <ng-template zyfraTableTemplate="filter" let-value let-filter="filterCallback"></ng-template>
              </zyfra-table-column-filter>
            </div>
          </th>
          <th>
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Activity
            </div>
          </th>
          <th style="width: 8rem">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Verified
              <zyfra-table-column-filter type="boolean" field="verified" display="menu"></zyfra-table-column-filter>
            </div>
          </th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-customer>
        <tr [zyfraRow]="customer">
          <td>
            {{customer.name}}
          </td>
          <td>
            <span class="image-text">{{customer.country.name}}</span>
          </td>
          <td>
            <span class="image-text">{{customer.representative.name}}</span>
          </td>
          <td style="text-align: right;">
            {{customer.date}}
          </td>
          <td style="text-align: right;">
            {{customer.balance | currency:'USD':'symbol'}}
          </td>
          <td>
            <span [class]="'customer-badge status-' + customer.status">{{customer.status}}</span>
          </td>
          <td style="text-align: right;">
            {{customer.activity}}
          </td>
          <td class="p-text-center">
            <i class="pi" [ngClass]="{'true-icon pi-check-circle': customer.verified, 'false-icon pi-times-circle': !customer.verified}"></i>
          </td>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="emptymessage">
        <tr>
          <td colspan="7">No customers found.</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    page: consoleLogAction('page'),
    onFilter: consoleLogAction('onFilter'),
  },
});

export const Filter = Template.bind({});

Filter.args = {
  value: getCustomers(),
  responsiveLayout: 'scroll',
  title: 'Таблица с фильтрацией',
  dataKey: 'id',
  rows: 10,
  rowsPerPageOptions: [10, 25, 50],
  paginator: true,
  globalFilterFields: ['name', 'country.name', 'representative.name', 'status'],
};
