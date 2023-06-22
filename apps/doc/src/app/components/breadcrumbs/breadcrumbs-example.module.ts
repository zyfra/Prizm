import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsExampleComponent } from './breadcrumbs-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmBreadcrumbsModule } from '@prizm-ui/components';
import { BreadcrumbsExampleBasicComponent } from './examples/breadcrumbs-example-basic/breadcrumbs-example-basic.component';
import { BreadcrumbsExampleWithIconComponent } from './examples/breadcrumbs-example-with-icon/breadcrumbs-example-with-icon.component';

@NgModule({
  declarations: [
    BreadcrumbsExampleComponent,
    BreadcrumbsExampleBasicComponent,
    BreadcrumbsExampleWithIconComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(BreadcrumbsExampleComponent)),
    PrizmBreadcrumbsModule,
  ],
})
export class BreadcrumbsExampleModule {}
