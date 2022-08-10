import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorExampleComponent } from './paginator-example.component';
import { PaginatorBasicExampleComponent } from './examples/paginator-basic-example/paginator-basic-example.component';
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
import { PaginatorWithLabelsExampleComponent } from './examples/paginator-with-labels-example/paginator-with-labels-example.component';

@NgModule({
  declarations: [
    PaginatorExampleComponent,
    PaginatorBasicExampleComponent,
    PaginatorWithLabelsExampleComponent,
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
