import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors.component';
import { Frame25826Component } from './components/frame25826/frame25826.component';
import { PrizmAddonDocModule } from '@prizm/doc-base';

const routes: Routes = [
  {
    path: '',
    component: ColorsComponent,
  },
];

@NgModule({
  bootstrap: [],
  imports: [CommonModule, PrizmAddonDocModule, RouterModule.forChild(routes)],
  declarations: [ColorsComponent, Frame25826Component],
  exports: [RouterModule],
})
export class ColorsModule {}
