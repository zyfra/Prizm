import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { WidgetExampleComponent } from './widget-example.component';
import { PrizmWidgetBaseExampleComponent } from './examples/base/widget-base-example.component';
import { PrizmButtonComponent, PrizmWidgetComponent } from '@prizm-ui/components';
import { PrizmWidgetWithButtonsExampleComponent } from './examples/with-buttons/widget-with-buttons-example.component';
import { PrizmWidgetWithTemplatesExampleComponent } from './examples/with-templates/widget-with-templates-example.component';
import { PrizmIconsComponent } from '@prizm-ui/icons';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmWidgetComponent,
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(WidgetExampleComponent)),
    PrizmIconsComponent,
  ],
  declarations: [
    PrizmWidgetWithTemplatesExampleComponent,
    PrizmWidgetBaseExampleComponent,
    PrizmWidgetWithButtonsExampleComponent,
    WidgetExampleComponent,
  ],
  exports: [WidgetExampleComponent],
})
export class WidgetExampleModule {}
