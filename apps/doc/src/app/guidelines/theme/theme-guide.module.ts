import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemegGuideComponent } from './theme-guide.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { ThemeForDesignersComponent } from './components/theme-for-designers/theme-for-designers.component';
import { ThemeForDevelopersComponent } from './components/theme-for-developers/theme-for-developers.component';
import { PrizmCardComponent, PrizmIndicatorComponent, PrizmTableModule } from '@prizm-ui/components';

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmTableModule,
    PrizmIndicatorComponent,
    PrizmCardComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ThemegGuideComponent)),
  ],
  declarations: [ThemegGuideComponent, ThemeForDesignersComponent, ThemeForDevelopersComponent],
  exports: [RouterModule],
})
export class ThemeGuideModule {}
