import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';
import { PrizmThemeBaseExampleComponent } from './examples/base/theme-base-example.component';
import { PrizmThemeModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmThemeModule,
    RouterModule.forChild(generateRoutes(ThemeComponent)),
  ],
  declarations: [
    PrizmThemeBaseExampleComponent,
    ThemeComponent,
  ],
  exports: [ThemeComponent],
})
export class ThemeModule {}
