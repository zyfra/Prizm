import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { MultiSelectComponent } from './multi-select.component';
import { PolymorphModule, PzmIconModule, PzmMultiSelectModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PzmMultiSelectWithTemplateExampleComponent,
} from './examples/with-template/multi-select-with-template-example.component';
import { PzmMultiSelectBaseExampleComponent } from './examples/base/multi-select-base-example.component';
import {
  PzmMultiSelectWithSearchExampleComponent,
} from './examples/with-search/multi-select-with-search-example.component';
import {
  PzmMultiSelectWithObjectExampleComponent,
} from './examples/with-object/multi-select-with-object-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmMultiSelectModule,
    PzmIconModule,
    RouterModule.forChild(generateRoutes(MultiSelectComponent)),
  ],
  declarations: [
    PzmMultiSelectBaseExampleComponent,
    PzmMultiSelectWithSearchExampleComponent,
    PzmMultiSelectWithTemplateExampleComponent,
    PzmMultiSelectWithObjectExampleComponent,
    MultiSelectComponent
  ],
  exports: [MultiSelectComponent],
})
export class MultiSelectModule {}
