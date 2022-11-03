import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { PrizmIconModule } from '../icon';
import { PrizmDropdownHostModule } from '../dropdowns/dropdown-host';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, PrizmIconModule, PrizmDropdownHostModule],
  exports: [BreadcrumbsComponent],
})
export class PrizmBreadcrumbsModule {}
