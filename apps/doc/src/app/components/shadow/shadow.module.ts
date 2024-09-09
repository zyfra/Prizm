import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ShadowComponent } from './shadow.component';
import { PrizmShadowBaseExampleComponent } from './examples/base/shadow-base-example.component';
import { PrizmShadowDirective } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PrizmShadowDirective,
    RouterModule.forChild(prizmDocGenerateRoutes(ShadowComponent)),
  ],
  declarations: [PrizmShadowBaseExampleComponent, ShadowComponent],
  exports: [ShadowComponent],
})
export class ShadowModule {}
