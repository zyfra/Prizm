import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputSelectComponent } from './input-select.component';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmIconModule,
  PrizmInputSelectModule,
  PrizmScrollbarModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmSelectWithTemplateExampleComponent } from './examples/with-template/select-with-template-example.component';
import { PrizmSelectBaseExampleComponent } from './examples/base/select-base-example.component';
import { PrizmSelectWithSearchExampleComponent } from './examples/with-search/select-with-search-example.component';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmSelectWithObjectExampleComponent } from './examples/with-object/select-with-object-example.component';
import { PrizmSelectWithBackendSearchExampleComponent } from './examples/with-backend-search/select-with-backend-search-example.component';
import { PrizmSelectFullWidthExampleComponent } from './examples/full-width/select-full-width-example.component';
import { PrizmSelectValidatorsExampleComponent } from './examples/validators/select-validators-example.component';
import { PrizmSelectStringifyExampleComponent } from './examples/stringify/select-stringify-example.component';
import { PrizmSelectWithTransformerExampleComponent } from './examples/with-transformer/select-with-transformer-example.component';
import { PrizmSelectWithListItemTemplateExampleComponent } from './examples/with-list-item-template/select-with-list-item-template-example.component';
import { PrizmSelectStringifyObservableExampleComponent } from './examples/stringify-observable/select-stringify-observable-example.component';
import { PrizmSelectAsyncExampleComponent } from './examples/async/select-async-example.component';
import { PrizmSelectVirtualScrollExampleComponent } from './examples/virtual-scroll/select-virtual-scroll-example.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmLetModule,
    PrizmScrollbarModule,
    PrizmButtonModule,
    PrizmIconModule,
    PrizmInputSelectModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputSelectComponent)),
  ],
  declarations: [
    PrizmSelectAsyncExampleComponent,
    PrizmSelectWithTransformerExampleComponent,
    PrizmSelectFullWidthExampleComponent,
    PrizmSelectValidatorsExampleComponent,
    PrizmSelectBaseExampleComponent,
    PrizmSelectWithSearchExampleComponent,
    PrizmSelectWithBackendSearchExampleComponent,
    PrizmSelectStringifyExampleComponent,
    PrizmSelectWithObjectExampleComponent,
    PrizmSelectWithTemplateExampleComponent,
    PrizmSelectWithListItemTemplateExampleComponent,
    InputSelectComponent,
    PrizmSelectStringifyObservableExampleComponent,
    PrizmSelectVirtualScrollExampleComponent,
  ],
  exports: [InputSelectComponent],
})
export class InputSelectModule {}
