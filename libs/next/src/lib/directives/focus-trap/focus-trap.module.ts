import { NgModule } from '@angular/core';

import { ZuiFocusTrapDirective } from './focus-trap.directive';

@NgModule({
    declarations: [ZuiFocusTrapDirective],
    exports: [ZuiFocusTrapDirective],
})
export class ZuiFocusTrapModule {}
