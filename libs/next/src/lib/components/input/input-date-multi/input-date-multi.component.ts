import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostBinding,
  Inject,
  Injector,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PzmInputSize } from '../common/models/pzm-input.models';
import { getProviderPzmDateLeftButtons, PZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { BehaviorSubject } from 'rxjs';
import { PzmDateButton, PzmDateButtonContext } from '../../../types/date-button';

export type PzmDateItemTemplate = {
  name: string;
} & PzmDateButton;

@Component({
    selector: `pzm-input-date-multi`,
    templateUrl: `./input-date-multi.component.html`,
    styleUrls: [`./input-date-multi.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      getProviderPzmDateLeftButtons(),
    ]
})
export class PzmInputDateMultiComponent implements OnInit {
    @ViewChild('buttonLeft', { static: true }) buttonLeftTemplate: TemplateRef<unknown>;

    private readonly _items$ = new BehaviorSubject<PzmDateItemTemplate[]>([]);
    @Input()
    @pzmDefaultProp()
    set items(value: PzmDateItemTemplate[]) {
      this._items$.next(value);
    }
    get items(): PzmDateItemTemplate[] {
      return this._items$.value;
    }

    @Input()
    @pzmDefaultProp()
    currentIdx = 0;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_input_date_multi';

    public open = false;

    get context(): PzmDateButtonContext {
      return {
        injector: this.injector
      }
    }

    constructor(
      @Inject(PZM_DATE_RIGHT_BUTTONS) public readonly leftButtons$: BehaviorSubject<PzmDateButton[]>,
      private readonly cdRef: ChangeDetectorRef,
      private readonly injector: Injector,
    ) {
    }

    public ngOnInit(): void {
      this.leftButtons$.next([
        {
          template: this.buttonLeftTemplate,
        }
      ]);
    }

    public openDropdown(): void {
      this.open = true;
    }

    public setListener(el: HTMLElement): void {
      el.addEventListener(
        'click',
        (ev) => {
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
      this.currentIdx = idx;
      this.open = false;
      this.cdRef.markForCheck();
    }
}
