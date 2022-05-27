import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';
import { consoleLogAction } from '../../../../../.storybook/helpers';

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table
      #table
      [title]="title"
      [value]="value"
      [selectionMode]="selectionMode"
      [(selection)]="selection"
      [dataKey]="dataKey"
      [responsiveLayout]="responsiveLayout"
      [rows]="rows"
      [paginator]="paginator"
      [stateStorage]="stateStorage"
      [stateKey]="stateKey"
      (stateSave)="stateSave($event)"
      (stateRestore)="stateRestore($event)"
      (selectionChange)="selectionChange()"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th zyfraSortableColumn="name">Name <zyfra-sort-icon field="name"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="country.name">Country <zyfra-sort-icon field="country.name"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="representative.name">Representative <zyfra-sort-icon field="representative.name"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="status">Status <zyfra-sort-icon field="status"></zyfra-sort-icon></th>
        </tr>
        <tr>
          <th zyfra-search-cell field="name"></th>
          <th zyfra-search-cell field="country.name"></th>
          <th zyfra-search-cell field="representative.name"></th>
          <th zyfra-search-cell field="status"></th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-customer>
        <tr [zyfraRow]="customer" [zyfraSelectableRow]="customer">
          <td>
            {{customer.name}}
          </td>
          <td>
            <span>{{customer.country.name}}</span>
          </td>
          <td>
            <span>{{customer.representative.name}}</span>
          </td>
          <td>
            <span [class]="'customer-badge status-' + customer.status">{{customer.status}}</span>
          </td>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="emptymessage">
        <tr>
          <td colspan="4">No customers found.</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    selectionChange: consoleLogAction('selectionChange'),
    stateSave: action('stateSave'),
    stateRestore: action('stateRestore'),
  },
});

export const State = Template.bind({});

State.args = {
  value: getCustomers(),
  responsiveLayout: 'scroll',
  title: 'Таблица с возможностью сохранения состояния (LocalStorage / SessionStorage)',
  selectionMode: 'single',
  selection: null,
  dataKey: 'id',
  rows: 10,
  paginator: true,
  stateStorage: 'local',
  stateKey: 'statedemo-local',
};
