import { NgModule } from '@angular/core';
import { PrizmFocusableDirective } from './focusable.directive';

@NgModule({
    declarations: [PrizmFocusableDirective],
    exports: [PrizmFocusableDirective],
})
export class PrizmFocusableModule {}
