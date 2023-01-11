import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  TuiDataListModule,
  TuiDropdownModule,
  TuiGroupModule,
  TuiLinkModule,
  TuiModeModule,
  TuiNotificationModule,
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule,
  TuiTooltipModule,
} from '@taiga-ui/core';
import {
  TuiBadgeModule,
  TuiDataListWrapperModule,
  TuiInputCountModule,
  TuiSelectModule,
  TuiToggleModule,
} from '@taiga-ui/kit';

import { PrizmInputOpacityModule } from '../../internal/input-opacity/input-opacity.module';
import { PrizmDocDocumentationComponent } from './documentation.component';
import { PrizmDocDocumentationPropertyConnectorDirective } from './documentation-property-connector.directive';
import { PrizmHintModule, PrizmIndicatorModule, PrizmMapperPipeModule } from '@prizm-ui/components';
import { PrizmLetModule } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TuiBadgeModule,
    TuiSelectModule,
    TuiToggleModule,
    TuiTooltipModule,
    TuiLinkModule,
    TuiInputCountModule,
    TuiModeModule,
    TuiGroupModule,
    PrizmInputOpacityModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    PrizmIndicatorModule,
    PrizmHintModule,
    PrizmMapperPipeModule,
    TuiDropdownModule,
    TuiDataListModule,
    PrizmLetModule,
    TuiDataListWrapperModule,
    TuiNotificationModule,
  ],
  declarations: [PrizmDocDocumentationComponent, PrizmDocDocumentationPropertyConnectorDirective],
  exports: [PrizmDocDocumentationComponent, PrizmDocDocumentationPropertyConnectorDirective],
})
export class PrizmDocDocumentationModule {}
