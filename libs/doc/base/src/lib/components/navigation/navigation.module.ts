import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiActiveZoneModule, TuiAutoFocusModule, TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiModeModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiAccordionModule, TuiInputModule } from '@taiga-ui/kit';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { TuiScrollIntoViewLinkModule } from '../../directives/scroll-into-view/scroll-into-view.module';
import { TuiDocNavigationComponent } from './navigation.component';
import { PrizmToggleModule } from '@prizm-ui/components';
import { PrizmCallFuncModule } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PrizmToggleModule,
    PolymorpheusModule,
    TuiScrollIntoViewLinkModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiActiveZoneModule,
    TuiLetModule,
    TuiModeModule,
    TuiLinkModule,
    TuiExpandModule,
    TuiHostedDropdownModule,
    TuiDropdownModule,
    TuiAccordionModule,
    PrizmCallFuncModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiAutoFocusModule,
  ],
  declarations: [TuiDocNavigationComponent],
  exports: [TuiDocNavigationComponent],
})
export class PrizmDocNavigationModule {}
