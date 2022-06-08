import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ZuiToggleComponent} from './toggle.component';
import {ZuiLoaderModule} from "../loader";
import {ZuiWrapperModule} from '../../directives/wrapper';
import {
  PolymorpheusModule,
  ZuiCheckedModule,
  ZuiFocusableModule,
  ZuiFocusedModule,
  ZuiPressedModule
} from "../../directives";
import {ZuiFocusVisibleModule} from "../../directives/focus-visible";
import {ZuiHoveredModule} from '../../directives/hovered';
import {ZuiIconModule} from "../icon";

@NgModule({
  imports: [
    CommonModule,
    ZuiFocusedModule,
    ZuiFocusableModule,
    ZuiFocusVisibleModule,
    ZuiHoveredModule,
    ZuiPressedModule,
    ZuiCheckedModule,
    ZuiWrapperModule,
    ZuiLoaderModule,
    PolymorpheusModule,
    ZuiIconModule
  ],
    declarations: [ZuiToggleComponent],
    exports: [ZuiToggleComponent],
})
export class ZuiToggleModule {}
