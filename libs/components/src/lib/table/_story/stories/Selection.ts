import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProducts } from '../data';

const actions = {
  rowSelect: action('rowSelect'),
  rowUnselect: action('rowUnselect'),
  selectionChange: action('selectionChange'),
  headerCheckboxToggle: action('headerCheckboxToggle'),
};

const SelectionTemplate: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      #dt
      [title]="title"
      [value]="value"
      [(selection)]="selection"
      [dataKey]="dataKey"
      [responsiveLayout]="responsiveLayout"
      [selectionMode]="selectionMode"
      [metaKeySelection]="metaKeySelection"
      [stripedMode]="stripedMode"
      (selectionChange)="selectionChange($event)"
      (rowSelect)="rowSelect($event)"
      (rowUnselect)="rowUnselect($event)"
      (headerCheckboxToggle)="headerCheckboxToggle($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th style="width: 32px">
            <zyfra-table-header-checkbox></zyfra-table-header-checkbox>
          </th>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-product let-rowIndex="rowIndex">
        <tr [zyfraRow]="product" [zyfraSelectableRow]="product" [zyfraSelectableRowIndex]="rowIndex">
          <td>
            <zyfra-table-checkbox [value]="product"></zyfra-table-checkbox>
          </td>
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td style="text-align: right;">{{ product.quantity }}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  component: ZyfraTableComponent,
  props: {
    ...args,
    selectionChange: actions.selectionChange,
    headerCheckboxToggle: actions.headerCheckboxToggle,
    rowUnselect: event => actions.rowUnselect({ data: event.data, ...event }),
    rowSelect: (event) => actions.rowSelect({ data: event.data, ...event }),
  },
});

export const Selection = SelectionTemplate.bind({});
Selection.args = {
  title: 'Таблица с выбором ячеек',
  selection: null,
  value: getProducts(),
  dataKey: 'code',
  responsiveLayout: 'scroll',
  selectionMode: 'multiple',
  metaKeySelection: false,
  stripedMode: true,
};
