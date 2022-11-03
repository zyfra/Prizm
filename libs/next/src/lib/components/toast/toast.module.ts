import { NgModule } from '@angular/core';
import { PzmToastContainerComponent } from './toast-container/toast-container.component';
import { CommonModule } from '@angular/common';
import { PzmOverlayModule } from '../../modules/overlay';
import { ToastComponent } from './toast/toast.component';
import { ToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { PolymorphModule, PzmThemeModule } from '../../directives';
import { PzmToastControl } from './toast-control';
import { PzmToastPosition } from './types';
import { PzmToastService } from './toast.service';
import { PzmFocusTrapModule } from '../../directives/focus-trap';
import { PzmButtonModule } from '../button';
import { PzmIndicatorModule } from '../indicator';
import { PzmInputCommonModule } from '../input';

@NgModule({
  exports: [
    PzmToastContainerComponent
  ],
  imports: [
    CommonModule,
    PzmOverlayModule,
    PzmInputCommonModule,
    PzmIndicatorModule,
    PolymorphModule,
    PzmButtonModule,
    PzmThemeModule,
    PzmFocusTrapModule
  ],
  declarations: [
    PzmToastContainerComponent,
    ToastWrapperComponent,
    ToastComponent,
  ],
  providers: [
    PzmToastControl,
    PzmToastService,
  ]
})
export class PzmToastModule {
  constructor(private readonly toastControl: PzmToastControl) {
    this.toastControl.init(PzmToastPosition.TOP_RIGHT);
    this.toastControl.init(PzmToastPosition.TOP_LEFT);
    this.toastControl.init(PzmToastPosition.TOP_MIDDLE);
    this.toastControl.init(PzmToastPosition.BOTTOM_RIGHT);
    this.toastControl.init(PzmToastPosition.BOTTOM_LEFT);
    this.toastControl.init(PzmToastPosition.BOTTOM_MIDDLE);
  }
}
