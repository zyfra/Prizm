import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsExampleComponent } from './breadcrumbs-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmBreadcrumbsModule, PrizmDropdownHostModule } from '@prizm-ui/components';
import { BreadcrumbsExampleBasicComponent } from './examples/breadcrumbs-example-basic/breadcrumbs-example-basic.component';
import { BreadcrumbsExampleWithIconComponent } from './examples/breadcrumbs-example-with-icon/breadcrumbs-example-with-icon.component';
import { BreadcrumbsExampleProjectionComponent } from './examples/breadcrumbs-projection-basic/breadcrumbs-example-projection.component';

@NgModule({
  declarations: [
    BreadcrumbsExampleComponent,
    BreadcrumbsExampleBasicComponent,
    BreadcrumbsExampleWithIconComponent,
    BreadcrumbsExampleProjectionComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmDropdownHostModule,
    RouterModule.forChild(prizmDocGenerateRoutes(BreadcrumbsExampleComponent)),
    PrizmBreadcrumbsModule,
  ],
})
export class BreadcrumbsExampleModule {}
