import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SSE } from 'sse.js';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponseChunk {
  content: string;
  full: string;
  done: boolean;
  model: string;
  serviceId: string;
  assistentId: string;
}

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private readonly baseUrl = 'http://localhost:3020/tochka/v1/ai';

  constructor() {}

  /**
   * Создает соединение SSE через sse.js и получает ответ от OpenAI API чанками
   */
  public streamChatCompletion(
    serviceId: string,
    modelId: string,
    messages: ChatMessage[],
    options?: {
      temperature?: number;
      maxTokens?: number;
      topP?: number;
      frequencyPenalty?: number;
      presencePenalty?: number;
    }
  ): Observable<ChatResponseChunk> {
    const url = `${this.baseUrl}/${serviceId}/${modelId}`;
    const requestBody = JSON.stringify({ messages, ...options });
    let full = '';
    return new Observable<ChatResponseChunk>(observer => {
      const eventSource = new SSE(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
        },
        payload: requestBody,
      });

      eventSource.onmessage = event => {
        try {
          const data: ChatResponseChunk = JSON.parse(event.data);
          full += data.content;
          data.full = full;
          observer.next(data);

          if (data.done) {
            eventSource.close();
            observer.complete();
          }
        } catch (error) {
          observer.error(new Error(`Ошибка парсинга SSE-сообщения: ${error}`));
          eventSource.close();
        }
      };

      eventSource.onerror = error => {
        console.log('error', error);
        observer.error(new Error(`Ошибка SSE: ${error}`));
        eventSource.close();
      };

      eventSource.stream();

      return () => {
        eventSource.close();
      };
    });
  }
}
