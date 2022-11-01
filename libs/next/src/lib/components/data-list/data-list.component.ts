import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { PZM_DATALIST_OPTIONS, PzmDataListOptions } from './data-list-options';
import { pzmDefaultProp } from '../../decorators';
import { PzmScrollbarVisibility } from '../scrollbar';
import {
  PZM_DROPDOWN_CONTROLLER,
  PZM_DROPDOWN_DEFAULT_MAX_HEIGHT,
  PZM_DROPDOWN_DEFAULT_MIN_HEIGHT,
  PzmDropdownControllerDirective,
} from '../../directives/dropdown-controller';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'pzm-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PzmDestroyService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'pzm-data-list',
    '[class.default]': 'defaultStyle',
  },
})
export class PzmDataListComponent implements OnInit {
  @Input() defaultStyle = true;

  @Input()
  @pzmDefaultProp()
  iconOff = this.options.empty;

  @Input()
  @pzmDefaultProp()
  scroll: PzmScrollbarVisibility = 'auto';

  @HostBinding('attr.testId')
  readonly testId = 'pzm_data_list';

  constructor(
    @Inject(PZM_DROPDOWN_CONTROLLER)
    @Optional()
    private readonly controller: PzmDropdownControllerDirective | null,
    @Inject(PZM_DATALIST_OPTIONS)
    public readonly options: PzmDataListOptions,
    private readonly destroy$: PzmDestroyService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  get minDropdownHeight(): string {
    return (this.controller?.minHeight ?? PZM_DROPDOWN_DEFAULT_MIN_HEIGHT) + 'px';
  }

  get maxDropdownHeight(): string {
    return (this.controller?.maxHeight ?? PZM_DROPDOWN_DEFAULT_MAX_HEIGHT) + 'px';
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

