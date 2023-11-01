import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemegGuideComponent } from './theme-guide.component';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { ThemeForDesignersComponent } from './components/theme-for-designers/theme-for-designers.component';
import { ThemeForDevelopersComponent } from './components/theme-for-developers/theme-for-developers.component';
import { PrizmCardModule, PrizmIndicatorModule, PrizmTableModule } from '@prizm-ui/components';

const routes: Routes = [
  {
    path: '',
    component: ThemegGuideComponent,
  },
];

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCardModule,
    PrizmIndicatorModule,
    PrizmTableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ThemegGuideComponent, ThemeForDesignersComponent, ThemeForDevelopersComponent],
  exports: [RouterModule],
})
export class ThemeGuideModule {}
