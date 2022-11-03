import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './select.component';
import { PolymorphModule, PzmIconModule, PzmSelectModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PzmSelectWithTemplateExampleComponent,
} from './examples/with-template/select-with-template-example.component';
import { PzmSelectBaseExampleComponent } from './examples/base/select-base-example.component';
import { PzmSelectWithSearchExampleComponent } from './examples/with-search/select-with-search-example.component';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmSelectWithObjectExampleComponent } from './examples/with-object/select-with-object-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmLetModule,
    PzmSelectModule,
    PzmIconModule,
    RouterModule.forChild(generateRoutes(SelectComponent)),
  ],
  declarations: [
    PzmSelectBaseExampleComponent,
    PzmSelectWithSearchExampleComponent,
    PzmSelectWithObjectExampleComponent,
    PzmSelectWithTemplateExampleComponent,
    SelectComponent
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
