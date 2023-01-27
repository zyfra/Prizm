import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmButtonModule, PrizmDataListModule, PrizmDropdownHostModule } from '@prizm-ui/components';
import { PrizmSplitButtonsWithDropdownExampleComponent } from './split-buttons-with-dropdown-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmButtonModule,
    PrizmDropdownHostModule,
    PrizmDataListModule,
  ],
  declarations: [
    PrizmSplitButtonsWithDropdownExampleComponent
  ],
  exports: [PrizmSplitButtonsWithDropdownExampleComponent],
})
export class SplitButtonsWithDropdownExampleModule {}
