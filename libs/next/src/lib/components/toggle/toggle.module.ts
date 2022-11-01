import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ZuiToggleComponent} from './toggle.component';
import {PzmLoaderModule} from "../loader";
import {PzmWrapperModule} from '../../directives/wrapper';
import {
  PolymorphModule,
  PzmCheckedModule,
  PzmFocusableModule,
  PzmFocusedModule,
  PzmPressedModule
} from "../../directives";
import {PzmFocusVisibleModule} from "../../directives/focus-visible";
import {PzmHoveredModule} from '../../directives/hovered';
import {PzmIconModule} from "../icon";

@NgModule({
  imports: [
    CommonModule,
    PzmFocusedModule,
    PzmFocusableModule,
    PzmFocusVisibleModule,
    PzmHoveredModule,
    PzmPressedModule,
    PzmCheckedModule,
    PzmWrapperModule,
    PzmLoaderModule,
    PolymorphModule,
    PzmIconModule
  ],
    declarations: [ZuiToggleComponent],
    exports: [ZuiToggleComponent],
})
export class ZuiToggleModule {}
