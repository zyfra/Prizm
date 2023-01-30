import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { EMPTY, from, interval, Observable, of } from 'rxjs';
import { map, switchMap, take, takeWhile, tap } from 'rxjs/operators';

export class PrizmFakeFileUploadInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const total = 10000;
    let wasResponse = false;
    if (req.url.includes('fakeFileUpload')) {
      return interval(50).pipe(
        takeWhile(() => wasResponse === false),
        map(interval => {
          if (interval <= 50) {
            const upload: HttpProgressEvent = {
              type: HttpEventType.UploadProgress,
              total: 10000,
              loaded: interval * 2 * 100,
            };

            if (Math.random() < 0.008 && interval > 1) {
              return new HttpResponse({ status: 400, body: { fake: true } });
            } else {
              return upload;
            }
          } else {
            return new HttpResponse({ status: 200, body: { fake: true } });
          }
        }),
        tap(event => {
          if (event instanceof HttpResponse) {
            wasResponse = true;
          }
        })
      );
    } else {
      return next.handle(req);
    }
  }
}

export const fakeFileUploadProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: PrizmFakeFileUploadInterceptor,
  multi: true,
};
