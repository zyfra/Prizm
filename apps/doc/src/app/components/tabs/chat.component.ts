import { Component, OnDestroy, signal } from '@angular/core';
import { ChatMessage, ChatResponseChunk, OpenAiService } from './openai.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'prizm-openai-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class OpenAiChatComponent implements OnDestroy {
  messages: ChatMessage[] = [];
  userInput: string = '';
  isLoading = signal(false);
  currentResponse = signal('');
  error: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(private openAiService: OpenAiService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public sendMessage(): void {
    if (!this.userInput.trim() || this.isLoading()) return;

    // Добавляем сообщение пользователя
    this.messages.push({
      role: 'user',
      content: this.userInput.trim(),
    });

    // Сбрасываем форму и подготавливаем для ответа
    const inputBackup = this.userInput;
    this.userInput = '';
    this.isLoading.set(true);
    this.currentResponse.set('');
    this.error = null;

    // Вызываем API с фиксированной моделью
    this.openAiService
      .streamChatCompletion(
        'prizm',
        'prizmai',
        this.messages.map(message => ({
          content: message.role === 'user' ? (message.input?.content ?? message.content) : message.content,
          role: message.role,
        })),
        {
          forceIngest: ['libs/components/src/lib/components/tabs/%'],
        }
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (chunk: ChatResponseChunk) => {
          this.currentResponse.set(this.currentResponse() + chunk.content);
          console.log('#mz chunk', chunk);

          // Если это последний чанк, добавляем ответ ассистента в историю
          if (chunk.done) {
            this.messages.push({
              role: 'assistant',
              content: chunk.full,
              input: chunk.formatedMessage && {
                content: chunk.formatedMessage?.content,
              },
            });
            console.log('#mz messages', [...this.messages]);
            this.isLoading.set(false);
            this.currentResponse.set('');
          }
        },
        error: err => {
          console.error('Error from OpenAI service:', err);
          this.error = `Ошибка при получении ответа: ${err.message || 'Неизвестная ошибка'}`;
          this.isLoading.set(false);
          this.userInput = inputBackup;
        },
      });
  }

  public onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  public formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
