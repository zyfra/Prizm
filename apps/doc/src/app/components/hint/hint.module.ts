import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PrizmButtonModule, PrizmHintModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HintComponent } from './hint.component';
import { PrizmHintWithTemplateExampleComponent } from './examples/with-template/hint-with-template-example.component';
import { PrizmHintWithComponentExampleComponent } from './examples/with-component/hint-with-component-example.component';
import { PrizmHintBaseExampleComponent } from './examples/base/hint-base-example.component';
import { PrizmHintSomeComponent } from './examples/with-component/some.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmHintModule,
    PrizmButtonModule,
    RouterModule.forChild(generateRoutes(HintComponent)),
  ],
  declarations: [
    PrizmHintWithTemplateExampleComponent,
    PrizmHintWithComponentExampleComponent,
    PrizmHintSomeComponent,
    PrizmHintBaseExampleComponent,
    HintComponent
  ],
  exports: [HintComponent],
})
export class HintModule {}
