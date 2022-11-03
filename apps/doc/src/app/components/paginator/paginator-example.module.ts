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
import { PrizmPaginatorModule } from '@digital-plant/zui-components';
import { PaginatorWithLabelsExampleComponent } from './examples/paginator-with-labels-example/paginator-with-labels-example.component';
import { PaginatorInfiniteExampleComponent } from './examples/paginator-infinite-example/paginator-infinite-example.component';

@NgModule({
  declarations: [
    PaginatorExampleComponent,
    PaginatorBasicExampleComponent,
    PaginatorWithLabelsExampleComponent,
    PaginatorInfiniteExampleComponent,
  ],
  imports: [
    CommonModule,
    TuiDocDocumentationModule,
    TuiDocDemoModule,
    TuiDocPageModule,
    TuiDocExampleModule,
    TuiDocCodeModule,
    RouterModule.forChild(generateRoutes(PaginatorExampleComponent)),
    PrizmPaginatorModule,
  ],
})
export class PaginatorExampleModule {}
