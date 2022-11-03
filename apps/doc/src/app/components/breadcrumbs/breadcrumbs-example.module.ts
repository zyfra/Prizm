import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsExampleComponent } from './breadcrumbs-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PrizmBreadcrumbsModule } from '@digital-plant/zui-components';
import { BreadcrumbsExampleBasicComponent } from './examples/breadcrumbs-example-basic/breadcrumbs-example-basic.component';
import { BreadcrumbsExampleWithIconComponent } from './examples/breadcrumbs-example-with-icon/breadcrumbs-example-with-icon.component';

@NgModule({
  declarations: [BreadcrumbsExampleComponent, BreadcrumbsExampleBasicComponent, BreadcrumbsExampleWithIconComponent],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(BreadcrumbsExampleComponent)),
    PrizmBreadcrumbsModule,
  ],
})
export class BreadcrumbsExampleModule {}
