import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SSE } from 'sse.js';

/**
 * Типы контент-блоков, которые могут быть включены в ответ
 */
export type ContentBlockType = 'markdown' | 'custom';

/**
 * Базовый интерфейс для всех блоков контента
 */
export interface ContentBlockBase {
  $: ContentBlockType;
}

/**
 * Блок с markdown-контентом
 */
export interface MarkdownBlock extends ContentBlockBase {
  $: 'markdown';
  payload: string;
}

/**
 * Блок с пользовательским UI-компонентом
 */
export interface CustomBlock extends ContentBlockBase {
  $: 'custom';
  code: string; // Идентификатор блока (например, '[customId]')
  payload: any; // Данные JSON
}

export type ContentBlock = CustomBlock | MarkdownBlock;

/**
 * Сообщение чата
 */
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

/**
 * Расширенный интерфейс для чанков ответа с поддержкой блоков контента
 */
export interface ChatResponseChunk {
  // Исходные поля для обратной совместимости
  content: string;
  full: string;
  done: boolean;
  model: string;
  serviceId: string;
  assistentId: string;

  // Новое поле для структурированного контента
  blocks?: ContentBlock[];
}

/**
 * Опции для генерации ответов модели
 */
export interface ChatOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
}

/**
 * Сервис для взаимодействия с API OpenAI с поддержкой пользовательских UI-компонентов
 */
@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  // private readonly baseUrl = 'http://localhost:3500/ai/v1/simple/sendMessage';

  constructor() {}

  /**
   * Создает соединение SSE через sse.js и получает ответ от OpenAI API чанками
   * с поддержкой специальных UI блоков в формате :::custom-ui:[customId] {...} :::
   */
  public streamChatCompletion(
    serviceId: string,
    modelId: string,
    messages: ChatMessage[],
    options?: ChatOptions
  ): Observable<ChatResponseChunk> {
    const url = `${this.baseUrl}/${serviceId}/${modelId}`;
    const requestBody = JSON.stringify({ messages, ...options });

    let full = ''; // Полный текстовый ответ
    let buffer = ''; // Буфер для парсинга блоков
    let blocks: ContentBlock[] = []; // Массив блоков контента

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

          // Добавляем новый контент в полный ответ и буфер
          full += data.content;
          buffer += data.content;

          // Обрабатываем буфер и извлекаем блоки
          const result = this.processBuffer(buffer);
          buffer = result.remainder;

          if (result.blocks.length > 0) {
            blocks = [...blocks, ...result.blocks];
          }

          // Создаем обновленный объект ответа
          const enhancedData: ChatResponseChunk = {
            ...data,
            full,
            blocks: [...blocks],
          };

          observer.next(enhancedData);

          if (data.done) {
            // Финальная обработка буфера
            if (buffer.trim()) {
              // Пытаемся обработать как кастомный блок
              if (buffer.includes(':::custom-ui:')) {
                const finalResult = this.processFinalBuffer(buffer);
                if (finalResult.blocks.length > 0) {
                  blocks = [...blocks, ...finalResult.blocks];
                  // Отправляем финальное обновление
                  observer.next({
                    ...enhancedData,
                    blocks: [...blocks],
                  });
                } else {
                  // Если не удалось обработать как UI-блок, добавляем как markdown
                  const markdownBlock: MarkdownBlock = {
                    $: 'markdown',
                    payload: buffer.trim(),
                  };
                  blocks.push(markdownBlock);
                  observer.next({
                    ...enhancedData,
                    blocks: [...blocks],
                  });
                }
              } else {
                // Простой markdown в конце
                const markdownBlock: MarkdownBlock = {
                  $: 'markdown',
                  payload: buffer.trim(),
                };
                blocks.push(markdownBlock);
                observer.next({
                  ...enhancedData,
                  blocks: [...blocks],
                });
              }
            }

            eventSource.close();
            observer.complete();
          }
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          observer.error(new Error(`Ошибка парсинга SSE-сообщения: ${errorMsg}`));
          eventSource.close();
        }
      };

      eventSource.onerror = error => {
        const errorMsg = error instanceof Error ? error.message : 'Неизвестная ошибка';
        console.error('SSE ошибка:', errorMsg);
        observer.error(new Error(`Ошибка SSE: ${errorMsg}`));
        eventSource.close();
      };

      eventSource.stream();

      return () => {
        eventSource.close();
      };
    });
  }

  /**
   * Обрабатывает буфер и извлекает блоки контента
   */
  private processBuffer(buffer: string): { blocks: ContentBlock[]; remainder: string } {
    const blocks: ContentBlock[] = [];
    let remainder = buffer;

    // Ищем паттерн начала UI-блока
    const customUIPattern = /:::custom-ui:\[(.*?)\]([\s\S]*?):::/g;

    let match;
    let lastEndIndex = 0;
    let hasCustomBlocks = false;

    // Используем регулярное выражение для поиска всех UI-блоков
    while ((match = customUIPattern.exec(buffer)) !== null) {
      hasCustomBlocks = true;

      // Если перед UI-блоком был markdown, добавляем его
      if (match.index > lastEndIndex) {
        const markdownContent = buffer.substring(lastEndIndex, match.index).trim();
        if (markdownContent) {
          blocks.push({
            $: 'markdown',
            payload: markdownContent,
          });
        }
      }

      // Извлекаем ID и весь контент между скобками
      const customId = match[1];
      const contentWithBraces = match[2].trim();

      // Ищем начало и конец JSON объекта
      const jsonStartIndex = contentWithBraces.indexOf('{');
      let jsonEndIndex = -1;

      if (jsonStartIndex !== -1) {
        // Находим парную закрывающую скобку
        jsonEndIndex = this.findMatchingClosingBrace(contentWithBraces, jsonStartIndex);
      }

      if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
        try {
          // Извлекаем JSON-строку и парсим ее
          const jsonString = contentWithBraces.substring(jsonStartIndex, jsonEndIndex + 1);
          const payload = JSON.parse(jsonString);

          blocks.push({
            $: 'custom',
            code: `[${customId}]`,
            payload,
          });
        } catch (e) {
          console.error('Ошибка парсинга JSON в UI-блоке:', e);
        }
      }

      lastEndIndex = match.index + match[0].length;
    }

    // Если были найдены UI-блоки, обновляем remainder
    if (hasCustomBlocks) {
      remainder = buffer.substring(lastEndIndex);
    }

    return { blocks, remainder };
  }

  /**
   * Обрабатывает финальный буфер, пытаясь извлечь UI-блок даже если он не завершен
   */
  private processFinalBuffer(buffer: string): { blocks: ContentBlock[] } {
    const blocks: ContentBlock[] = [];

    // Ищем начало UI-блока
    const startIndex = buffer.indexOf(':::custom-ui:');
    if (startIndex === -1) {
      return { blocks };
    }

    // Извлекаем ID
    const idStartIndex = buffer.indexOf('[', startIndex);
    const idEndIndex = buffer.indexOf(']', idStartIndex);

    if (idStartIndex === -1 || idEndIndex === -1) {
      return { blocks };
    }

    const customId = buffer.substring(idStartIndex + 1, idEndIndex);

    // Ищем начало JSON
    const jsonStartIndex = buffer.indexOf('{', idEndIndex);
    if (jsonStartIndex === -1) {
      return { blocks };
    }

    // Проверяем, есть ли закрывающий тег :::
    const closingTagIndex = buffer.indexOf(':::', jsonStartIndex);

    let jsonString;
    if (closingTagIndex !== -1) {
      // Найден закрывающий тег, ищем конец JSON перед ним
      const jsonEndIndex = this.findLastJsonEnd(buffer.substring(jsonStartIndex, closingTagIndex));
      if (jsonEndIndex === -1) {
        return { blocks };
      }

      jsonString = buffer.substring(jsonStartIndex, jsonStartIndex + jsonEndIndex + 1);
    } else {
      // Нет закрывающего тега, пытаемся найти наиболее вероятный конец JSON
      const jsonEndIndex = this.findLastPossibleJsonEnd(buffer.substring(jsonStartIndex));
      if (jsonEndIndex === -1) {
        return { blocks };
      }

      jsonString = buffer.substring(jsonStartIndex, jsonStartIndex + jsonEndIndex + 1);
    }

    try {
      // Пытаемся распарсить JSON
      const payload = JSON.parse(jsonString);

      blocks.push({
        $: 'custom',
        code: `[${customId}]`,
        payload,
      });
    } catch (e) {
      console.error('Ошибка парсинга JSON в финальном буфере:', e);
    }

    return { blocks };
  }

  /**
   * Находит парную закрывающую скобку для JSON объекта
   */
  private findMatchingClosingBrace(content: string, openBraceIndex: number): number {
    let braceCount = 1;
    let index = openBraceIndex + 1;
    let inString = false;
    let escaped = false;

    while (index < content.length && braceCount > 0) {
      const char = content[index];

      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (char === '\\') {
          escaped = true;
        } else if (char === '"') {
          inString = false;
        }
      } else if (char === '"') {
        inString = true;
      } else if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          return index;
        }
      }

      index++;
    }

    return -1;
  }

  /**
   * Находит наиболее вероятный конец JSON в строке
   */
  private findLastPossibleJsonEnd(content: string): number {
    // Сначала ищем правильный JSON
    const fullJsonEnd = this.findMatchingClosingBrace(content, 0);
    if (fullJsonEnd !== -1) {
      return fullJsonEnd;
    }

    // Если парную скобку не найдено, ищем последнюю закрывающую скобку
    let lastClosingBrace = -1;
    let inString = false;
    let escaped = false;

    for (let i = 0; i < content.length; i++) {
      const char = content[i];

      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (char === '\\') {
          escaped = true;
        } else if (char === '"') {
          inString = false;
        }
      } else if (char === '"') {
        inString = true;
      } else if (char === '}') {
        lastClosingBrace = i;
      }
    }

    return lastClosingBrace;
  }

  /**
   * Находит последний закрывающийся JSON в указанном диапазоне
   */
  private findLastJsonEnd(content: string): number {
    // Ищем последнюю закрывающую скобку, которая может быть концом JSON
    for (let i = content.length - 1; i >= 0; i--) {
      if (content[i] === '}') {
        // Проверяем, является ли это валидным JSON
        try {
          JSON.parse(content.substring(0, i + 1));
          return i;
        } catch {
          // Продолжаем поиск
        }
      }
    }

    return -1;
  }
}
