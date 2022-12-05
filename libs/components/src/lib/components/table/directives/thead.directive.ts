import { Directive } from '@angular/core';
import { INTERSECTION_ROOT_MARGIN, IntersectionObserverService } from '@ng-web-apis/intersection-observer';

@Directive({
  selector: `thead[prizmThead]`,
  providers: [
    IntersectionObserverService,
    {
      provide: INTERSECTION_ROOT_MARGIN,
      useValue: `0px 10000px 10000px 10000px`,
    },
  ],
})
export class PrizmTheadDirective {}
