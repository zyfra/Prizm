import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { License2 } from "./components/license2/license2";
import { LicenseComponent } from "./license.component";


const routes: Routes = [
  {
    path: '',
    component: LicenseComponent
  }
];

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
],
  declarations: [
    LicenseComponent,
    License2,
  ],
  exports: [RouterModule]
})
export class LicenseModule {
  
}
