import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PrizmButtonModule, PrizmHintModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HintExampleComponent } from './hint-example.component';
import { PrizmHintWithTemplateExampleComponent } from './examples/with-template/hint-with-template-example.component';
import { PrizmHintWithComponentExampleComponent } from './examples/with-component/hint-with-component-example.component';
import { PrizmHintBaseExampleComponent } from './examples/base/hint-base-example.component';
import { PrizmHintSomeComponent } from './examples/with-component/some.component';
import { PrizmHintChangeThemeExampleComponent } from './examples/change-theme/hint-change-theme-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmHintModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(HintExampleComponent)),
  ],
  declarations: [
    PrizmHintWithTemplateExampleComponent,
    PrizmHintWithComponentExampleComponent,
    PrizmHintSomeComponent,
    PrizmHintBaseExampleComponent,
    HintExampleComponent,
    PrizmHintChangeThemeExampleComponent,
  ],
  exports: [HintExampleComponent],
})
export class HintExampleModule {}
