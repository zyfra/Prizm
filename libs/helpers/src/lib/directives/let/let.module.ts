import {NgModule} from '@angular/core';
import {PzmLetDirective} from './let.directive';

@NgModule({
    declarations: [PzmLetDirective],
    exports: [PzmLetDirective],
})
export class PzmLetModule {}
