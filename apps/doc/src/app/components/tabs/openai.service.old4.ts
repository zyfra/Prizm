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

/**
 * Новый интерфейс для ответа, который может содержать либо Markdown, либо данные для кастомного компонента.
 */
export interface EnhancedChatResponseChunk {
  /**
   * Тип чанка: либо обычный Markdown-контент, либо блок кастомного компонента.
   */
  type: 'markdown' | 'custom';
  /**
   * Если type = 'markdown', payload – строка с Markdown-разметкой.
   * Если type = 'custom', payload – объект, полученный из JSON внутри специальных маркеров.
   */
  payload: string | Record<string, any>;
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
  private readonly baseUrl = 'http://localhost:3500/ai/v1/simple';

  constructor() {}

  /**
   * Создает соединение SSE через sse.js и получает ответ от OpenAI API чанками.
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
        console.error('Ошибка SSE:', error);
        observer.error(new Error(`Ошибка SSE: ${error}`));
        eventSource.close();
      };

      eventSource.stream();

      return () => {
        eventSource.close();
      };
    });
  }

  /**
   * Создает соединение SSE и обрабатывает входящие чанки, анализируя контент на наличие блока кастомного UI.
   *
   * Если текст чанка начинается с ":::custom-ui" и заканчивается "custom-ui:::",
   * то из содержимого между маркерами пытается распарсить JSON и возвращает объект с type = 'custom'.
   * В остальных случаях, возвращается объект с type = 'markdown' и исходным текстом.
   *
   * @param serviceId идентификатор сервиса
   * @param modelId идентификатор модели
   * @param messages массив сообщений
   * @param options дополнительные опции для генерации ответа
   * @returns Observable с EnhancedChatResponseChunk
   */
  public streamChatCompletionWithCustomComponent(
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
  ): Observable<EnhancedChatResponseChunk> {
    const url = `${this.baseUrl}/${serviceId}/${modelId}`;
    const requestBody = JSON.stringify({ messages, ...options });
    let full = '';
    return new Observable<EnhancedChatResponseChunk>(observer => {
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

          // Проверяем наличие специального блока. Если контент начинается с ":::custom-ui"
          // и заканчивается "custom-ui:::", то это блок кастомного компонента.
          const customStart = ':::custom-ui';
          const customEnd = 'custom-ui:::';
          let enhancedChunk: EnhancedChatResponseChunk;

          if (data.content.startsWith(customStart) && data.content.trim().endsWith(customEnd)) {
            // Извлекаем содержимое между маркерами и пытаемся распарсить как JSON.
            const innerContent = data.content
              .substring(customStart.length, data.content.length - customEnd.length)
              .trim();
            try {
              const jsonPayload = JSON.parse(innerContent);
              enhancedChunk = {
                type: 'custom',
                payload: jsonPayload,
                full: full,
                done: data.done,
                model: data.model,
                serviceId: data.serviceId,
                assistentId: data.assistentId,
              };
            } catch (jsonError) {
              // Если произошла ошибка при парсинге JSON, логируем её и возвращаем как markdown с исходным текстом.
              console.error('Ошибка парсинга JSON для custom блока:', jsonError);
              enhancedChunk = {
                type: 'markdown',
                payload: data.content,
                full: full,
                done: data.done,
                model: data.model,
                serviceId: data.serviceId,
                assistentId: data.assistentId,
              };
            }
          } else {
            // Обычный кейс — возвращаем как markdown.
            enhancedChunk = {
              type: 'markdown',
              payload: data.content,
              full: full,
              done: data.done,
              model: data.model,
              serviceId: data.serviceId,
              assistentId: data.assistentId,
            };
          }

          observer.next(enhancedChunk);

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
        console.error('Ошибка SSE:', error);
        observer.error(new Error(`Ошибка SSE: ${error}`));
        eventSource.close();
      };

      eventSource.stream();

      // Функция очистки ресурса при отписке.
      return () => {
        eventSource.close();
      };
    });
  }
}
