import { NgModule } from '@angular/core';
import { ZuiToastContainerComponent } from './toast-container/toast-container.component';
import { CommonModule } from '@angular/common';
import { ZuiOverlayModule } from '../../modules/overlay';
import { ToastComponent } from './toast/toast.component';
import { ToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { PolymorphModule } from '../../directives';
import { ZuiToastControl } from './toast-control';
import { ZuiToastPosition } from './types';
import { ZuiToastService } from './toast.service';
import { ZuiFocusTrapModule } from '../../directives/focus-trap';
import { ZuiButtonModule } from '../button';
import { ZuiIndicatorModule } from '../indicator';
import { ZuiInputCommonModule } from '../input';

@NgModule({
  exports: [
    ZuiToastContainerComponent
  ],
  imports: [
    CommonModule,
    ZuiOverlayModule,
    ZuiInputCommonModule,
    ZuiIndicatorModule,
    PolymorphModule,
    ZuiButtonModule,
    ZuiFocusTrapModule
  ],
  declarations: [
    ZuiToastContainerComponent,
    ToastWrapperComponent,
    ToastComponent,
  ],
  providers: [
    ZuiToastControl,
    ZuiToastService,
  ]
})
export class ZuiToastModule {
  constructor(private readonly toastControl: ZuiToastControl) {
    this.toastControl.init(ZuiToastPosition.TOP_RIGHT);
    this.toastControl.init(ZuiToastPosition.TOP_LEFT);
    this.toastControl.init(ZuiToastPosition.TOP_MIDDLE);
    this.toastControl.init(ZuiToastPosition.BOTTOM_RIGHT);
    this.toastControl.init(ZuiToastPosition.BOTTOM_LEFT);
    this.toastControl.init(ZuiToastPosition.BOTTOM_MIDDLE);
  }
}
