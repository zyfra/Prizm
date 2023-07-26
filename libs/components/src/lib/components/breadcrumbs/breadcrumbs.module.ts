import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmBreadcrumbsComponent } from './breadcrumbs.component';
import { PrizmIconModule } from '../icon';
import { PrizmDropdownHostModule } from '../dropdowns/dropdown-host';
import { PrizmBreadcrumbDirective } from './breadcrumbs.directive';

@NgModule({
  declarations: [PrizmBreadcrumbsComponent, PrizmBreadcrumbDirective],
  imports: [
    CommonModule,
    // TODO !ng16 change all icon module to svg module
    PrizmIconModule,
    PrizmDropdownHostModule,
  ],
  exports: [PrizmBreadcrumbsComponent, PrizmBreadcrumbDirective],
})
export class PrizmBreadcrumbsModule {}
