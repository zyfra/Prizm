import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { ZuiIconModule } from '../icon';
import { ZuiDropdownHostModule } from '../dropdown-host';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, ZuiIconModule, ZuiDropdownHostModule],
  exports: [BreadcrumbsComponent],
})
export class ZuiBreadcrumbsModule {}
