import { NgModule } from '@angular/core';
import { PrizmBreadcrumbsComponent } from './breadcrumbs.component';
import { PrizmBreadcrumbDirective } from './breadcrumbs.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  declarations: [],
  imports: [PrizmBreadcrumbsComponent, PrizmBreadcrumbDirective],
  exports: [PrizmBreadcrumbsComponent, PrizmBreadcrumbDirective],
})
export class PrizmBreadcrumbsModule {}
