import { NgModule } from '@angular/core';
import { PrizmOverscrollDirective } from './overscroll.directive';

@NgModule({
    declarations: [PrizmOverscrollDirective],
    exports: [PrizmOverscrollDirective],
})
export class PrizmOverscrollModule {}
