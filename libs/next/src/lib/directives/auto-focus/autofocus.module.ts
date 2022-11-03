import { NgModule } from '@angular/core';
import { PrizmAutoFocusDirective } from './autofocus.directive';

@NgModule({
    declarations: [PrizmAutoFocusDirective],
    exports: [PrizmAutoFocusDirective],
})
export class PrizmAutoFocusModule {}
