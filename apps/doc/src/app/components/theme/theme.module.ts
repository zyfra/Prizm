import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';
import { PrizmThemeBaseExampleComponent } from './examples/base/theme-base-example.component';
import { PrizmThemeModule } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmThemeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ThemeComponent)),
  ],
  declarations: [PrizmThemeBaseExampleComponent, ThemeComponent],
  exports: [ThemeComponent],
})
export class ThemeModule {}
