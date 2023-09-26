import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PrizmColumnSettings } from './column-settings.model';
import { PrizmLanguageColumnSettings } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { PRIZM_COLUMN_SETTINGS } from '../../tokens';
import { prizmI18nInitWithKey } from '../../services';

@Component({
  selector: 'prizm-column-settings',
  templateUrl: './column-settings.component.html',
  styleUrls: ['./column-settings.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...prizmI18nInitWithKey(PRIZM_COLUMN_SETTINGS, 'columnSettings')],
})
export class PrizmColumnSettingsComponent extends PrizmAbstractTestId {
  @Input() defaultSettings: unknown = true;
  @Input() useSticky = true;

  public columns: PrizmColumnSettings[] = [
    {
      id: 'item',
      name: 'колонка 1',
      status: 'hidden',
    },
    {
      id: 'count',
      name: 'колонка 2',
      status: 'default',
    },
    {
      id: 'country',
      name: 'колонка 3',
      status: 'default',
    },
    {
      id: 'item',
      name: 'колонка 1',
      status: 'hidden',
    },
    {
      id: 'count',
      name: 'колонка 2',
      status: 'default',
    },
    {
      id: 'country',
      name: 'колонка 3',
      status: 'default',
    },
    {
      id: 'item',
      name: 'колонка 1',
      status: 'hidden',
    },
    {
      id: 'count',
      name: 'колонка 2',
      status: 'default',
    },
    {
      id: 'country',
      name: 'колонка 3',
      status: 'default',
    },
  ];

  public stickyLeftColumns: PrizmColumnSettings[] = [
    // {
    //   id: 'item',
    //   name: 'колонка 6',
    //   status: 'sticky',
    // },
    // {
    //   id: 'count',
    //   name: 'колонка 7',
    //   status: 'sticky',
    // },
    // {
    //   id: 'country',
    //   name: 'колонка 8',
    //   status: 'sticky',
    // },
  ];

  public stickyRightColumns: PrizmColumnSettings[] = [
    // {
    //   id: 'item',
    //   name: 'колонка 6',
    //   status: 'sticky',
    // },
    // {
    //   id: 'count',
    //   name: 'колонка 7',
    //   status: 'sticky',
    // },
    // {
    //   id: 'country',
    //   name: 'колонка 8',
    //   status: 'sticky',
    // },
  ];
  override readonly testId_ = 'ui_column_settings';

  constructor(
    @Inject(PRIZM_COLUMN_SETTINGS)
    public readonly columnSettings$: Observable<PrizmLanguageColumnSettings['columnSettings']>
  ) {
    super();
  }

  public resetToDeafault(): void {
    // TODO: implement;
  }

  public drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
