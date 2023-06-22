import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmHeaderComponent } from './prizm-header.component';
import { PrizmHeaderDropdownComponent } from './components/prizm-header-dropdown/prizm-header-dropdown.component';
import { PrizmIconModule } from '../icon';
import { PrizmDropdownHostModule } from '../dropdowns/dropdown-host';
import { PrizmDataListModule } from '../data-list';
import { PrizmHeaderModuleBtnComponent } from './components/prizm-header-module-btn/prizm-header-module-btn.component';
import { PrizmButtonModule } from '../button';
import { PrizmHintModule } from '../../directives';

@NgModule({
  declarations: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent],
  imports: [
    CommonModule,
    PrizmIconModule,
    PrizmDropdownHostModule,
    PrizmDataListModule,
    PrizmButtonModule,
    PrizmHintModule,
  ],
  exports: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent],
})
export class PrizmHeaderModule {}
