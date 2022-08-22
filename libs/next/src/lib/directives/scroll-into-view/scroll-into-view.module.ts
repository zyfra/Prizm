import {NgModule} from '@angular/core';

import {ZuiScrollIntoViewDirective} from './scroll-into-view.directive';

@NgModule({
    declarations: [ZuiScrollIntoViewDirective],
    exports: [ZuiScrollIntoViewDirective],
})
export class ZuiScrollIntoViewModule {}
