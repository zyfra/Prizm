import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { TuiDestroyService, tuiGetElementObscures } from '@taiga-ui/cdk';
import { Observable, ReplaySubject } from 'rxjs';
import { debounceTime, filter, switchMapTo, takeUntil } from 'rxjs/operators';

import { PRIZM_DOC_PAGE_LOADED } from '../../tokens/page-loaded';

@Directive({
  selector: `[prizmScrollIntoViewLink]`,
  providers: [TuiDestroyService],
})
export class TuiScrollIntoViewLinkDirective {
  @Input()
  set prizmScrollIntoViewLink(shallWe: boolean) {
    this.scroll$.next(shallWe);
  }

  private readonly scroll$ = new ReplaySubject<boolean>(1);

  constructor(
    @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(PRIZM_DOC_PAGE_LOADED)
    readonly readyToScroll$: Observable<boolean>
  ) {
    this.readyToScroll$
      .pipe(
        filter(Boolean),
        switchMapTo(this.scroll$),
        debounceTime(750),
        filter(shallWe => shallWe && !!tuiGetElementObscures(nativeElement)),
        takeUntil(destroy$)
      )
      .subscribe(() => {
        nativeElement.scrollIntoView();
      });
  }
}
