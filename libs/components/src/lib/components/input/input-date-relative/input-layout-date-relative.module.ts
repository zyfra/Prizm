import { NgModule } from '@angular/core';
import { PrizmInputLayoutDateRelativeComponent } from './input-layout-date-relative.component';
import { PrizmInputTextModule } from '../input-text';
import { PrizmInputLayoutDateRelativeDirective } from './input-layout-date-relative.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [
    PrizmInputTextModule,
    PrizmInputLayoutDateRelativeComponent,
    PrizmInputLayoutDateRelativeDirective,
  ],
  exports: [
    PrizmInputLayoutDateRelativeComponent,
    PrizmInputLayoutDateRelativeDirective,
    PrizmInputTextModule,
  ],
})
export class PrizmInputLayoutDateRelativeModule {}
