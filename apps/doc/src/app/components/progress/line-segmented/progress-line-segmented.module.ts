import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ProgressLineSegmentedComponent } from './progress-line-segmented.component';
import { PolymorphModule, PzmProgressModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiProgressBaseExampleComponent } from './examples/base/progress-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmProgressModule,
    RouterModule.forChild(generateRoutes(ProgressLineSegmentedComponent)),
  ],
  declarations: [
    ZuiProgressBaseExampleComponent,
    ProgressLineSegmentedComponent
  ],
  exports: [ProgressLineSegmentedComponent],
})
export class ProgressLineSegmentedModule {}
