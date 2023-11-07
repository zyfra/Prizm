import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmColumnSettings } from './../../column-settings.model';
import { PrizmLanguageColumnSettings } from '@prizm-ui/i18n';
import { CDK_DRAG_CONFIG, DragDropConfig, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  PrizmButtonModule,
  PrizmCardModule,
  PrizmHintModule,
  PrizmIconModule,
  PrizmScrollbarModule,
  PrizmToggleModule,
} from '@prizm-ui/components';
import { PrizmLetModule, PrizmPluckPipeModule } from '@prizm-ui/helpers';
import { FormsModule } from '@angular/forms';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmColumnIconPipe } from '../../pipes/column-icon.pipe';

const DragConfig: DragDropConfig = {
  zIndex: 9999,
};

@Component({
  selector: 'prizm-column-drop-list',
  templateUrl: './column-drop-list.component.html',
  styleUrls: ['./column-drop-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CDK_DRAG_CONFIG, useValue: DragConfig }],
  standalone: true,
  imports: [
    CommonModule,
    PrizmButtonModule,
    PrizmToggleModule,
    DragDropModule,
    PrizmIconModule,
    PrizmScrollbarModule,
    PrizmLetModule,
    PrizmPluckPipeModule,
    PrizmHintModule,
    FormsModule,
    PrizmThemeModule,
    PrizmColumnIconPipe,
  ],
})
export class PrizmColumnDropListComponent extends PrizmAbstractTestId {
  @Input() columns!: PrizmColumnSettings[];
  @Input() translations!: PrizmLanguageColumnSettings['columnSettings'];
  @Input() isLastColumnShown = false;
  @Output() statusChanged = new EventEmitter<void>();

  override readonly testId_ = 'ui_column_drop-list';

  public toggleColumnStatus(column: PrizmColumnSettings): void {
    if (column.status === 'default') {
      column.status = 'hidden';
    } else if (column.status === 'hidden') {
      column.status = 'default';
    }
    this.statusChanged.emit();
  }
}
