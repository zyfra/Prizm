import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { AstComponent } from './ast.component';
import { PrizmButtonModule } from '@prizm-ui/components';
import { PrizmAstBaseExampleComponent } from './examples/button/button.component';
import { PrizmAstAccordionExampleComponent } from './examples/accordion/accordion.component';
import { PrizmAstBreadcrumbExampleComponent } from './examples/breadcrumb/breadcrumb.component';
import { PrizmAstCheckboxExampleComponent } from './examples/checkbox/checkbox.component';
import { PrizmAstChipsExampleComponent } from './examples/chips/chips.component';
import { PrizmAstDropdownExampleComponent } from './examples/dropdown/dropdown.component';
import { PrizmAstMultiSelectExampleComponent } from './examples/multi-select/multi-select.component';
import { PrizmAstInputNumberExampleComponent } from './examples/input-number/input-number.component';
import { PrizmAstRadioExampleComponent } from './examples/radio/radio.component';
import { PrizmAstInputSwitchExampleComponent } from './examples/input-switch/input-switch.component';
import { PrizmAstSplitButtonExampleComponent } from './examples/split-button/split-button.component';
import { PrizmAstToggleButtonExampleComponent } from './examples/toggle-button/toggle-button.component';
import { PrizmAstSpinnerExampleComponent } from './examples/spinner/spinner.component';
import { PrizmAstTooltipExampleComponent } from './examples/tooltip/tooltip.component';
import { PrizmAstTabsExampleComponent } from './examples/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(AstComponent)),
  ],
  declarations: [
    PrizmAstAccordionExampleComponent,
    PrizmAstChipsExampleComponent,
    PrizmAstCheckboxExampleComponent,
    PrizmAstMultiSelectExampleComponent,
    PrizmAstInputNumberExampleComponent,
    PrizmAstTooltipExampleComponent,
    PrizmAstInputSwitchExampleComponent,
    PrizmAstToggleButtonExampleComponent,
    PrizmAstSpinnerExampleComponent,
    PrizmAstTabsExampleComponent,
    PrizmAstSplitButtonExampleComponent,
    PrizmAstRadioExampleComponent,
    PrizmAstDropdownExampleComponent,
    PrizmAstBreadcrumbExampleComponent,
    PrizmAstBaseExampleComponent,
    AstComponent,
  ],
  exports: [AstComponent],
})
export class AstModule {}
