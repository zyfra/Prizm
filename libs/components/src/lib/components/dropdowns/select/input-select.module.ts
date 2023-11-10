import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../../input/input-text/input-text.module';
import { PrizmSelectInputComponent } from './input-select.component';
import { PrizmSelectInputItemComponent } from './input-select-item.component';
import { PrizmInputSelectDataListDirective } from './input-select-data-list.directive';

/**
 * @deprecated
 * use standalone directives
 * */
@NgModule({
  imports: [
    PrizmSelectInputComponent,
    PrizmSelectInputItemComponent,
    PrizmInputSelectDataListDirective,
    PrizmInputTextModule,
  ],
  exports: [
    PrizmSelectInputComponent,
    PrizmSelectInputItemComponent,
    PrizmInputSelectDataListDirective,
    PrizmInputTextModule,
  ],
})
export class PrizmInputSelectModule {}
