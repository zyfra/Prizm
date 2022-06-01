import {NgModule} from '@angular/core';
import {ZuiWrapperDirective} from './wrapper.directive';

@NgModule({
    declarations: [ZuiWrapperDirective],
    exports: [ZuiWrapperDirective],
})
export class ZuiWrapperModule {}
