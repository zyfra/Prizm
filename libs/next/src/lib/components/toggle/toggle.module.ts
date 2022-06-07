import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  TuiCheckedModule,
  TuiFocusableModule,
  TuiFocusedModule,
  TuiFocusVisibleModule,
  TuiHoveredModule,
  TuiPressedModule,
} from '@taiga-ui/cdk';
import {TuiSvgModule, TuiWrapperModule} from '@taiga-ui/core';

import {ZuiToggleComponent} from './toggle.component';
import {ZuiLoaderModule} from "@digital-plant/zui-components";
import {ZuiWrapperModule} from '../../directives/wrapper';

@NgModule({
    imports: [
        CommonModule,
        TuiFocusedModule,
        TuiFocusableModule,
        TuiHoveredModule,
        TuiPressedModule,
        TuiFocusVisibleModule,
        TuiCheckedModule,
        ZuiWrapperModule,
        ZuiLoaderModule,
    ],
    declarations: [ZuiToggleComponent],
    exports: [ZuiToggleComponent],
})
export class ZuiToggleModule {}
