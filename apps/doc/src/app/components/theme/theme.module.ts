import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';
import { PzmThemeBaseExampleComponent } from './examples/base/theme-base-example.component';
import { PzmThemeModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmThemeModule,
    RouterModule.forChild(generateRoutes(ThemeComponent)),
  ],
  declarations: [
    PzmThemeBaseExampleComponent,
    ThemeComponent,
  ],
  exports: [ThemeComponent],
})
export class ThemeModule {}
