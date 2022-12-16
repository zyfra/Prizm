import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ColorsComponent } from "./colors.component";
import { Frame25826 } from "./components/frame25826/frame25826";
import { PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';


const routes: Routes = [
  {
    path: '',
    component: ColorsComponent
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
    ColorsComponent,
    Frame25826
  ],
  exports: [RouterModule]
})
export class ColorsModule {

}
