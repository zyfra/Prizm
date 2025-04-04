import { NgModule } from '@angular/core';
import { PrizmToastContainerComponent } from './toast-container/toast-container.component';
import { CommonModule } from '@angular/common';
import { PrizmOverlayComponent } from '../../modules/overlay';
import { ToastComponent } from './toast/toast.component';
import { ToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { PolymorphModule } from '../../directives';
import { PrizmFocusTrapDirective } from '../../directives/focus-trap';
import { PrizmButtonComponent } from '../button';
import { PrizmIndicatorComponent } from '../indicator';
import { PrizmInputCommonModule } from '../input';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmScrollbarModule } from '../scrollbar';

@NgModule({
  exports: [PrizmToastContainerComponent],
  imports: [
    CommonModule,
    PrizmOverlayComponent,
    PrizmInputCommonModule,
    PrizmIndicatorComponent,
    PolymorphModule,
    PrizmButtonComponent,
    PrizmThemeModule,
    PrizmFocusTrapDirective,
    PrizmScrollbarModule,
  ],
  declarations: [PrizmToastContainerComponent, ToastWrapperComponent, ToastComponent],
})
export class PrizmToastModule {}
