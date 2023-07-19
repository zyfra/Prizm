import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Injector,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import {
  getProviderPrizmDateLeftButtons,
  PRIZM_DATE_RIGHT_BUTTONS,
} from '../../../tokens/date-extra-buttons';
import { BehaviorSubject } from 'rxjs';
import { PrizmDateButton, PrizmDateButtonContext } from '../../../types/date-button';
import { AbstractPrizmTestId } from '../../../abstract/interactive';

export type PrizmDateItemTemplate = {
  name: string;
} & PrizmDateButton;

@Component({
  selector: `prizm-input-date-multi`,
  templateUrl: `./input-date-multi.component.html`,
  styleUrls: [`./input-date-multi.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [getProviderPrizmDateLeftButtons()],
})
export class PrizmInputDateMultiComponent extends AbstractPrizmTestId implements OnInit {
  @ViewChild('buttonLeft', { static: true }) buttonLeftTemplate: TemplateRef<unknown>;

  private readonly _items$ = new BehaviorSubject<PrizmDateItemTemplate[]>([]);
  @Input()
  @prizmDefaultProp()
  set items(value: PrizmDateItemTemplate[]) {
    this._items$.next(value);
  }
  get items(): PrizmDateItemTemplate[] {
    return this._items$.value;
  }

  @Input()
  @prizmDefaultProp()
  currentIdx = 0;

  @Output()
  readonly currentIdxChange = new EventEmitter<number>();

  @HostBinding('attr.data-testid')
  override readonly testId_ = 'ui_input_date_multi';

  public open = false;

  get context(): PrizmDateButtonContext {
    return {
      injector: this.injector,
    };
  }

  constructor(
    @Inject(PRIZM_DATE_RIGHT_BUTTONS) public readonly leftButtons$: BehaviorSubject<PrizmDateButton[]>,
    private readonly cdRef: ChangeDetectorRef,
    private readonly injector: Injector
  ) {
    super();
  }

  public ngOnInit(): void {
    this.leftButtons$.next([
      {
        template: this.buttonLeftTemplate,
      },
    ]);
  }

  public openDropdown(): void {
    this.open = true;
  }

  public setListener(el: HTMLElement): void {
    el.addEventListener(
      'click',
      ev => {
        // TODO remove after finish activezone to dropdown component
        ev.stopPropagation();
        this.openDropdown();
        this.cdRef.markForCheck();
      },
      {
        capture: true,
        passive: true,
      }
    );
  }

  public select(idx: number): void {
    this.currentIdxChange.next((this.currentIdx = idx));
    this.open = false;
    this.cdRef.markForCheck();
  }
}
