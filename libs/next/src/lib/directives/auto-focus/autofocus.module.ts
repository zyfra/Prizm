import { NgModule } from '@angular/core';
import { ZuiAutoFocusDirective } from './autofocus.directive';

@NgModule({
    declarations: [ZuiAutoFocusDirective],
    exports: [ZuiAutoFocusDirective],
})
export class ZuiAutoFocusModule {}
