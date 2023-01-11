import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SplitButtonComponent } from './split-button.component';
import { PrizmButtonModule } from '@prizm-ui/components';
import { PrizmSplitButtonsExampleComponent } from './examples/split/split-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SplitButtonComponent)),
  ],
  declarations: [PrizmSplitButtonsExampleComponent, SplitButtonComponent],
  exports: [SplitButtonComponent],
})
export class SplitButtonModule {}
