import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PolymorpheusModule, ZuiButtonModule, ZuiHintModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HintComponent } from './hint.component';
import { ZuiHintWithTemplateExampleComponent } from './examples/with-template/hint-with-template-example.component';
import { ZuiHintBaseExampleComponent } from './examples/base/hint-base-example.component';
import { ZuiHintSomeComponent } from './examples/with-component/some.component';
import { ZuiHintWithComponentExampleComponent } from './examples/with-component/hint-with-component-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorpheusModule,
    ZuiHintModule,
    ZuiButtonModule,
    RouterModule.forChild(generateRoutes(HintComponent)),
  ],
  declarations: [
    ZuiHintWithTemplateExampleComponent,
    ZuiHintWithComponentExampleComponent,
    ZuiHintSomeComponent,
    ZuiHintBaseExampleComponent,
    HintComponent
  ],
  exports: [HintComponent],
})
export class HintModule {}
