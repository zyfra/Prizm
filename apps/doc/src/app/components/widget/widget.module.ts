import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { ZuiWidgetBaseExampleComponent } from './examples/base/widget-base-example.component';
import { ZuiWidgetModule } from '@digital-plant/zui-components';
import { ZuiWidgetWithButtonsExampleComponent } from './examples/with-buttons/widget-with-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiWidgetModule,
    RouterModule.forChild(generateRoutes(WidgetComponent)),
  ],
  declarations: [
    ZuiWidgetBaseExampleComponent,
    ZuiWidgetWithButtonsExampleComponent,
    WidgetComponent,
  ],
  exports: [WidgetComponent],
})
export class WidgetModule {}
