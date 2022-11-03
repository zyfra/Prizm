import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomControlExampleComponent } from './zoom-control-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ZoomControlExampleBasicComponent } from './examples/zoom-control-example-basic/zoom-control-example-basic.component';
import {
  PzmButtonModule,
  PzmDataListModule,
  PzmDropdownControllerModule,
  PzmDropdownHostModule,
  PzmIconModule,
  PzmInputTextModule,
  PzmPanelModule,
  PzmSelectModule,
} from '@digital-plant/zui-components';

@NgModule({
  declarations: [ZoomControlExampleComponent, ZoomControlExampleBasicComponent],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmIconModule,
    RouterModule.forChild(generateRoutes(ZoomControlExampleComponent)),
    PzmPanelModule,
    PzmInputTextModule,
    PzmSelectModule,
    PzmDropdownHostModule,
    PzmDataListModule,
    PzmButtonModule,
    PzmDropdownControllerModule,
  ],
})
export class ZoomControlExampleModule {}
