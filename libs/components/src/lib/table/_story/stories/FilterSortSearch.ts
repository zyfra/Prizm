import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <div style="font-family: Inter, sans-serif;">
      <p style="font-size: 16px; font-weight: 600; margin: 0;">Примечание:</p>
      <p style="font-size: 14px;">Фильтрация колонок и поиск по колонке совместно работают некорректно в режиме локальной фильтрации из-за особенностей реализации таблиц в primeng. Однако фильтрация в режиме lazy load работает корректно, события эмитят все необходимые данные для отправки на backend (см. вкладку "actions")</p>
    </div>

    <zyfra-table
      #dt
      [title]="title"
      [value]="value"
      [dataKey]="dataKey"
      [lazy]="true"
      [rows]="rows"
      [rowsPerPageOptions]="rowsPerPageOptions"
      [paginator]="paginator"
      [globalFilterFields]="globalFilterFields"
      (page)="page($event)"
      (onFilter)="onFilter($event)"
      (sort)="sort($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th zyfraSortableColumn="name">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Name
              <div style="display: flex; align-items: center;">
                <zyfra-table-column-filter type="text" field="name" display="menu"></zyfra-table-column-filter>
                <zyfra-sort-icon field="name"></zyfra-sort-icon>
              </div>
            </div>
          </th>
          <th zyfraSortableColumn="country.name">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Country
              <div style="display: flex; align-items: center;">
                <zyfra-table-column-filter type="text" field="country.name" display="menu"></zyfra-table-column-filter>
                <zyfra-sort-icon field="country.name"></zyfra-sort-icon>
              </div>
            </div>
          </th>
          <th zyfraSortableColumn="representative.name">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Agent
              <div style="display: flex; align-items: center;">
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
                <zyfra-sort-icon field="representative.name"></zyfra-sort-icon>
              </div>
            </div>
          </th>
          <th zyfraSortableColumn="date">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Date
              <div style="display: flex; align-items: center;">
                <zyfra-table-column-filter type="date" field="date" display="menu"></zyfra-table-column-filter>
                <zyfra-sort-icon field="date"></zyfra-sort-icon>
              </div>
            </div>
          </th>
          <th zyfraSortableColumn="balance">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Balance
              <div style="display: flex; align-items: center;">
                <zyfra-table-column-filter type="numeric" field="balance" display="menu" currency="USD"></zyfra-table-column-filter>
                <zyfra-sort-icon field="balance"></zyfra-sort-icon>
              </div>
            </div>
          </th>
          <th zyfraSortableColumn="status">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Status
              <div style="display: flex; align-items: center;">
                <zyfra-table-column-filter field="status" matchMode="equals" display="menu">
                  <ng-template zyfraTableTemplate="filter" let-value let-filter="filterCallback"></ng-template>
                </zyfra-table-column-filter>
                <zyfra-sort-icon field="status"></zyfra-sort-icon>
              </div>
            </div>
          </th>
          <th zyfraSortableColumn="activity">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Activity
              <zyfra-sort-icon field="activity"></zyfra-sort-icon>
            </div>
          </th>
          <th zyfraSortableColumn="verified" style="width: 8rem">
            <div style="display: flex;justify-content: space-between;align-items: center;">
              Verified
              <div style="display: flex; align-items: center;">
                <zyfra-table-column-filter type="boolean" field="verified" display="menu"></zyfra-table-column-filter>
                <zyfra-sort-icon field="verified"></zyfra-sort-icon>
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="name"></th>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="country.name"></th>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="representative.name"></th>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="date"></th>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="balance"></th>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="status"></th>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="activity"></th>
          <th zyfra-search-cell [isNativeFiltering]="false" (valueChange)="valueChange($event)" field="verified"></th>
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
  component: ZyfraTableComponent,
  props: {
    ...args,
    page: action('page'),
    onFilter: action('onFilter'),
    valueChange: action('valueChange'),
    sort: action('sort'),
  },
});

export const FilterSortSearch = Template.bind({});

FilterSortSearch.args = {
  // @ts-ignore
  value: getCustomers(),
  responsiveLayout: 'scroll',
  title: 'Таблица с фильтрацией, сортировкой и поиском по столбцам (lazy mode)',
  dataKey: 'id',
  rows: 10,
  rowsPerPageOptions: [10, 25, 50],
  paginator: true,
  globalFilterFields: ['name', 'country.name', 'representative.name', 'status'],
};
