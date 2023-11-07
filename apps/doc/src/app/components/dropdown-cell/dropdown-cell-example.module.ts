import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmDropdownCellExampleComponent } from './dropdown-cell-example.component';
import { PrizmDropdownCellBaseExampleComponent } from './examples/base/dropdown-cell-base-example.component';
import {
  PrizmButtonModule,
  PrizmCheckboxModule,
  PrizmCounterModule,
  PrizmDropdownCellComponent,
  PrizmDropdownHostComponent,
} from '@prizm-ui/components';
import { PrizmDropdownCellWithInstrumnetsExampleComponent } from './examples/with-instrumnets/dropdown-cell-with-instruments-example.component';
import { PrizmDropdownCellChipsExampleComponent } from './examples/chips/dropdown-cell-chips-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCounterModule,
    PrizmButtonModule,
    PrizmDropdownCellComponent,
    PrizmCheckboxModule,
    PrizmCounterModule,
    PrizmDropdownHostComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmDropdownCellExampleComponent)),
  ],
  declarations: [
    PrizmDropdownCellExampleComponent,
    PrizmDropdownCellBaseExampleComponent,
    PrizmDropdownCellWithInstrumnetsExampleComponent,
    PrizmDropdownCellChipsExampleComponent,
  ],
  exports: [PrizmDropdownCellExampleComponent],
})
export class DropDownCellExampleModule {}
