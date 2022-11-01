import { isObservable, Observable, of } from 'rxjs';
import { delay, delayWhen, map } from 'rxjs/operators';

export function zuiIsTextOverflow(element: HTMLElement): boolean {
  if (element) {
    return (element.offsetWidth < element.scrollWidth);
  }
  else {
    return false;
  }
}

export function pzmIsTextOverflow$(elem: HTMLElement, delayWhen: Observable<unknown>): Observable<boolean>
export function pzmIsTextOverflow$(elem: HTMLElement, delayTime?: number): Observable<boolean>
export function pzmIsTextOverflow$(elem: HTMLElement, delaySource: number | Observable<unknown> = 0): Observable<boolean> {
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
      map(() => zuiIsTextOverflow(elem)),
    )
}
