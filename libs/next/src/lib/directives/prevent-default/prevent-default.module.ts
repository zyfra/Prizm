import { NgModule } from '@angular/core';
import { PrizmPreventDefaultDirective } from './prevent-default.directive';

@NgModule({
    declarations: [PrizmPreventDefaultDirective],
    exports: [PrizmPreventDefaultDirective],
})
export class PrizmPreventDefaultModule {}
