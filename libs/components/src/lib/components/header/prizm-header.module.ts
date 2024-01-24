import { NgModule } from '@angular/core';
import { PrizmHeaderComponent } from './prizm-header.component';
import { PrizmHeaderDropdownComponent } from './components/prizm-header-dropdown/prizm-header-dropdown.component';
import { PrizmHeaderModuleBtnComponent } from './components/prizm-header-module-btn/prizm-header-module-btn.component';

@NgModule({
  imports: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent],
  exports: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent],
})
export class PrizmHeaderModule {}
