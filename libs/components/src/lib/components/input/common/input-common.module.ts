import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmHintDirective } from '../../../directives/hint';
import { PrizmInputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { PrizmInputLayoutComponent } from './input-layout/input-layout.component';
import { PrizmInputStatusTextDirective } from './input-status-text/input-status-text.directive';
import { PrizmInputLayoutBottomDirective } from './input-layout/input-layout-bottom.directive';
import { PrizmInputLayoutRightDirective } from './input-layout/input-layout-right.directive';
import { PrizmInputLayoutLeftDirective } from './input-layout/input-layout-left.directive';
import { PrizmInputLayoutInBodyDirective } from './input-layout/input-layout-in-body.directive';
import { PrizmInputLayoutSubtextDirective } from './input-layout/input-layout-subtext.directive';
import { PolymorphModule, PrizmZoneEventDirective } from '../../../directives';
import { PrizmLetDirective, PrizmPluckPipe, PrizmToObservablePipe } from '@prizm-ui/helpers';
import { PrizmInputHintDirective } from './input-hint/input-hint.directive';
import { PrizmInputAllowedSymbolsDirective } from './input-allowed-symbols';
import { PrizmInputCorrectorDirective } from './input-corrector';
import { PrizmInputIconButtonComponent } from './input-icon-button';

@NgModule({
  imports: [
    CommonModule,
    PrizmInputHintDirective,
    PrizmToObservablePipe,
    PrizmLetDirective,
    PolymorphModule,
    PrizmZoneEventDirective,
    PrizmHintDirective,
    PrizmInputIconButtonComponent,
    PrizmInputAllowedSymbolsDirective,
    PrizmInputCorrectorDirective,
    PrizmPluckPipe,
  ],
  declarations: [
    PrizmInputLayoutRightDirective,
    PrizmInputLayoutLeftDirective,
    PrizmInputLayoutComponent,
    PrizmInputStatusSubtextComponent,
    PrizmInputStatusTextDirective,
    PrizmInputLayoutBottomDirective,
    PrizmInputLayoutInBodyDirective,
    PrizmInputLayoutSubtextDirective,
  ],
  exports: [
    CommonModule,
    PrizmInputHintDirective,
    PrizmInputLayoutComponent,
    PrizmInputStatusSubtextComponent,
    PrizmInputIconButtonComponent,
    PrizmInputStatusTextDirective,
    PrizmInputLayoutBottomDirective,
    PrizmInputLayoutLeftDirective,
    PrizmInputLayoutRightDirective,
    PrizmInputLayoutInBodyDirective,
    PrizmInputLayoutSubtextDirective,
    PrizmInputAllowedSymbolsDirective,
    PrizmInputCorrectorDirective,
  ],
})
export class PrizmInputCommonModule {}
