import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputTreeMultiSelectComponent } from './input-tree-multi-select.component';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmDataListDirective,
  PrizmDataListWrapperComponent,
  PrizmHintOnOverflowDirective,
  PrizmInputCommonModule,
  PrizmInputTreeMultiSelectComponent,
  PrizmScrollbarModule,
  PrizmTreeMultiSelectItemComponent,
  PrizmTreeMultiSelectItemDirective,
  PrizmTreeSelectItemComponent,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmHtmlRefDirective, PrizmLetDirective } from '@prizm-ui/helpers';
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
    PrizmDataListDirective,
    RouterModule.forChild(prizmDocGenerateRoutes(InputTreeMultiSelectComponent)),
    PrizmIconsFullComponent,
    PrizmInputCommonModule,
    PrizmTreeMultiSelectItemDirective,
    PrizmTreeMultiSelectItemComponent,
    PrizmInputTreeMultiSelectComponent,

    PrizmDataListWrapperComponent,
    PrizmHintOnOverflowDirective,
    PrizmHtmlRefDirective,
    PrizmTreeSelectItemComponent,
  ],
  declarations: [
    PrizmTreeSelectI18nExampleComponent,
    PrizmTreeSelectTransformExampleComponent,
    PrizmTreeSelectSearchExampleComponent,
    PrizmTreeSelectProjectionExampleComponent,
    InputTreeMultiSelectComponent,
  ],
  exports: [InputTreeMultiSelectComponent],
})
export class InputTreeMultiSelectModule {}
