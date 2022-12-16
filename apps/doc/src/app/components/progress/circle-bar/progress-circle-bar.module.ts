import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { ProgressCircleBarComponent } from './progress-circle-bar.component';
import { PolymorphModule, PrizmProgressModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmProgressCircleExampleComponent } from './examples/circle/progress-circle-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmProgressModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ProgressCircleBarComponent)),
  ],
  declarations: [PrizmProgressCircleExampleComponent, ProgressCircleBarComponent],
  exports: [ProgressCircleBarComponent],
})
export class ProgressCircleBarModule {}
