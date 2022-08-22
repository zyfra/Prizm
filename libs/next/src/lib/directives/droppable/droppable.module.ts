import {NgModule} from '@angular/core';

import {ZuiDroppableDirective} from './droppable.directive';

@NgModule({
    declarations: [ZuiDroppableDirective],
    exports: [ZuiDroppableDirective],
})
export class ZuiDroppableModule {}
