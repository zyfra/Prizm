import { NgModule } from '@angular/core';
import { ZuiPreventDefaultDirective } from './prevent-default.directive';

@NgModule({
    declarations: [ZuiPreventDefaultDirective],
    exports: [ZuiPreventDefaultDirective],
})
export class ZuiPreventDefaultModule {}
