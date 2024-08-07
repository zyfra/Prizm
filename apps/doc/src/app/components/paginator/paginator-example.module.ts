import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorExampleComponent } from './paginator-example.component';
import { PaginatorBasicExampleComponent } from './examples/paginator-basic-example/paginator-basic-example.component';
import { PaginatorBasicLeftExampleComponent } from './examples/paginator-basic-left-example/paginator-basic-left-example.component';
import {
  PrizmAddonDocModule,
  PrizmDocCodeModule,
  PrizmDocDemoModule,
  PrizmDocDocumentationModule,
  PrizmDocExampleModule,
  prizmDocGenerateRoutes,
  PrizmDocPageModule,
} from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmPaginatorComponent } from '@prizm-ui/components';
import { PaginatorWithLabelsExampleComponent } from './examples/paginator-with-labels-example/paginator-with-labels-example.component';
import { PaginatorInfiniteExampleComponent } from './examples/paginator-infinite-example/paginator-infinite-example.component';
import { PaginatorOptionsExampleComponent } from './examples/paginator-options-example/paginator-options-example.component';
import { PaginatorI18nExampleComponent } from './examples/i18n/paginator-i18n-example.component';

@NgModule({
  declarations: [
    PaginatorExampleComponent,
    PaginatorOptionsExampleComponent,
    PaginatorBasicExampleComponent,
    PaginatorWithLabelsExampleComponent,
    PaginatorInfiniteExampleComponent,
    PaginatorBasicLeftExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmDocDocumentationModule,
    PrizmDocDemoModule,
    PrizmAddonDocModule,
    PrizmDocPageModule,
    PrizmDocExampleModule,
    PrizmDocCodeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PaginatorExampleComponent)),
    PrizmPaginatorComponent,
    PaginatorI18nExampleComponent,
  ],
})
export class PaginatorExampleModule {}
