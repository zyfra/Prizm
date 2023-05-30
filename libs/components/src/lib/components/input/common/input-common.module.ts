import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmHintModule } from '../../../directives/hint';
import { PrizmIconModule } from '../../icon';
import { PrizmInputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { PrizmInputLayoutComponent } from './input-layout/input-layout.component';
import { PrizmInputStatusTextDirective } from './input-status-text/input-status-text.directive';
import { PrizmInputIconButtonModule } from './input-icon-button/input-icon-button.module';
import { PrizmInputLayoutBottomDirective } from './input-layout/input-layout-bottom.directive';
import { PrizmInputLayoutRightDirective } from './input-layout/input-layout-right.directive';
import { PrizmInputLayoutLeftDirective } from './input-layout/input-layout-left.directive';
import { PrizmInputLayoutInBodyDirective } from './input-layout/input-layout-in-body.directive';
import { PrizmInputLayoutSubtextDirective } from './input-layout/input-layout-subtext.directive';
import { PrizmZoneEventModule } from '../../../directives';

@NgModule({
  imports: [CommonModule, PrizmIconModule, PrizmZoneEventModule, PrizmHintModule, PrizmInputIconButtonModule],
  declarations: [
    PrizmInputLayoutComponent,
    PrizmInputStatusSubtextComponent,
    PrizmInputStatusTextDirective,
    PrizmInputLayoutBottomDirective,
    PrizmInputLayoutRightDirective,
    PrizmInputLayoutLeftDirective,
    PrizmInputLayoutInBodyDirective,
    PrizmInputLayoutSubtextDirective,
  ],
  exports: [
    CommonModule,
    PrizmInputLayoutComponent,
    PrizmInputStatusSubtextComponent,
    PrizmInputIconButtonModule,
    PrizmInputStatusTextDirective,
    PrizmInputLayoutBottomDirective,
    PrizmInputLayoutLeftDirective,
    PrizmInputLayoutRightDirective,
    PrizmInputLayoutInBodyDirective,
    PrizmInputLayoutSubtextDirective,
  ],
})
export class PrizmInputCommonModule {}
