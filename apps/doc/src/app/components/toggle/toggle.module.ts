import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle.component';
import { PolymorphModule, PrizmToggleModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmToggleBaseExampleComponent } from './examples/base/toggle-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmToggleModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ToggleComponent)),
  ],
  declarations: [PrizmToggleBaseExampleComponent, ToggleComponent],
  exports: [ToggleComponent],
})
export class ToggleModule {}
