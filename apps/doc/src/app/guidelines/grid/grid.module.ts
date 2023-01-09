import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Frame18Component } from './components/frame18/frame18.component';
import { Frame19Component } from './components/frame19/frame19.component';
import { Frame20Component } from './components/frame20/frame20.component';
import { Frame21Component } from './components/frame21/frame21.component';
import { Frame4Component } from './components/frame4/frame4.component';
import { GridComponent } from './grid.component';
import { PrizmAddonDocModule } from '@prizm-ui/doc';

const routes: Routes = [
  {
    path: '',
    component: GridComponent,
  },
];

@NgModule({
  bootstrap: [],
  imports: [CommonModule, PrizmAddonDocModule, RouterModule.forChild(routes)],
  declarations: [
    GridComponent,
    Frame18Component,
    Frame19Component,
    Frame20Component,
    Frame21Component,
    Frame4Component,
  ],
  exports: [RouterModule],
})
export class GridModule {}
