import { Story } from '@storybook/angular/types-6-0';
import { ZyfraTableComponent } from '../../zyfra-table.component';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [columns]="columns"
      [value]="value"
      [scrollable]="scrollable"
      [rows]="rows"
      [scrollHeight]="scrollHeight"
      [virtualScroll]="virtualScroll"
      [virtualRowHeight]="virtualRowHeight"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns" [zyfraSortableColumn]="col.field">
            {{col.header}} <zyfra-sort-icon [field]="col.field"></zyfra-sort-icon>
          </th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowData let-rowIndex="rowIndex" let-columns="columns">
        <tr [zyfraRow]="rowIndex">
          <td *ngFor="let col of columns" [style]="col.field === 'year' ? { 'display': 'flex', 'justify-content': 'end' } : null">
            {{rowData[col.field]}}
          </td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  component: ZyfraTableComponent,
  props: args,
});

export const ScrollVirtual = Template.bind({});

ScrollVirtual.args = {
  value: Array.from({ length: 10000 }).map(() => generateCar()),
  responsiveLayout: 'scroll',
  title: 'Таблица с виртуальным скроллом',
  columns: [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ],
  scrollable: true,
  rows: 100,
  scrollHeight: '250px',
  virtualScroll: true,
  virtualRowHeight: 32,
};

function generateCar(): { vin: string, brand: string, color: string, year: number } {
  function generateVin(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  function generateBrand(): string {
    const brands: string[] = ['Vapid', 'Carson', 'Kitano', 'Dabver', 'Ibex', 'Morello', 'Akira', 'Titan', 'Dover', 'Norma'];
    return brands[Math.floor(Math.random() * Math.floor(10))];
  }

  function generateColor(): string {
    const colors: string[] = ['Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'];
    return colors[Math.floor(Math.random() * Math.floor(7))];
  }

  function generateYear(): number {
    return 2000 + Math.floor(Math.random() * Math.floor(19));
  }

  return {
    vin: generateVin(),
    brand: generateBrand(),
    color: generateColor(),
    year: generateYear()
  };
}
