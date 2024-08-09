import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PrizmSplitButtonComponent,
  PrizmDataListModule,
  PrizmDropdownHostModule,
} from '@prizm-ui/components';
import { PrizmSplitButtonsWithDropdownExampleComponent } from './split-buttons-with-dropdown-example.component';

@NgModule({
  imports: [CommonModule, PrizmSplitButtonComponent, PrizmDropdownHostModule, PrizmDataListModule],
  declarations: [PrizmSplitButtonsWithDropdownExampleComponent],
  exports: [PrizmSplitButtonsWithDropdownExampleComponent],
})
export class SplitButtonsWithDropdownExampleModule {}
