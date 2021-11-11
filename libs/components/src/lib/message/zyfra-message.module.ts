import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ZyfraMessageComponent } from './zyfra-message.component';

@NgModule({
  declarations: [ZyfraMessageComponent],
  imports: [MessagesModule, MessageModule],
  exports: [ZyfraMessageComponent],
})
export class ZyfraMessageModule {}
