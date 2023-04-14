import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { License2Component } from './components/license2/license2.component';
import { LicenseComponent } from './license.component';

const routes: Routes = [
  {
    path: '',
    component: LicenseComponent,
  },
];

@NgModule({
  bootstrap: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LicenseComponent, License2Component],
  exports: [RouterModule],
})
export class LicenseModule {}
