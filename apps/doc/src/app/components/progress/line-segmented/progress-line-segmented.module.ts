import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ProgressLineSegmentedComponent } from './progress-line-segmented.component';
import { PolymorphModule, PrizmProgressModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmProgressBaseExampleComponent } from './examples/base/progress-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmProgressModule,
    RouterModule.forChild(generateRoutes(ProgressLineSegmentedComponent)),
  ],
  declarations: [
    PrizmProgressBaseExampleComponent,
    ProgressLineSegmentedComponent
  ],
  exports: [ProgressLineSegmentedComponent],
})
export class ProgressLineSegmentedModule {}
