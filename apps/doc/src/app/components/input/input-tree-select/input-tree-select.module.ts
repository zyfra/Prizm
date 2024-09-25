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
import { PrizmTreeSelectBaseExampleComponent } from './examples/base/tree-select-base-example.component';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmTreeSelectProjectionExampleComponent } from './examples/projection/tree-select-projection-example.component';

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
    PrizmTreeSelectBaseExampleComponent,
    PrizmTreeSelectProjectionExampleComponent,
    InputTreeSelectComponent,
  ],
  exports: [InputTreeSelectComponent],
})
export class InputTreeSelectModule {}
