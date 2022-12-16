import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { GenerateExampleComponent } from './generate-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(GenerateExampleComponent)),
  ],
  declarations: [
    GenerateExampleComponent
  ],
  exports: [GenerateExampleComponent],
})
export class GenerateExampleModule {}
