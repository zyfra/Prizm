import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmQueryBuilder } from '@prizm-ui/components';
import {
  PrizmAddonDocModule,
  PrizmDocCodeModule,
  PrizmDocDemoModule,
  PrizmDocDocumentationModule,
  PrizmDocExampleModule,
  prizmDocGenerateRoutes,
  PrizmDocPageModule,
} from '@prizm-ui/doc';
import { QueryBuilderBasicExampleComponent } from './examples/query-builder-basic-example/query-builder-basic-example.component';
import { QueryBuilderExampleComponent } from './query-builder-example.component';

@NgModule({
  declarations: [QueryBuilderExampleComponent],
  imports: [
    CommonModule,
    PrizmDocDocumentationModule,
    PrizmDocDemoModule,
    PrizmAddonDocModule,
    PrizmDocPageModule,
    PrizmDocExampleModule,
    PrizmDocCodeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(QueryBuilderExampleComponent)),

    PrizmQueryBuilder,

    // Examples
    QueryBuilderBasicExampleComponent,
  ],
})
export class QueryBuilderExampleModule {}
