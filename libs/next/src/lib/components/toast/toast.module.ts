import { NgModule } from '@angular/core';
import { PrizmToastContainerComponent } from './toast-container/toast-container.component';
import { CommonModule } from '@angular/common';
import { PrizmOverlayModule } from '../../modules/overlay';
import { ToastComponent } from './toast/toast.component';
import { ToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { PolymorphModule, PrizmThemeModule } from '../../directives';
import { PrizmToastControl } from './toast-control';
import { PrizmToastPosition } from './types';
import { PrizmToastService } from './toast.service';
import { PrizmFocusTrapModule } from '../../directives/focus-trap';
import { PrizmButtonModule } from '../button';
import { PrizmIndicatorModule } from '../indicator';
import { PrizmInputCommonModule } from '../input';

@NgModule({
  exports: [
    PrizmToastContainerComponent
  ],
  imports: [
    CommonModule,
    PrizmOverlayModule,
    PrizmInputCommonModule,
    PrizmIndicatorModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmThemeModule,
    PrizmFocusTrapModule
  ],
  declarations: [
    PrizmToastContainerComponent,
    ToastWrapperComponent,
    ToastComponent,
  ],
  providers: [
    PrizmToastControl,
    PrizmToastService,
  ]
})
export class PrizmToastModule {
  constructor(private readonly toastControl: PrizmToastControl) {
    this.toastControl.init(PrizmToastPosition.TOP_RIGHT);
    this.toastControl.init(PrizmToastPosition.TOP_LEFT);
    this.toastControl.init(PrizmToastPosition.TOP_MIDDLE);
    this.toastControl.init(PrizmToastPosition.BOTTOM_RIGHT);
    this.toastControl.init(PrizmToastPosition.BOTTOM_LEFT);
    this.toastControl.init(PrizmToastPosition.BOTTOM_MIDDLE);
  }
}
