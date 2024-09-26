import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputTreeSelectComponent } from './input-tree-select.component';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmDataListDirective,
  PrizmDataListWrapperComponent,
  PrizmInputCommonModule,
  PrizmInputTreeSelectComponent,
  PrizmScrollbarModule,
  PrizmTreeSelectItemComponent,
  PrizmTreeSelectItemDirective,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmTreeSelectProjectionExampleComponent } from './examples/projection/tree-select-projection-example.component';
import { PrizmTreeSelectTransformExampleComponent } from './examples/transform/tree-select-transform-example.component';
import { PrizmTreeSelectSearchExampleComponent } from './examples/search/tree-select-search-example.component';
import { PrizmTreeSelectI18nExampleComponent } from './examples/i18n/tree-select-i18n-example.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmLetDirective,
    PrizmScrollbarModule,
    PrizmButtonModule,
    PrizmInputTreeSelectComponent,
    PrizmDataListDirective,
    RouterModule.forChild(prizmDocGenerateRoutes(InputTreeSelectComponent)),
    PrizmIconsFullComponent,
    PrizmInputCommonModule,
    PrizmTreeSelectItemDirective,
    PrizmTreeSelectItemComponent,
    PrizmDataListWrapperComponent,
  ],
  declarations: [
    PrizmTreeSelectI18nExampleComponent,
    PrizmTreeSelectTransformExampleComponent,
    PrizmTreeSelectSearchExampleComponent,
    PrizmTreeSelectProjectionExampleComponent,
    InputTreeSelectComponent,
  ],
  exports: [InputTreeSelectComponent],
})
export class InputTreeSelectModule {}
