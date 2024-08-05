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
  TuiInputNumberModule,
  TuiSelectModule,
  TuiToggleModule,
} from '@taiga-ui/kit';

import { PrizmInputOpacityDirective } from '../../internal/input-opacity/input-opacity.directive';
import { PrizmDocDocumentationComponent } from './documentation.component';
import { PrizmDocDocumentationPropertyConnectorDirective } from './documentation-property-connector.directive';
import { PrizmHintDirective, PrizmIndicatorComponent, PrizmMapperPipe } from '@prizm-ui/components';
import { PrizmCallFuncPipe, PrizmLetDirective } from '@prizm-ui/helpers';

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
    PrizmInputOpacityDirective,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    PrizmIndicatorComponent,
    PrizmHintDirective,
    PrizmMapperPipe,
    TuiDropdownModule,
    TuiDataListModule,
    PrizmLetDirective,
    TuiDataListWrapperModule,
    TuiNotificationModule,
    PrizmCallFuncPipe,
    TuiInputNumberModule,
  ],
  declarations: [PrizmDocDocumentationComponent, PrizmDocDocumentationPropertyConnectorDirective],
  exports: [PrizmDocDocumentationComponent, PrizmDocDocumentationPropertyConnectorDirective],
})
export class PrizmDocDocumentationModule {}
