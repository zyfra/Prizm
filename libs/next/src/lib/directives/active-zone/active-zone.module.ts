import {NgModule} from '@angular/core';

import {ZuiActiveZoneDirective} from './active-zone.directive';

@NgModule({
    declarations: [ZuiActiveZoneDirective],
    exports: [ZuiActiveZoneDirective],
})
export class ZuiActiveZoneModule {}
