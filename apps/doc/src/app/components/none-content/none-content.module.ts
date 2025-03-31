import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmNoneContentBaseExampleComponent } from './examples/base/none-content-base-example.component';
import { PrizmNoneContentExampleComponent } from './none-content-example.component';
import { PrizmButtonComponent, PrizmNoneContentComponent, PrizmWidgetComponent } from '@prizm-ui/components';
import { PrizmNoneContentCustomExampleComponent } from './examples/custom/none-content-custom-example.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmNoneContentExampleComponent)),
    PrizmNoneContentComponent,
    PrizmWidgetComponent,
    PrizmButtonComponent,
    PrizmIfLanguageDirective,
  ],
  declarations: [
    PrizmNoneContentBaseExampleComponent,
    PrizmNoneContentCustomExampleComponent,
    PrizmNoneContentExampleComponent,
  ],
  exports: [PrizmNoneContentExampleComponent],
})
export class NoneContentExampleModule {}
