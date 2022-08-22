import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Injector,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZuiInputSize } from '../common/models/zui-input.models';
import { getProviderZuiDateLeftButtons, ZUI_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { BehaviorSubject } from 'rxjs';
import { ZuiDateButton, ZuiDateButtonContext } from '../../../types/date-button';

export type ZuiDateItemTemplate = {
  name: string;
} & ZuiDateButton;

@Component({
    selector: `zui-input-date-multi`,
    templateUrl: `./input-date-multi.component.html`,
    styleUrls: [`./input-date-multi.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      getProviderZuiDateLeftButtons(),
    ]
})
export class ZuiInputDateMultiComponent implements OnInit {
    @ViewChild('buttonLeft', { static: true }) buttonLeftTemplate: TemplateRef<unknown>;

    private readonly _items$ = new BehaviorSubject<ZuiDateItemTemplate[]>([]);
    @Input()
    @zuiDefaultProp()
    set items(value: ZuiDateItemTemplate[]) {
      this._items$.next(value);
    }
    get items(): ZuiDateItemTemplate[] {
      return this._items$.value;
    }

    @Input()
    @zuiDefaultProp()
    label = 'Выберите дату';

    @Input()
    @zuiDefaultProp()
    currentIdx = 0;

    @Input()
    @zuiDefaultProp()
    size: ZuiInputSize = 'm';

    @Input()
    @zuiDefaultProp()
    outer = false;

    public open = false;

    get context(): ZuiDateButtonContext {
      return {
        injector: this.injector
      }
    }

    constructor(
      @Inject(ZUI_DATE_RIGHT_BUTTONS) public readonly leftButtons$: BehaviorSubject<ZuiDateButton[]>,
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
