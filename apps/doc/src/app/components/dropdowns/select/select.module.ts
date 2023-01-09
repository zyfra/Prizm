import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './select.component';
import { PolymorphModule, PrizmIconModule, PrizmSelectModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmSelectWithTemplateExampleComponent } from './examples/with-template/select-with-template-example.component';
import { PrizmSelectBaseExampleComponent } from './examples/base/select-base-example.component';
import { PrizmSelectWithSearchExampleComponent } from './examples/with-search/select-with-search-example.component';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmSelectWithObjectExampleComponent } from './examples/with-object/select-with-object-example.component';
import {
  PrizmSelectWithBackendSearchExampleComponent
} from './examples/with-backend-search/select-with-backend-search-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmLetModule,
    PrizmSelectModule,
    PrizmIconModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SelectComponent)),
  ],
  declarations: [
    PrizmSelectBaseExampleComponent,
    PrizmSelectWithSearchExampleComponent,
    PrizmSelectWithBackendSearchExampleComponent,
    PrizmSelectWithObjectExampleComponent,
    PrizmSelectWithTemplateExampleComponent,
    SelectComponent,
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
