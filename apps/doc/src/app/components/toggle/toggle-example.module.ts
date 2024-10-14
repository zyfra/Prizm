import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ToggleExampleComponent } from './toggle-example.component';
import { PolymorphOutletDirective, PrizmToggleComponent } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmToggleBaseExampleComponent } from './examples/base/toggle-base-example.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphOutletDirective,
    PrizmToggleComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ToggleExampleComponent)),
    PrizmIfLanguageDirective,
  ],
  declarations: [PrizmToggleBaseExampleComponent, ToggleExampleComponent],
  exports: [ToggleExampleComponent],
})
export class ToggleExampleModule {}
