import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorExampleComponent } from './paginator-example.component';
import { PaginatorExampleBaseComponent } from './examples/paginator-example-base/paginator-example-base.component';
import {
  generateRoutes,
  TuiDocCodeModule,
  TuiDocDemoModule,
  TuiDocDocumentationModule,
  TuiDocExampleModule,
  TuiDocPageModule,
} from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ZuiPaginatorModule } from '@digital-plant/zui-components';
import { PaginatorExampleWithLabelsComponent } from './examples/paginator-example-with-labels/paginator-example-with-labels.component';

@NgModule({
  declarations: [
    PaginatorExampleComponent,
    PaginatorExampleBaseComponent,
    PaginatorExampleWithLabelsComponent,
  ],
  imports: [
    CommonModule,
    TuiDocDocumentationModule,
    TuiDocDemoModule,
    TuiDocPageModule,
    TuiDocExampleModule,
    TuiDocCodeModule,
    RouterModule.forChild(generateRoutes(PaginatorExampleComponent)),
    ZuiPaginatorModule,
  ],
})
export class PaginatorExampleModule {}
