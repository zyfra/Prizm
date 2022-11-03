import { NgModule } from '@angular/core';

import { PzmFocusTrapDirective } from './focus-trap.directive';

@NgModule({
    declarations: [PzmFocusTrapDirective],
    exports: [PzmFocusTrapDirective],
})
export class PzmFocusTrapModule {}
