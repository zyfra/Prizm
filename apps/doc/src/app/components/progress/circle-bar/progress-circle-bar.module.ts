import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ProgressCircleBarComponent } from './progress-circle-bar.component';
import { PolymorphModule, ZuiProgressModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiProgressCircleExampleComponent } from './examples/circle/progress-circle-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiProgressModule,
    RouterModule.forChild(generateRoutes(ProgressCircleBarComponent)),
  ],
  declarations: [
    ZuiProgressCircleExampleComponent,
    ProgressCircleBarComponent
  ],
  exports: [ProgressCircleBarComponent],
})
export class ProgressCircleBarModule {}
