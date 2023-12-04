import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorsComponent } from './colors.component';
import { ThemeColorsComponent } from './components/theme-colors/theme-colors.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PaletteComponent } from './components/palette/palette.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ColorsComponent)),
  ],
  declarations: [ColorsComponent, ThemeColorsComponent, PaletteComponent],
})
export class ColorsModule {}
