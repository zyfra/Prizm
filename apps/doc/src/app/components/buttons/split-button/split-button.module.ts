import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SplitButtonComponent } from './split-button.component';
import { PrizmSplitButtonComponent } from '@prizm-ui/components';
import { PrizmSplitButtonsExampleComponent } from './examples/split/split-buttons-example.component';
import { SplitButtonsWithDropdownExampleModule } from './examples/with-dropdown/split-buttons-with-dropdown-example.module';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmSplitButtonComponent,
    SplitButtonsWithDropdownExampleModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SplitButtonComponent)),
    PrizmIfLanguageDirective,
  ],
  declarations: [PrizmSplitButtonsExampleComponent, SplitButtonComponent],
  exports: [SplitButtonComponent],
})
export class SplitButtonModule {}
