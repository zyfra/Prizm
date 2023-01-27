import { Directive, Inject } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { PrizmFocusVisibleService } from './focus-visible.service';

/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Directive({
  selector: '[prizmFocusVisibleChange]',
  // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
  outputs: ['prizmFocusVisibleChange'],
  providers: [PrizmDestroyService, PrizmFocusVisibleService],
})
export class PrizmFocusVisibleDirective {
  constructor(
    @Inject(PrizmFocusVisibleService)
    readonly prizmFocusVisibleChange: Observable<boolean>
  ) {}
}
