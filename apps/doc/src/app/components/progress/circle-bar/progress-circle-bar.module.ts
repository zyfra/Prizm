import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ProgressCircleBarComponent } from './progress-circle-bar.component';
import { PolymorphModule, PrizmProgressModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmProgressCircleExampleComponent } from './examples/circle/progress-circle-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmProgressModule,
    RouterModule.forChild(generateRoutes(ProgressCircleBarComponent)),
  ],
  declarations: [
    PrizmProgressCircleExampleComponent,
    ProgressCircleBarComponent
  ],
  exports: [ProgressCircleBarComponent],
})
export class ProgressCircleBarModule {}
