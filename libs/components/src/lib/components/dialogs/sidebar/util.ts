import { defer, Observable, of } from 'rxjs';
import { filterTruthy } from '@prizm-ui/helpers';
import { tap } from 'rxjs/operators';

export function invokeIfCanCloseSidebar(
  cb: () => void,
  canClose?: () => Observable<boolean>
): Observable<any> {
  return defer(() => (canClose && typeof canClose === 'function' ? canClose() : of(true))).pipe(
    filterTruthy(),
    tap(() => cb())
  );
}
