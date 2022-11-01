import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { PzmIconModule } from '../icon';
import { ZuiDropdownHostModule } from '../dropdowns/dropdown-host';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, PzmIconModule, ZuiDropdownHostModule],
  exports: [BreadcrumbsComponent],
})
export class PzmBreadcrumbsModule {}
