import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { MultiSelectComponent } from './multi-select.component';
import { PolymorphModule, ZuiIconModule, ZuiMultiSelectModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ZuiMultiSelectWithTemplateExampleComponent,
} from './examples/with-template/multi-select-with-template-example.component';
import { ZuiMultiSelectBaseExampleComponent } from './examples/base/multi-select-base-example.component';
import {
  ZuiMultiSelectWithSearchExampleComponent,
} from './examples/with-search/multi-select-with-search-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiMultiSelectModule,
    ZuiIconModule,
    RouterModule.forChild(generateRoutes(MultiSelectComponent)),
  ],
  declarations: [
    ZuiMultiSelectBaseExampleComponent,
    ZuiMultiSelectWithSearchExampleComponent,
    ZuiMultiSelectWithTemplateExampleComponent,
    MultiSelectComponent
  ],
  exports: [MultiSelectComponent],
})
export class MultiSelectModule {}
