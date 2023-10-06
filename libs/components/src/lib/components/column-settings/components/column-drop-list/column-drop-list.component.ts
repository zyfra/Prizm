import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmColumnSettings, PrizmColumnSettingsBase } from './../../column-settings.model';
import { PrizmLanguageColumnSettings } from '@prizm-ui/i18n';
import { CDK_DRAG_CONFIG, DragDropConfig } from '@angular/cdk/drag-drop';

const DragConfig: DragDropConfig = {
  zIndex: 9999,
};

@Component({
  selector: 'prizm-column-drop-list',
  templateUrl: './column-drop-list.component.html',
  styleUrls: ['./column-drop-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CDK_DRAG_CONFIG, useValue: DragConfig }],
})
export class PrizmColumnDropListComponent extends PrizmAbstractTestId implements OnChanges {
  @Input() columns!: PrizmColumnSettings[];
  @Input() translations!: PrizmLanguageColumnSettings['columnSettings'];

  get columnsBase(): PrizmColumnSettingsBase[] {
    return this.columns as PrizmColumnSettingsBase[];
  }
  public isLastColumnShown = false;

  override readonly testId_ = 'ui_column_drop-list';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.isLastColumnShown = this.checkIsLastShown();
    }
  }

  public toggleColumnStatus(column: PrizmColumnSettingsBase): void {
    if (column.status === 'default') {
      column.status = 'hidden';
    } else if (column.status === 'hidden') {
      column.status = 'default';
    }

    this.isLastColumnShown = this.checkIsLastShown();
  }

  private checkIsLastShown(): boolean {
    return this.columnsBase.filter(el => el.status === 'default').length <= 1;
  }
}
