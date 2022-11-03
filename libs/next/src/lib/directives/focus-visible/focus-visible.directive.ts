import { Directive, Inject } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable } from 'rxjs';
import { PzmFocusVisibleService } from './focus-visible.service';

/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Directive({
    selector: '[pzmFocusVisibleChange]',
    // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
    outputs: ['pzmFocusVisibleChange'],
    providers: [PzmDestroyService, PzmFocusVisibleService],
})
export class PzmFocusVisibleDirective {
    constructor(
        @Inject(PzmFocusVisibleService)
        readonly pzmFocusVisibleChange: Observable<boolean>,
    ) {}
}
