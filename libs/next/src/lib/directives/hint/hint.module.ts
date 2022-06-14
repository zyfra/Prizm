import {NgModule} from '@angular/core';

import {ZuiHintDirective} from './hint.directive';

@NgModule({
    declarations: [ZuiHintDirective],
    exports: [ZuiHintDirective],
})
export class ZuiHintModule {}
