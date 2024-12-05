import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../../input/input-text/input-text.module';
import { PrizmComboboxComponent } from './combobox.component';
import { PrizmComboboxItemComponent } from './combobox-item.component';
import { PrizmComboboxDataListDirective } from './combobox-data-list.directive';
import { PrizmComboboxSourceItemsDirective } from './combobox-source-items.directive';

/**
 * use standalone directives
 * */
@NgModule({
  imports: [
    PrizmComboboxComponent,
    PrizmComboboxItemComponent,
    PrizmComboboxSourceItemsDirective,
    PrizmComboboxDataListDirective,
    PrizmInputTextModule,
  ],
  exports: [
    PrizmComboboxComponent,
    PrizmComboboxItemComponent,
    PrizmComboboxSourceItemsDirective,
    PrizmComboboxDataListDirective,
    PrizmInputTextModule,
  ],
})
export class PrizmComboboxModule {}
