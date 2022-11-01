import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ProgressCircleBarComponent } from './progress-circle-bar.component';
import { PolymorphModule, PzmProgressModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmProgressCircleExampleComponent } from './examples/circle/progress-circle-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmProgressModule,
    RouterModule.forChild(generateRoutes(ProgressCircleBarComponent)),
  ],
  declarations: [
    PzmProgressCircleExampleComponent,
    ProgressCircleBarComponent
  ],
  exports: [ProgressCircleBarComponent],
})
export class ProgressCircleBarModule {}
