import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { ZyfraMessageModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, ZyfraMessageModule],
  exports: [MessageComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Message', MessageComponent],
      multi: true,
    },
  ],
})
export class MessageModule {}
