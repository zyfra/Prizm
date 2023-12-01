import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../../modules';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { prizmIsTextOverflow$ } from '../../../util/dom/is-textoverflow';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { AsyncPipe, NgIf } from '@angular/common';
import { PrizmCallFuncPipe, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmElementReadyDirective, PrizmHintDirective, PrizmLifecycleDirective } from '../../../directives';

@Component({
  selector: 'prizm-chips-item',
  templateUrl: './chips-item.component.html',
  styleUrls: ['./chips-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    PrizmCallFuncPipe,
    PrizmLifecycleDirective,
    PrizmElementReadyDirective,
    PrizmLetDirective,
    PrizmHintDirective,
  ],
})
export class PrizmChipsItemComponent extends PrizmAbstractTestId {
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get selected() {
    return this._selected;
  }
  set selected(value: BooleanInput) {
    this._selected = coerceBooleanProperty(value);
  }
  private _selected = false;

  @Input() deletable = true;
  @Output() deleted = new EventEmitter<MouseEvent>();
  @Input() hintCanShow = true;
  @Input() hintText!: string;
  @Input() hintDirection: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;

  override readonly testId_ = 'ui_chips_item';

  readonly prizmIsTextOverflow$ = (
    elem: HTMLElement,
    hintCanShow: boolean,
    forceShowHint: boolean
  ): Observable<boolean> => {
    return of(forceShowHint).pipe(
      switchMap(val => {
        if (val) {
          return of(true);
        }

        if (!hintCanShow) {
          return of(false);
        }

        return prizmIsTextOverflow$(elem);
      })
    );
  };
  constructor(public readonly el: ElementRef) {
    super();
  }
}
