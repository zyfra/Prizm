import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmInputSelectModule, PrizmInputTextModule } from '@prizm-ui/components';
import {
  PrizmAddonDocModule,
  PrizmDocCodeModule,
  PrizmDocDemoModule,
  PrizmDocDocumentationModule,
  PrizmDocExampleModule,
  prizmDocGenerateRoutes,
  PrizmDocPageModule,
} from '@prizm-ui/doc';
import { QueryBuilderBasicExample } from './examples/query-builder-basic-example/query-builder-basic-example.component';
import { QueryBuilderExampleComponent } from './query-builder-example.component';
import { QueryBuilderScrollableExample } from './examples/query-builder-scrollable-example/query-builder-scrollable-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmQueryBuilder } from '@prizm-ui/addon-query-builder';

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
    ReactiveFormsModule,
    PrizmInputTextModule,
    PrizmInputSelectModule,

    // Examples
    QueryBuilderBasicExample,
    QueryBuilderScrollableExample,
  ],
})
export class QueryBuilderExampleModule {}
