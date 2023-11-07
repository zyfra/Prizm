import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import {
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PrizmColumnSettings, PrizmColumnStatus, PrizmTableSettings } from './column-settings.model';
import { PrizmLanguageColumnSettings } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { PRIZM_COLUMN_SETTINGS } from '../../tokens';
import { prizmI18nInitWithKey } from '../../services';
import cloneDeep from 'lodash-es/cloneDeep';
import { CommonModule } from '@angular/common';
import { PrizmCardModule } from '../card';
import { PrizmButtonModule } from '../button';
import { PrizmToggleModule } from '../toggle';
import { PrizmIconModule } from '../icon';
import { PrizmScrollbarModule } from '../scrollbar';
import { PrizmLetModule, PrizmPluckPipeModule } from '@prizm-ui/helpers';
import { PrizmHintModule } from '../../directives';
import { FormsModule } from '@angular/forms';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmColumnIconPipe } from './pipes/column-icon.pipe';

@Component({
  selector: 'prizm-column-settings',
  templateUrl: './column-settings.component.html',
  styleUrls: ['./column-settings.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmCardModule,
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
  providers: [...prizmI18nInitWithKey(PRIZM_COLUMN_SETTINGS, 'columnSettings')],
})
export class PrizmColumnSettingsComponent extends PrizmAbstractTestId implements AfterViewInit {
  @ViewChild('stickyLeftList', { read: CdkDropList }) stickyLeftList: CdkDropList | undefined;
  @ViewChild('columnList', { read: CdkDropList }) columnList: CdkDropList | undefined;
  @ViewChild('stickyRightList', { read: CdkDropList }) stickyRightList: CdkDropList | undefined;

  public _settings!: PrizmTableSettings;
  @Input() set settings(value: PrizmTableSettings) {
    this._settings = cloneDeep(value);
  }
  @Input() defaultSettings: PrizmTableSettings | undefined;
  @Input() stickySettings = false;
  @Input() headerSettings = false;
  @Output() isSettingsChanged = new EventEmitter<PrizmTableSettings | null>();

  public isLastColumnShown = false;
  public connectedColumns: CdkDropList[] = [];
  public connectedLeft: CdkDropList[] = [];
  public connectedRight: CdkDropList[] = [];

  override readonly testId_ = 'ui_column_settings';

  constructor(
    @Inject(PRIZM_COLUMN_SETTINGS)
    public readonly columnSettings$: Observable<PrizmLanguageColumnSettings['columnSettings']>
  ) {
    super();
  }

  ngAfterViewInit(): void {
    if (this.stickySettings) {
      this.connectedColumns = [this.stickyLeftList as CdkDropList, this.stickyRightList as CdkDropList];
      this.connectedLeft = [this.columnList as CdkDropList, this.stickyRightList as CdkDropList];
      this.connectedRight = [this.columnList as CdkDropList, this.stickyLeftList as CdkDropList];
    }
  }

  public resetToDeafault(): void {
    this._settings = cloneDeep(this.defaultSettings as PrizmTableSettings);
    this.checkIsLastShown();
  }

  public drop(event: CdkDragDrop<PrizmColumnSettings[]>, status: PrizmColumnStatus) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.previousContainer.data[event.previousIndex].status = status;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.checkIsLastShown();
    }
  }

  public showAll() {
    this._settings.columns = this._settings.columns.map(el => {
      return { ...el, status: 'default' };
    });
    this.checkIsLastShown();
  }

  public close(settings: PrizmTableSettings | null): void {
    this.isSettingsChanged.emit(settings);
  }

  public checkIsLastShown(): void {
    this.isLastColumnShown =
      this._settings.columns.filter(el => el.status === 'default').length <= 1 &&
      !(this._settings.stickyLeft.length || this._settings.stickyRight.length);
  }
}
