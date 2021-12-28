import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProductsSmall } from '../data';
import { action } from '@storybook/addon-actions';
import { consoleLogAction } from '../../../../../.storybook/helpers';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [dataKey]="dataKey"
      [responsiveLayout]="responsiveLayout"
      (editInit)="editInit($event)"
      (editComplete)="editComplete($event)"
      (editCancel)="editCancel($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-product>
        <tr [zyfraRow]="product">
          <td zyfraEditableColumn>
            <zyfra-cell-editor [(value)]="product.code">
               {{ product.code}}
            </zyfra-cell-editor>
          </td>

          <td zyfraEditableColumn>
            <zyfra-cell-editor [(value)]="product.name">
              {{product.name}}
            </zyfra-cell-editor>
          </td>
          <td zyfraEditableColumn>
            <zyfra-cell-editor [(value)]="product.inventoryStatus">
              {{product.inventoryStatus}}
            </zyfra-cell-editor>
          </td>
          <td>
            <zyfra-cell-editor [(value)]="product.price">
              {{product.price | currency: 'USD'}}
            </zyfra-cell-editor>
          </td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    editComplete: consoleLogAction('editComplete'),
    editCancel: consoleLogAction('editCancel'),
    editInit: consoleLogAction('editInit'),
  },
});

export const EditCell = Template.bind({});

EditCell.args = {
  value: getProductsSmall(),
  dataKey: 'id',
  title: 'Редактирование ячеек',
  responsiveLayout: 'scroll',
};
