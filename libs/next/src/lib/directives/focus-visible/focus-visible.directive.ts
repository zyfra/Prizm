import {Directive, Inject} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import {Observable} from 'rxjs';
import {ZuiFocusVisibleService} from "./focus-visible.service";

/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Directive({
    selector: '[zuiFocusVisibleChange]',
    // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
    outputs: ['zuiFocusVisibleChange'],
    providers: [ZuiDestroyService, ZuiFocusVisibleService],
})
export class ZuiFocusVisibleDirective {
    constructor(
        @Inject(ZuiFocusVisibleService)
        readonly zuiFocusVisibleChange: Observable<boolean>,
    ) {}
}
