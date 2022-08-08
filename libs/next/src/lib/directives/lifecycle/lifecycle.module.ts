import {NgModule} from '@angular/core';

import {ZuiLifecycleDirective} from './lifecycle.directive';

@NgModule({
    declarations: [ZuiLifecycleDirective],
    exports: [ZuiLifecycleDirective],
})
export class ZuiLifecycleModule {}
