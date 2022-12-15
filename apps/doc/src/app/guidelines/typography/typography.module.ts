import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TypographyComponent } from "./typography.component";


const routes: Routes = [
  {
    path: '',
    component: TypographyComponent
  }
];

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
],
  declarations: [

  ],
  exports: [RouterModule]
})
export class TypographyModule {
  
}
