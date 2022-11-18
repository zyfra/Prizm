import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle.component';
import { PolymorphModule, PrizmToggleModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmToggleBaseExampleComponent } from './examples/base/toggle-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmToggleModule,
    RouterModule.forChild(generateRoutes(ToggleComponent)),
  ],
  declarations: [
    PrizmToggleBaseExampleComponent,
    ToggleComponent
  ],
  exports: [ToggleComponent],
})
export class ToggleModule {}
