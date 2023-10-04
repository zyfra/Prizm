import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PrizmTableCellStatus, PrizmTableSettings } from '@prizm-ui/components';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';

export interface ITableProduct {
  id?: number | string;
  status?: PrizmTableCellStatus;
  code: string;
  name: string;
  category: string;
  count: number;
  children?: ITableProduct[];
}

@Component({
  selector: 'prizm-table-column-settings-example',
  templateUrl: './table-column-settings-example.component.html',
  styleUrls: ['./table-column-settings-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableColumnSettingsExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count', 'nameTwin', 'categoryTwin', 'countTwin'];

  public settings: PrizmTableSettings = {
    columns: [
      {
        id: 'code',
        name: 'Код',
        status: 'default',
      },
      {
        id: 'name',
        name: 'Наименование',
        status: 'default',
      },
      {
        id: 'category',
        name: 'Категория',
        status: 'default',
      },
      {
        id: 'count',
        name: 'Количество',
        status: 'default',
      },
      {
        id: 'nameTwin',
        name: 'Наименование 2',
        status: 'default',
      },
      {
        id: 'categoryTwin',
        name: 'Категория 2',
        status: 'default',
      },
      {
        id: 'countTwin',
        name: 'Количество 2',
        status: 'default',
      },
    ],
    stickyLeft: [],
    stickyRight: [],
  };

  public defaultSettings: PrizmTableSettings = {
    columns: [
      {
        id: 'code',
        name: 'Код',
        status: 'default',
      },
      {
        id: 'name',
        name: 'Наименование',
        status: 'default',
      },
      {
        id: 'category',
        name: 'Категория',
        status: 'default',
      },
      {
        id: 'count',
        name: 'Количество',
        status: 'default',
      },
      {
        id: 'nameTwin',
        name: 'Наименование 2',
        status: 'hidden',
      },
      {
        id: 'categoryTwin',
        name: 'Категория 2',
        status: 'hidden',
      },
      {
        id: 'countTwin',
        name: 'Количество 2',
        status: 'hidden',
      },
    ],
    stickyLeft: [],
    stickyRight: [],
  };

  private stickyLeftIds: string[] = [];
  private stickyRightCols: string[] = [];
  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  public showColumnSettings = false;

  constructor(public readonly cdr: ChangeDetectorRef) {}

  public toggleColumnSettings(): void {
    this.showColumnSettings = !this.showColumnSettings;
  }

  public isStickyLeft(id: string): boolean {
    return this.stickyLeftIds.includes(id);
  }

  public isStickyRight(id: string): boolean {
    return this.stickyRightCols.includes(id);
  }

  public updateTableSettings(settings: PrizmTableSettings | null) {
    this.showColumnSettings = false;
    if (settings) {
      this.stickyLeftIds = settings.stickyLeft.map(el => el.id);
      this.stickyRightCols = settings.stickyRight.map(el => el.id);
      this.columns = [
        ...this.stickyLeftIds,
        ...settings.columns.filter(el => el.status === 'default').map(el => el.id),
        ...this.stickyRightCols,
      ];
      this.settings = settings;
    }

    this.cdr.markForCheck();
  }
}
