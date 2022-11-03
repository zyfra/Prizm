import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { PzmIconModule } from '../icon';
import { PzmDropdownHostModule } from '../dropdowns/dropdown-host';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, PzmIconModule, PzmDropdownHostModule],
  exports: [BreadcrumbsComponent],
})
export class PzmBreadcrumbsModule {}
