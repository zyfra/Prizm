import {NgModule} from '@angular/core';

import {ZuiOverscrollDirective} from './overscroll.directive';

@NgModule({
    declarations: [ZuiOverscrollDirective],
    exports: [ZuiOverscrollDirective],
})
export class ZuiOverscrollModule {}
