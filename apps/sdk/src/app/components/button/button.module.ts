import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { ButtonComponent } from './button.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ZyfraButtonModule],
  exports: [ButtonComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Button', ButtonComponent],
      multi: true,
    },
  ],
})
export class ButtonModule {}
