import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';
import { ZuiThemeBaseExampleComponent } from './examples/base/theme-base-example.component';
import { ZuiThemeModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiThemeModule,
    RouterModule.forChild(generateRoutes(ThemeComponent)),
  ],
  declarations: [
    ZuiThemeBaseExampleComponent,
    ThemeComponent,
  ],
  exports: [ThemeComponent],
})
export class ThemeModule {}
