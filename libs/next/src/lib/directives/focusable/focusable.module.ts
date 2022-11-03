import { NgModule } from '@angular/core';
import { PzmFocusableDirective } from './focusable.directive';

@NgModule({
    declarations: [PzmFocusableDirective],
    exports: [PzmFocusableDirective],
})
export class PzmFocusableModule {}
