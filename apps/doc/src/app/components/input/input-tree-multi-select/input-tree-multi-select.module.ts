import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputTreeMultiSelectComponent } from './input-tree-multi-select.component';
import {
  PolymorphModule,
  PrizmButtonComponent,
  PrizmDataListDirective,
  PrizmDataListWrapperComponent,
  PrizmHintOnOverflowDirective,
  PrizmInputCommonModule,
  PrizmInputTreeMultiSelectComponent,
  PrizmInputTreeSelectComponent,
  PrizmScrollbarModule,
  PrizmInputTreeMultiSelectCheckboxDirective,
  PrizmTreeMultiSelectItemComponent,
  PrizmTreeMultiSelectItemDirective,
  PrizmTreeSelectItemComponent,
  PrizmTreeMultiSelectModeDirective,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmHtmlRefDirective, PrizmLetDirective } from '@prizm-ui/helpers';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmTreeSelectProjectionExampleComponent } from './examples/projection/tree-select-projection-example.component';
import { PrizmTreeSelectTransformExampleComponent } from './examples/transform/tree-select-transform-example.component';
import { PrizmTreeSelectSearchExampleComponent } from './examples/search/tree-select-search-example.component';
import { PrizmTreeSelectI18nExampleComponent } from './examples/i18n/tree-select-i18n-example.component';
import { PrizmTreeSelectOnlyCurrentExampleComponent } from './examples/only-current/tree-select-only-current-example.component';

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
    PrizmButtonComponent,
    PrizmDataListDirective,
    RouterModule.forChild(prizmDocGenerateRoutes(InputTreeMultiSelectComponent)),
    PrizmIconsFullComponent,
    PrizmInputCommonModule,
    PrizmTreeMultiSelectItemDirective,
    PrizmTreeMultiSelectItemComponent,
    PrizmInputTreeMultiSelectComponent,
    PrizmTreeMultiSelectModeDirective,

    PrizmDataListWrapperComponent,
    PrizmHintOnOverflowDirective,
    PrizmHtmlRefDirective,
    PrizmTreeSelectItemComponent,
    PrizmInputTreeSelectComponent,
    PrizmInputTreeMultiSelectCheckboxDirective,
  ],
  declarations: [
    PrizmTreeSelectOnlyCurrentExampleComponent,
    PrizmTreeSelectI18nExampleComponent,
    PrizmTreeSelectTransformExampleComponent,
    PrizmTreeSelectSearchExampleComponent,
    PrizmTreeSelectProjectionExampleComponent,
    InputTreeMultiSelectComponent,
  ],
  exports: [InputTreeMultiSelectComponent],
})
export class InputTreeMultiSelectModule {}
