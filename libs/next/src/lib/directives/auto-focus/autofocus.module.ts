import { NgModule } from '@angular/core';
import { PzmAutoFocusDirective } from './autofocus.directive';

@NgModule({
    declarations: [PzmAutoFocusDirective],
    exports: [PzmAutoFocusDirective],
})
export class PzmAutoFocusModule {}
