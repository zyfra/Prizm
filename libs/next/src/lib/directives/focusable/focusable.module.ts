import {NgModule} from '@angular/core';

import {ZuiFocusableDirective} from './focusable.directive';

@NgModule({
    declarations: [ZuiFocusableDirective],
    exports: [ZuiFocusableDirective],
})
export class ZuiFocusableModule {}
