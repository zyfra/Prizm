import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Frame18 } from "./components/frame18/frame18";
import { Frame19 } from "./components/frame19/frame19";
import { Frame20 } from "./components/frame20/frame20";
import { Frame21 } from "./components/frame21/frame21";
import { Frame4 } from "./components/frame4/frame4";
import { GridComponent } from "./grid.component";


const routes: Routes = [
  {
    path: '',
    component: GridComponent
  }
];

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
],
  declarations: [
    GridComponent,
    Frame18,
    Frame19,
    Frame20,
    Frame21,
    Frame4,
  ],
  exports: [RouterModule]
})
export class GridModule {
  
}
