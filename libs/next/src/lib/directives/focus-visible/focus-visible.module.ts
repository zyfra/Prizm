import {NgModule} from '@angular/core';
import {ZuiFocusVisibleDirective} from './focus-visible.directive';

@NgModule({
    declarations: [ZuiFocusVisibleDirective],
    exports: [ZuiFocusVisibleDirective],
})
export class PzmFocusVisibleModule {}
