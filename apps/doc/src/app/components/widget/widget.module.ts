import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { PzmWidgetBaseExampleComponent } from './examples/base/widget-base-example.component';
import { PzmWidgetModule } from '@digital-plant/zui-components';
import { PzmWidgetWithButtonsExampleComponent } from './examples/with-buttons/widget-with-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmWidgetModule,
    RouterModule.forChild(generateRoutes(WidgetComponent)),
  ],
  declarations: [
    PzmWidgetBaseExampleComponent,
    PzmWidgetWithButtonsExampleComponent,
    WidgetComponent,
  ],
  exports: [WidgetComponent],
})
export class WidgetModule {}
