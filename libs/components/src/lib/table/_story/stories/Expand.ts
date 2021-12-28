import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProductsOrdersSmall } from '../data';

const actions = {
  rowExpand: action('rowExpand'),
  rowCollapse: action('rowCollapse'),
};

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [dataKey]="dataKey"
      (rowExpand)="rowExpand($event)"
      (rowCollapse)="rowCollapse($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th style="width: 38px"></th>
          <th zyfraSortableColumn="name">Name <zyfra-sort-icon field="name"></zyfra-sort-icon></th>
          <th>Code</th>
          <th zyfraSortableColumn="price">Price <zyfra-sort-icon field="price"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="category">Category <zyfra-sort-icon field="category"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="rating">Reviews <zyfra-sort-icon field="rating"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="inventoryStatus">Status <zyfra-sort-icon field="inventoryStatus"></zyfra-sort-icon></th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-product let-expanded="expanded">
        <tr [zyfraRow]="product">
          <td>
            <zyfra-row-toggler [data]="product" [expanded]="expanded"></zyfra-row-toggler>
          </td>
          <td>{{product.name}}</td>
          <td>{{product.code}}</td>
          <td style="text-align: right;">{{product.price | currency:'USD'}}</td>
          <td>{{product.category}}</td>
          <td style="text-align: right;">{{product.rating}}</td>
          <td><span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span></td>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="rowexpansion" let-product>
        <tr>
          <td colspan="7">
            <div class="p-p-3">
              <zyfra-table [value]="product.orders" dataKey="id">
                <ng-template zyfraTableTemplate="header">
                  <tr>
                    <th zyfraSortableColumn="id">Id <zyfra-sort-icon field="price"></zyfra-sort-icon></th>
                    <th zyfraSortableColumn="customer">Customer <zyfra-sort-icon field="customer"></zyfra-sort-icon></th>
                    <th zyfraSortableColumn="date">Date <zyfra-sort-icon field="date"></zyfra-sort-icon></th>
                    <th zyfraSortableColumn="amount">Amount <zyfra-sort-icon field="amount"></zyfra-sort-icon></th>
                    <th zyfraSortableColumn="status">Status <zyfra-sort-icon field="status"></zyfra-sort-icon></th>
                  </tr>
                </ng-template>
                <ng-template zyfraTableTemplate="body" let-order>
                  <tr>
                    <td>{{order.id}}</td>
                    <td>{{order.customer}}</td>
                    <td style="text-align: right;">{{order.date}}</td>
                    <td style="text-align: right;">{{order.amount | currency:'USD'}}</td>
                    <td><span [class]="'order-badge order-' + order.status.toLowerCase()">{{order.status}}</span></td>
                  </tr>
                </ng-template>
                <ng-template zyfraTableTemplate="emptymessage">
                  <tr>
                    <td colspan="6">There are no order for this product yet.</td>
                  </tr>
                </ng-template>
              </zyfra-table>
            </div>
          </td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    rowExpand: (event): void => actions.rowExpand({ data: event.data, ...event }),
    rowCollapse: (event): void => actions.rowCollapse({ data: event.data, ...event }),
  },
});

export const Expand = Template.bind({});

Expand.args = {
  title: 'Таблица с раскрывающимися ячейками',
  value: getProductsOrdersSmall(),
  dataKey: 'name',
};
