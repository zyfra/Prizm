import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorExampleComponent } from './paginator-example.component';
import { PaginatorBasicExampleComponent } from './examples/paginator-basic-example/paginator-basic-example.component';
import {
  prizmDocGenerateRoutes,
  PrizmDocCodeModule,
  PrizmDocDemoModule,
  PrizmDocDocumentationModule,
  PrizmDocExampleModule,
  PrizmDocPageModule,
} from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PrizmPaginatorModule } from '@prizm-ui/components';
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
    PrizmDocDocumentationModule,
    PrizmDocDemoModule,
    PrizmDocPageModule,
    PrizmDocExampleModule,
    PrizmDocCodeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PaginatorExampleComponent)),
    PrizmPaginatorModule,
  ],
})
export class PaginatorExampleModule {}
