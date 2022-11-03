import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PzmButtonModule, PzmTooltipModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipComponent } from './tooltip.component';
import {
  PzmTooltipWithTemplateExampleComponent,
} from './examples/with-template/tooltip-with-template-example.component';
import {
  PzmTooltipWithComponentExampleComponent,
} from './examples/with-component/tooltip-with-component-example.component';
import { PzmTooltipBaseExampleComponent } from './examples/base/tooltip-base-example.component';
import { PzmTooltipSomeComponent } from './examples/with-component/some.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmTooltipModule,
    PzmButtonModule,
    RouterModule.forChild(generateRoutes(TooltipComponent)),
  ],
  declarations: [
    PzmTooltipWithTemplateExampleComponent,
    PzmTooltipWithComponentExampleComponent,
    PzmTooltipSomeComponent,
    PzmTooltipBaseExampleComponent,
    TooltipComponent
  ],
  exports: [TooltipComponent],
})
export class TooltipModule {}
