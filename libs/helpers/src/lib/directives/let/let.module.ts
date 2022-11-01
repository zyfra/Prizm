import {NgModule} from '@angular/core';
import {ZuiLetDirective} from './let.directive';

@NgModule({
    declarations: [ZuiLetDirective],
    exports: [ZuiLetDirective],
})
export class PzmLetModule {}
