import { Injectable, Optional } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

export type ToastMessage = Message;

@Injectable()
export class ToastService {
  constructor(@Optional() private readonly messageService: MessageService) {}

  public add(message: ToastMessage): void {
    this.messageService.add(message);
  }

  public addAll(messages: ToastMessage[]): void {
    this.messageService.addAll(messages);
  }

  public clear(key?: string): void {
    this.messageService.clear(key);
  }
}
