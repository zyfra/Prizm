import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { PRIZM_DATALIST_OPTIONS, PrizmDataListOptions } from './data-list-options';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmScrollbarVisibility } from '../scrollbar';
import {
  PRIZM_DROPDOWN_CONTROLLER,
  PRIZM_DROPDOWN_DEFAULT_MAX_HEIGHT,
  PRIZM_DROPDOWN_DEFAULT_MIN_HEIGHT,
  PrizmDropdownControllerDirective,
} from '../../directives/dropdown-controller';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PolymorphContent } from '../../directives';

@Component({
  selector: 'prizm-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'prizm-data-list',
    '[class.default]': 'defaultStyle',
  },
})
export class PrizmDataListComponent extends PrizmAbstractTestId implements OnInit {
  @Input() defaultStyle = true;

  @Input()
  @prizmDefaultProp()
  iconOff = this.options.empty;

  @Input()
  @prizmDefaultProp()
  scroll: PrizmScrollbarVisibility = 'auto';

  @Input()
  body: PolymorphContent = '';

  override readonly testId_ = 'ui_data_list';

  constructor(
    @Inject(PRIZM_DROPDOWN_CONTROLLER)
    @Optional()
    private readonly controller: PrizmDropdownControllerDirective | null,
    @Inject(PRIZM_DATALIST_OPTIONS)
    public readonly options: PrizmDataListOptions,
    private readonly destroy$: PrizmDestroyService,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super();
  }

  get minDropdownHeight(): string {
    return (this.controller?.minHeight ?? PRIZM_DROPDOWN_DEFAULT_MIN_HEIGHT) + 'px';
  }

  get maxDropdownHeight(): string {
    return (this.controller?.maxHeight ?? PRIZM_DROPDOWN_DEFAULT_MAX_HEIGHT) + 'px';
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
