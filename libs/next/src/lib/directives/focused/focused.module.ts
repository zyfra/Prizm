import {NgModule} from '@angular/core';

import {ZuiFocusedDirective} from './focused.directive';

@NgModule({
    declarations: [ZuiFocusedDirective],
    exports: [ZuiFocusedDirective],
})
export class ZuiFocusedModule {}
