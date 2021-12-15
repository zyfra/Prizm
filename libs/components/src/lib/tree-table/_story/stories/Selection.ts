import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTreeTableComponent } from '../../tree-table.component';
import { getFileSystem } from '../data';

const actions = {
  onNodeSelect: action('onNodeSelect'),
  onNodeUnselect: action('onNodeUnselect'),
  onNodeExpand: action('onNodeExpand'),
  onNodeCollapse: action('onNodeCollapse'),
  selectionChange: action('selectionChange'),
  onHeaderCheckboxToggle: action('onHeaderCheckboxToggle'),
};

const Template: Story<ZyfraTreeTableComponent> = (args) => ({
  template: `
    <zyfra-tree-table
      #table
      [title]="title"
      [value]="value"
      [columns]="columns"
      [selectionMode]="selectionMode"
      [stripedMode]="stripedMode"
      [(selection)]="selection"
      (onNodeSelect)="onNodeSelect($event)"
      (onNodeUnselect)="onNodeUnselect($event)"
      (selectionChange)="selectionChange($event)"
      (onHeaderCheckboxToggle)="onHeaderCheckboxToggle($event)"
      (onNodeExpand)="onNodeExpand($event)"
      (onNodeCollapse)="onNodeCollapse($event)"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th><zyfra-tree-table-header-checkbox style="margin-right: 6px"></zyfra-tree-table-header-checkbox> Имя</th>
          <th>Размер</th>
          <th>Тип</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [zyfraRow]="rowData" [zyfraTTRow]="rowNode" [zyfraTTSelectableRow]="rowNode">
          <td *ngFor="let col of columns; let i = index">
            <zyfra-tree-table-toggler [rowNode]="rowNode" *ngIf="i == 0"></zyfra-tree-table-toggler>
            <zyfra-tree-table-checkbox [value]="rowNode" *ngIf="i == 0"></zyfra-tree-table-checkbox>
            <ng-container *ngIf="i === 0">
              <span
                class="zyfra-icon files-folder"
                *ngIf="rowNode.node.children && rowNode.node.children.length > 0; else docIcon"
                style="margin-right: 10px;"
              ></span>
            </ng-container>
            <span>{{ rowData[col.field] }}</span>
          </td>
        </tr>
      </ng-template>
    </zyfra-tree-table>

    <ng-template #docIcon>
      <span class="zyfra-icon files-description-properties" style="margin-right: 10px; font-size: 20px;"></span>
    </ng-template>
  `,
  component: ZyfraTreeTableComponent,
  props: {
    ...args,
    onNodeSelect: event => actions.onNodeSelect({ node: event.node, ...event }),
    onNodeUnselect: event => actions.onNodeUnselect({ node: event.node, ...event }),
    onNodeExpand: event => actions.onNodeExpand({ node: event.node, ...event }),
    onNodeCollapse: event => actions.onNodeCollapse({ node: event.node, ...event }),
    selectionChange: actions.selectionChange,
    onHeaderCheckboxToggle: actions.onHeaderCheckboxToggle,
  },
});

export const Selection = Template.bind({});

Selection.args = {
  title: 'Вложенная таблица с выбором',
  value: getFileSystem(),
  responsiveLayout: 'scroll',
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ],
  selectionMode: 'checkbox',
  selection: null,
  stripedMode: true,
};
