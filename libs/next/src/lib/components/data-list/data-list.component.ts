import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { ZUI_DATALIST_OPTIONS, ZuiDataListOptions } from './data-list-options';
import { zuiDefaultProp } from '../../decorators';
import { ZuiScrollbarVisibility } from '../scrollbar';
import {
  ZUI_DROPDOWN_CONTROLLER,
  ZUI_DROPDOWN_DEFAULT_MAX_HEIGHT,
  ZUI_DROPDOWN_DEFAULT_MIN_HEIGHT,
  ZuiDropdownControllerDirective,
} from '../../directives/dropdown-controller';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'zui-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZuiDestroyService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'zui-data-list',
    '[class.default]': 'defaultStyle',
  },
})
export class ZuiDataListComponent implements OnInit {
  @Input() defaultStyle = true;

  @Input()
  @zuiDefaultProp()
  iconOff = this.options.empty;

  @Input()
  @zuiDefaultProp()
  scroll: ZuiScrollbarVisibility = 'auto';

  @HostBinding('attr.testId')
  readonly testId = 'zui_data_list';

  constructor(
    @Inject(ZUI_DROPDOWN_CONTROLLER)
    @Optional()
    private readonly controller: ZuiDropdownControllerDirective | null,
    @Inject(ZUI_DATALIST_OPTIONS)
    public readonly options: ZuiDataListOptions,
    private readonly destroy$: ZuiDestroyService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  get minDropdownHeight(): string {
    return (this.controller?.minHeight ?? ZUI_DROPDOWN_DEFAULT_MIN_HEIGHT) + 'px';
  }

  get maxDropdownHeight(): string {
    return (this.controller?.maxHeight ?? ZUI_DROPDOWN_DEFAULT_MAX_HEIGHT) + 'px';
  }

  ngOnInit(): void {
    this.controller?.changes$
      .pipe(
        tap(() => this.cdRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}

