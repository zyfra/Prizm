import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { MultiSelectComponent } from './multi-select.component';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmIconModule,
  PrizmMultiSelectModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmMultiSelectWithTemplateExampleComponent } from './examples/with-template/multi-select-with-template-example.component';
import { PrizmMultiSelectBaseExampleComponent } from './examples/base/multi-select-base-example.component';
import { PrizmMultiSelectWithSearchExampleComponent } from './examples/with-search/multi-select-with-search-example.component';
import { PrizmMultiSelectWithObjectExampleComponent } from './examples/with-object/multi-select-with-object-example.component';
import { PrizmMultiSelectValidatorsExampleComponent } from './examples/validators/multi-select-validators-example.component';
import { PrizmInputMultiSelectBaseExampleComponent } from './examples/input-multi-select/input-multi-select-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmMultiSelectModule,
    PrizmIconModule,
    RouterModule.forChild(prizmDocGenerateRoutes(MultiSelectComponent)),
  ],
  declarations: [
    PrizmInputMultiSelectBaseExampleComponent,
    PrizmMultiSelectValidatorsExampleComponent,
    PrizmMultiSelectBaseExampleComponent,
    PrizmMultiSelectWithSearchExampleComponent,
    PrizmMultiSelectWithTemplateExampleComponent,
    PrizmMultiSelectWithObjectExampleComponent,
    MultiSelectComponent,
  ],
  exports: [MultiSelectComponent],
})
export class MultiSelectModule {}
