import { Directive, inject } from '@angular/core';
import { INTERSECTION_ROOT_MARGIN, IntersectionObserverService } from '@ng-web-apis/intersection-observer';
import { PrizmTestIdDirective } from '@prizm-ui/helpers';

@Directive({
  selector: `thead[prizmThead]`,
  providers: [
    IntersectionObserverService,
    {
      provide: INTERSECTION_ROOT_MARGIN,
      useValue: `0px 10000px 10000px 10000px`,
    },
  ],
  hostDirectives: [
    {
      directive: PrizmTestIdDirective,
      inputs: ['testId'],
    },
  ],
})
export class PrizmTheadDirective {
  private readonly testIdDirective = inject(PrizmTestIdDirective);

  constructor() {
    this.testIdDirective.generateMainTestId = 'ui_table_head';
  }
}
