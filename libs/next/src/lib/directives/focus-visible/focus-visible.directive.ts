import { Directive, Inject } from '@angular/core';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable } from 'rxjs';
import { PrizmFocusVisibleService } from './focus-visible.service';

/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Directive({
    selector: '[pzmFocusVisibleChange]',
    // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
    outputs: ['pzmFocusVisibleChange'],
    providers: [PrizmDestroyService, PrizmFocusVisibleService],
})
export class PrizmFocusVisibleDirective {
    constructor(
        @Inject(PrizmFocusVisibleService)
        readonly pzmFocusVisibleChange: Observable<boolean>,
    ) {}
}
