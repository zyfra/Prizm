import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';
import { PrizmButtonModule, PrizmWidgetModule } from '@prizm-ui/components';
import { PrizmThemeBaseExampleComponent } from './examples/base/base.component';
import { PrizmThemeLocalExampleComponent } from './examples/local/local.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    PrizmWidgetModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ThemeComponent)),
  ],
  declarations: [PrizmThemeBaseExampleComponent, PrizmThemeLocalExampleComponent, ThemeComponent],
  exports: [ThemeComponent],
})
export class ThemeModule {}
