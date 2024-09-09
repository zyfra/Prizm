import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InvertedThemeComponent } from './inverted-theme.component';
import { PrizmButtonComponent, PrizmWidgetComponent } from '@prizm-ui/components';
import { PrizmThemeInvertedExampleComponent } from './examples/inverted/inverted.component';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmThemeBaseExampleComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmThemeModule,
    PrizmButtonComponent,
    PrizmWidgetComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(InvertedThemeComponent)),
  ],
  declarations: [PrizmThemeBaseExampleComponent, PrizmThemeInvertedExampleComponent, InvertedThemeComponent],
  exports: [InvertedThemeComponent],
})
export class InvertedThemeModule {}
