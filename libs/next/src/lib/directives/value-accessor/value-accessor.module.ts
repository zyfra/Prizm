import { NgModule } from '@angular/core';
import { ZuiValueAccessorDirective } from './value-accessor.directive';

@NgModule({
    declarations: [ZuiValueAccessorDirective],
    exports: [ZuiValueAccessorDirective],
})
export class ZuiValueAccessorModule {}
