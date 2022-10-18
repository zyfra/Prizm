import { NgModule } from '@angular/core';

import { ZuiElementReadyDirective } from './element-ready.directive';

@NgModule({
    declarations: [ZuiElementReadyDirective],
    exports: [ZuiElementReadyDirective],
})
export class ZuiElementReadyModule {}
