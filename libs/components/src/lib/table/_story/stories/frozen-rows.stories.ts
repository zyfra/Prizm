import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getCustomers } from '../data';

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [frozenValue]="frozenValue"
      [scrollable]="scrollable"
      [scrollHeight]="scrollHeight"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Company</th>
          <th>Representative</th>
          <th style="flex: 0 0 45px"></th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="frozenbody" let-customer let-index="rowIndex">
        <tr [zyfraRow]="customer" style="font-weight: 600;">
          <td>{{customer.name}}</td>
          <td>{{customer.country.name}}</td>
          <td>{{customer.company}}</td>
          <td>{{customer.representative.name}}</td>
          <td style="flex: 0 0 45px">
            <button type="button" (click)="toggleLock(customer, true, index)" style="background: transparent; border: none; color: #49AB4D;">
              <i class="pi pi-lock-open"></i>
            </button>
          </td>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-customer let-index="rowIndex">
        <tr [zyfraRow]="customer">
          <td>{{customer.name}}</td>
          <td>{{customer.country.name}}</td>
          <td>{{customer.company}}</td>
          <td>{{customer.representative.name}}</td>
          <td style="flex: 0 0 45px">
            <button type="button" (click)="toggleLock(customer, false, index)" style="background: transparent; border: none; color: #7887A5;">
              <i class="pi pi-lock"></i>
            </button>
          </td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    toggleLock(data, frozen, index): void {
      if (frozen) {
        this.frozenValue = this.frozenValue.filter((c, i) => i !== index);
        this.value.push(data);
      } else {
        this.value = this.value.filter((c, i) => i !== index);
        this.frozenValue.push(data);
      }

      this.value.sort((val1, val2) => {
        return val1.id < val2.id ? -1 : 1;
      });
    },
  },
});

export const FrozenRows = Template.bind({});

FrozenRows.args = {
  title: 'Таблица с закрепляющимися строками',
  value: getCustomers(),
  frozenValue: [
    {
      id: 5135,
      name: 'Geraldine Bisset',
      country: {
        name: 'France',
        code: 'fr',
      },
      company: 'Bisset Group',
      status: 'proposal',
      date: '2019-05-05',
      activity: 0,
      representative: {
        name: 'Amy Elsner',
        image: 'amyelsner.png',
      },
    },
  ],
  scrollable: true,
  scrollHeight: '400px',
};
