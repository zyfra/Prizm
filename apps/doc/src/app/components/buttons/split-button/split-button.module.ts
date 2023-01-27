import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SplitButtonComponent } from './split-button.component';
import { PrizmButtonModule } from '@prizm-ui/components';
import { PrizmSplitButtonsExampleComponent } from './examples/split/split-buttons-example.component';
import {
  SplitButtonsWithDropdownExampleModule,
} from './examples/with-dropdown/split-buttons-with-dropdown-example.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    SplitButtonsWithDropdownExampleModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SplitButtonComponent)),
  ],
  declarations: [PrizmSplitButtonsExampleComponent, SplitButtonComponent],
  exports: [SplitButtonComponent],
})
export class SplitButtonModule {}
