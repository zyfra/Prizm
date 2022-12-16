import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Frame4 } from "./components/frame4/frame4";
import { Frame9 } from "./components/frame9/frame9";
import { TypographyComponent } from "./typography.component";
import { PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';


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
    PrizmAddonDocModule,
    RouterModule.forChild(routes)
],
  declarations: [
    TypographyComponent,
    Frame4,
    Frame9,
  ],
  exports: [RouterModule]
})
export class TypographyModule {

}
