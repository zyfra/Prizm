import {NgModule} from '@angular/core';

import {PzmLifecycleDirective} from './lifecycle.directive';

@NgModule({
    declarations: [PzmLifecycleDirective],
    exports: [PzmLifecycleDirective],
})
export class PzmLifecycleModule {}
