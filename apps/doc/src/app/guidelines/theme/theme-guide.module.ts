import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemegGuideComponent } from './theme-guide.component';
import { PrizmAddonDocModule } from '@prizm-ui/doc';

const routes: Routes = [
  {
    path: '',
    component: ThemegGuideComponent,
  },
];

@NgModule({
  bootstrap: [],
  imports: [CommonModule, PrizmAddonDocModule, RouterModule.forChild(routes)],
  declarations: [ThemegGuideComponent],
  exports: [RouterModule],
})
export class ThemeGuideModule {}
