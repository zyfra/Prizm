import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { PrizmWidgetBaseExampleComponent } from './examples/base/widget-base-example.component';
import { PrizmWidgetModule } from '@prizm-ui/components';
import { PrizmWidgetWithButtonsExampleComponent } from './examples/with-buttons/widget-with-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmWidgetModule,
    RouterModule.forChild(generateRoutes(WidgetComponent)),
  ],
  declarations: [
    PrizmWidgetBaseExampleComponent,
    PrizmWidgetWithButtonsExampleComponent,
    WidgetComponent,
  ],
  exports: [WidgetComponent],
})
export class WidgetModule {}
