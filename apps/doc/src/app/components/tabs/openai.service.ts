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
  special?: {
    getting?: boolean;
    specialEl?: Record<string, any> | null;
  };
}

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private readonly baseUrl = 'http://localhost:3500/ai/v1/simple';

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

      let specElCode = '';
      eventSource.onmessage = event => {
        try {
          const data: ChatResponseChunk = JSON.parse(event.data);
          full += data.content;
          data.full = full;

          if (data.content.includes('ꝋ')) {
            // end for special element
            specElCode += data.content;
            let json = {};
            try {
              const clear = specElCode.replace(/(ɵ:[a-zA-Z:-]+)|([a-zA-Z:-]+:ꝋ)/g, '');
              console.log('#mz clear: ', clear);
              json = JSON.parse(clear);
              console.log('#mz json: ', json);
            } catch (e) {
              console.warn('ERROR:AI:CUSTOM:COMPONENT', e);
            }

            observer.next({
              ...data,
              content: specElCode,
              special: {
                specialEl: json,
                getting: false,
              },
            });
            console.log('#mz SE:END');

            // clear
            specElCode = '';
          } else if (specElCode) {
            specElCode += data.content;
          } else if (data.content.includes('ɵ')) {
            // start for special element
            specElCode = data.content;
            observer.next({
              ...data,
              content: '',
              special: {
                getting: true,
              },
            });
            console.log('#mz SE:START');
          } else {
            // not special ui
            observer.next(data);
          }

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
