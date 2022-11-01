import { NgModule } from '@angular/core';
import { PzmValueAccessorDirective } from './value-accessor.directive';

@NgModule({
    declarations: [PzmValueAccessorDirective],
    exports: [PzmValueAccessorDirective],
})
export class PzmValueAccessorModule {}
