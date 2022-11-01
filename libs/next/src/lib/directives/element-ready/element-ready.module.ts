import { NgModule } from '@angular/core';

import { PzmElementReadyDirective } from './element-ready.directive';

@NgModule({
    declarations: [PzmElementReadyDirective],
    exports: [PzmElementReadyDirective],
})
export class PzmElementReadyModule {}
