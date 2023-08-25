import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputInputTreeMultiSelectComponent } from './input-tree-multi-select.component';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmCheckboxModule,
  PrizmIconModule,
  PrizmInputTreeMultiSelectModule,
  PrizmMapperPipeModule,
  PrizmTreeModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTreeMultiSelectWithTemplateExampleComponent } from './examples/with-template/tree-multi-select-with-template-example.component';
import { PrizmInputTreeMultiSelectBaseExampleComponent } from './examples/base/tree-multi-select-base-example.component';
import { PrizmInputTreeMultiSelectWithSearchExampleComponent } from './examples/with-search/tree-multi-select-with-search-example.component';
import { PrizmInputTreeMultiSelectWithObjectExampleComponent } from './examples/with-object/tree-multi-select-with-object-example.component';
import { PrizmInputTreeMultiSelectValidatorsExampleComponent } from './examples/validators/tree-multi-select-validators-example.component';
import { PrizmInputTreeMultiSelectWithTreeExampleComponent } from './examples/with-tree/tree-multi-select-with-tree-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmTreeModule,
    PrizmCheckboxModule,
    PrizmMapperPipeModule,
    PrizmInputTreeMultiSelectModule,
    PrizmIconModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputInputTreeMultiSelectComponent)),
  ],
  declarations: [
    PrizmInputTreeMultiSelectWithTreeExampleComponent,
    PrizmInputTreeMultiSelectValidatorsExampleComponent,
    PrizmInputTreeMultiSelectBaseExampleComponent,
    PrizmInputTreeMultiSelectWithSearchExampleComponent,
    PrizmInputTreeMultiSelectWithTemplateExampleComponent,
    PrizmInputTreeMultiSelectWithObjectExampleComponent,
    InputInputTreeMultiSelectComponent,
  ],
  exports: [InputInputTreeMultiSelectComponent],
})
export class InputTreeMultiSelectModule {}
