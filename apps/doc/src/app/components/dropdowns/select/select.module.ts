import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './select.component';
import { PolymorphModule, ZuiIconModule, ZuiSelectModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ZuiSelectWithTemplateExampleComponent,
} from './examples/with-template/select-with-template-example.component';
import { ZuiSelectBaseExampleComponent } from './examples/base/select-base-example.component';
import { ZuiSelectWithSearchExampleComponent } from './examples/with-search/select-with-search-example.component';
import { ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiSelectWithObjectExampleComponent } from './examples/with-object/select-with-object-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiLetModule,
    ZuiSelectModule,
    ZuiIconModule,
    RouterModule.forChild(generateRoutes(SelectComponent)),
  ],
  declarations: [
    ZuiSelectBaseExampleComponent,
    ZuiSelectWithSearchExampleComponent,
    ZuiSelectWithObjectExampleComponent,
    ZuiSelectWithTemplateExampleComponent,
    SelectComponent
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
