import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { prizmObservable } from '@prizm-ui/core';
import { ReplaySubject, switchMap, timer } from 'rxjs';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputNativeValueNeedChange } from './model';

@Directive({
  selector: `input[prizmInputNativeValue]`,
  providers: [PrizmDestroyService],
  exportAs: 'prizmInputNativeValue',
})
export class PrizmInputNativeValueDirective<T = any> implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('prizmInputNativeValue')
  @prizmObservable()
  value: T;

  value$$ = new ReplaySubject<T>();

  @Output() prizmInputNativeValueChanged = new EventEmitter<T>();

  @Input()
  needChange: PrizmInputNativeValueNeedChange<T> = (currentValue: T, nativeValue: string) => {
    return currentValue !== nativeValue;
  };

  constructor(
    private readonly elementRef: ElementRef<HTMLInputElement>,
    private readonly destroy: PrizmDestroyService
  ) {}

  ngOnInit() {
    this.value$$
      .pipe(
        debounceTime(0),
        switchMap(value => {
          return timer(0, 50).pipe(
            filter(() =>
              this.needChange(this.value, this.elementRef.nativeElement.value, this.elementRef.nativeElement)
            ),
            tap(() => {
              this.elementRef.nativeElement.value = value?.toString() ?? '';
              this.prizmInputNativeValueChanged.next(this.elementRef.nativeElement.value as T);
            })
          );
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }
}
