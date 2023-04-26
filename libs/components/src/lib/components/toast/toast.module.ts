import { NgModule } from '@angular/core';
import { PrizmToastContainerComponent } from './toast-container/toast-container.component';
import { CommonModule } from '@angular/common';
import { PrizmOverlayModule } from '../../modules/overlay';
import { ToastComponent } from './toast/toast.component';
import { ToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { PolymorphModule } from '../../directives';
import { PrizmToastControl } from './toast-control';
import { PrizmFocusTrapModule } from '../../directives/focus-trap';
import { PrizmButtonModule } from '../button';
import { PrizmIndicatorModule } from '../indicator';
import { PrizmInputCommonModule } from '../input';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  exports: [PrizmToastContainerComponent],
  imports: [
    CommonModule,
    PrizmOverlayModule,
    PrizmInputCommonModule,
    PrizmIndicatorModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmThemeModule,
    PrizmFocusTrapModule,
  ],
  declarations: [PrizmToastContainerComponent, ToastWrapperComponent, ToastComponent],
  providers: [PrizmToastControl],
})
export class PrizmToastModule {
  constructor(private readonly toastControl: PrizmToastControl) {}
}
