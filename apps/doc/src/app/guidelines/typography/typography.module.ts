import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Frame4Component } from './components/frame4/frame4.component';
import { Frame9Component } from './components/frame9/frame9.component';
import { TypographyComponent } from './typography.component';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { PrizmTableModule } from '@prizm-ui/components';

const routes: Routes = [
  {
    path: '',
    component: TypographyComponent,
  },
];

@NgModule({
  bootstrap: [],
  imports: [CommonModule, PrizmAddonDocModule, RouterModule.forChild(routes), PrizmTableModule],
  declarations: [TypographyComponent, Frame4Component, Frame9Component],
  exports: [RouterModule],
})
export class TypographyModule {}
