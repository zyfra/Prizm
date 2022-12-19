import { isObservable, Observable, of } from 'rxjs';
import { delay, delayWhen, map, tap } from 'rxjs/operators';

export function prizmIsTextOverflow(element: HTMLElement): boolean {
  if (element) {
    return (element.offsetWidth < element.scrollWidth);
  }
  else {
    return false;
  }
}

export function prizmIsTextOverflow$(elem: HTMLElement, delayWhen: Observable<unknown>): Observable<boolean>
export function prizmIsTextOverflow$(elem: HTMLElement, delayTime?: number): Observable<boolean>
export function prizmIsTextOverflow$(elem: HTMLElement, delaySource: number | Observable<unknown> = 0): Observable<boolean> {
    return of(0).pipe(
      (
        (source$: Observable<number>) => {
          if (isObservable(delaySource))
            return source$.pipe(
              delayWhen(() => delaySource)
            )
          else {
            return source$.pipe(
              delay(delaySource ?? 0)
            )
          }
        }
      ),
      map(() => prizmIsTextOverflow(elem))
    )
}
