import {NgModule} from '@angular/core';

import {PzmDroppableDirective} from './droppable.directive';

@NgModule({
    declarations: [PzmDroppableDirective],
    exports: [PzmDroppableDirective],
})
export class PzmDroppableModule {}
