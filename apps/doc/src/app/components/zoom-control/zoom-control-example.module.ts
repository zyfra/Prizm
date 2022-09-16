import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomControlExampleComponent } from './zoom-control-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ZoomControlExampleBasicComponent } from './examples/zoom-control-example-basic/zoom-control-example-basic.component';
import {
  ZuiButtonModule,
  ZuiDataListModule,
  ZuiDropdownControllerModule,
  ZuiDropdownHostModule,
  ZuiIconModule,
  ZuiInputTextModule,
  ZuiPanelModule,
  ZuiSelectModule,
} from '@digital-plant/zui-components';

@NgModule({
  declarations: [ZoomControlExampleComponent, ZoomControlExampleBasicComponent],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiIconModule,
    RouterModule.forChild(generateRoutes(ZoomControlExampleComponent)),
    ZuiPanelModule,
    ZuiInputTextModule,
    ZuiSelectModule,
    ZuiDropdownHostModule,
    ZuiDataListModule,
    ZuiButtonModule,
    ZuiDropdownControllerModule,
  ],
})
export class ZoomControlExampleModule {}
