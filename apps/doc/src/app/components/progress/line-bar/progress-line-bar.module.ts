import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ProgressLineBarComponent } from './progress-line-bar.component';
import { PolymorphModule, PrizmProgressModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmProgressBaseExampleComponent } from './examples/base/progress-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmProgressModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ProgressLineBarComponent)),
  ],
  declarations: [PrizmProgressBaseExampleComponent, ProgressLineBarComponent],
  exports: [ProgressLineBarComponent],
})
export class ProgressLineBarModule {}
