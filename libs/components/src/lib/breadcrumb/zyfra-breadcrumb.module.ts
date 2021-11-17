import { NgModule } from '@angular/core';
import { ZyfraBreadcrumbComponent } from './zyfra-breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [ZyfraBreadcrumbComponent],
  imports: [BreadcrumbModule],
  exports: [ZyfraBreadcrumbComponent],
})
export class ZyfraBreadcrumbModule {}
