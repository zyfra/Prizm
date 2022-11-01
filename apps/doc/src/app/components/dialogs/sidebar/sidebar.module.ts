import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PzmButtonModule,
  PzmRadioButtonModule,
  PzmSidebarModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import { PzmSidebarServiceExampleComponent } from './examples/base/base.component';
import { PzmSidebarTopBottomExampleComponent } from './examples/top-bottom/top-bottom.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmButtonModule,
    PzmSidebarModule,
    PzmRadioButtonModule,
    RouterModule.forChild(generateRoutes(SidebarComponent)),
  ],
  declarations: [
    PzmSidebarServiceExampleComponent,
    PzmSidebarTopBottomExampleComponent,
    SidebarComponent
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
