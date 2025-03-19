// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { SSE } from 'sse.js';
//
// /**
//  * Типы контент-блоков, которые могут быть включены в ответ
//  * - markdown: обычный текстовый контент в формате markdown
//  * - custom: специальный интерактивный UI-элемент
//  */
// export type ContentBlockType = 'markdown' | 'custom';
//
// /**
//  * Базовый интерфейс для всех блоков контента
//  */
// export interface ContentBlock {
//   $: ContentBlockType;
//   payload: any;
// }
//
// /**
//  * Блок с markdown-контентом
//  */
// export interface MarkdownBlock extends ContentBlock {
//   $: 'markdown';
//   payload: string;
// }
//
// /**
//  * Блок с пользовательским UI-компонентом
//  */
// export interface CustomBlock extends ContentBlock {
//   $: 'custom';
//   code: string;  // Идентификатор блока (например, '[customId]')
//   payload: any;  // Данные JSON
// }
//
// /**
//  * Сообщение чата
//  */
// export interface ChatMessage {
//   role: 'user' | 'assistant' | 'system';
//   content: string;
// }
//
// /**
//  * Расширенный интерфейс для чанков ответа с поддержкой блоков контента
//  */
// export interface ChatResponseChunk {
//   // Исходные поля для обратной совместимости
//   content: string;
//   full: string;
//   done: boolean;
//   model: string;
//   serviceId: string;
//   assistentId: string;
//
//   // Новое поле для структурированного контента
//   blocks?: ContentBlock[];
// }
//
// /**
//  * Опции для генерации ответов модели
//  */
// export interface ChatOptions {
//   temperature?: number;
//   maxTokens?: number;
//   topP?: number;
//   frequencyPenalty?: number;
//   presencePenalty?: number;
// }
//
// /**
//  * Результат парсинга контента
//  */
// interface ParseResult {
//   blocks: ContentBlock[];
//   remainder: string;
//   error?: string;
// }
//
// /**
//  * Сервис для взаимодействия с API OpenAI с поддержкой пользовательских UI-компонентов
//  *
//  * @example
//  * // Пример использования
//  * const openAiService = inject(OpenAiService);
//  *
//  * openAiService.streamChatCompletion('my-service', 'gpt-4', [
//  *   { role: 'user', content: 'Покажи мне кнопку для оплаты' }
//  * ]).subscribe({
//  *   next: (response) => {
//  *     // Обработка блоков контента
//  *     response.blocks?.forEach(block => {
//  *       if (block.$ === 'markdown') {
//  *         // Рендер markdown
//  *         renderMarkdown(block.payload);
//  *       } else if (block.$ === 'custom') {
//  *         // Рендер UI-компонента
//  *         renderCustomUI(block.code, block.payload);
//  *       }
//  *     });
//  *   },
//  *   error: (err) => console.error('Ошибка общения с API:', err),
//  *   complete: () => console.log('Получение ответа завершено')
//  * });
//  */
// @Injectable({
//   providedIn: 'root'
// })
// export class OpenAiService {
//   private readonly baseUrl = 'http://localhost:3500/ai/v1/simple';
//   // Для кэширования результатов парсинга
//   private parseCache = new Map<string, ContentBlock[]>();
//
//   constructor() {}
//
//   /**
//    * Создает соединение SSE через sse.js и получает ответ от OpenAI API чанками
//    * с поддержкой специальных UI блоков в формате :::custom-ui:[customId] {...} :::
//    *
//    * @param serviceId - Идентификатор сервиса
//    * @param modelId - Идентификатор модели
//    * @param messages - Массив сообщений в чате
//    * @param options - Дополнительные параметры для API
//    * @returns Observable с чанками ответа, содержащими блоки контента
//    */
//   public streamChatCompletion(
//     serviceId: string,
//     modelId: string,
//     messages: ChatMessage[],
//     options?: ChatOptions
//   ): Observable<ChatResponseChunk> {
//     const url = `${this.baseUrl}/${serviceId}/${modelId}`;
//     const requestBody = JSON.stringify({ messages, ...options });
//
//     let full = '';                  // Полный текстовый ответ
//     let buffer = '';                // Буфер для парсинга специальных блоков
//     let blocks: ContentBlock[] = []; // Массив блоков контента
//     let lastError: string | null = null; // Последняя ошибка парсинга
//
//     return new Observable<ChatResponseChunk>(observer => {
//       const eventSource = new SSE(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'text/event-stream'
//         },
//         payload: requestBody
//       });
//
//       eventSource.onmessage = (event) => {
//         try {
//           const data: ChatResponseChunk = JSON.parse(event.data);
//
//           // Добавляем новый контент в полный ответ и буфер
//           full += data.content;
//           buffer += data.content;
//
//           // Проверяем кэш для оптимизации
//           const cacheKey = buffer;
//           if (this.parseCache.has(cacheKey)) {
//             blocks = [...this.parseCache.get(cacheKey)!];
//             buffer = '';
//           } else {
//             // Парсим контент для выделения блоков UI
//             const parseResult = this.parseContent(buffer);
//             console.log('#mz parseResult>0', parseResult)
//             console.log('#mz buffer>1', buffer)
//
//             if (parseResult.error) {
//               lastError = parseResult.error;
//               console.warn(`Предупреждение при парсинге: ${parseResult.error}`);
//             }
//
//             // Если есть обработанные блоки, добавляем их
//             if (parseResult.blocks.length > 0) {
//               blocks = [...blocks, ...parseResult.blocks];
//               buffer = parseResult.remainder;
//
//               // Кэшируем результат
//               if (parseResult.blocks.length > 0) {
//                 this.parseCache.set(cacheKey, parseResult.blocks);
//               }
//             }
//           }
//
//           // Создаем обновленный объект ответа
//           const enhancedData: ChatResponseChunk = {
//             ...data,
//             full,
//             blocks: [...blocks]
//           };
//
//           observer.next(enhancedData);
//
//           if (data.done) {
//             console.log('#mz :::custom-ui', buffer)
//
//             // Обрабатываем оставшийся буфер при завершении
//             if (buffer.trim()) {
//               // Проверяем есть ли UI-блок в оставшемся буфере
//               if (buffer.includes(':::custom-ui:')) {
//                 // Если в буфере есть UI-блок, пытаемся его обработать полностью
//                 const finalParseResult = this.parseContent(buffer, true);
//
//                 if (finalParseResult.blocks.length > 0) {
//                   // Добавляем только обработанные блоки, игнорируя markdown, если есть UI-блоки
//                   blocks = [...blocks, ...finalParseResult.blocks];
//
//                   // Отправляем финальное обновление только с UI-блоками
//                   observer.next({
//                     ...enhancedData,
//                     blocks: [...blocks]
//                   });
//                 } else if (finalParseResult.error) {
//                   console.error('Ошибка при финальной обработке UI-блока:', finalParseResult.error);
//                 }
//               } else {
//                 // Если нет UI-блока, обрабатываем как markdown
//                 const markdownBlock: MarkdownBlock = {
//                   $: 'markdown',
//                   payload: buffer.trim()
//                 };
//                 blocks.push(markdownBlock);
//
//                 // Отправляем финальное обновление с markdown-блоком
//                 observer.next({
//                   ...enhancedData,
//                   blocks: [...blocks]
//                 });
//               }
//             }
//
//             // Очищаем кэш после завершения
//             this.parseCache.clear();
//             eventSource.close();
//             observer.complete();
//           }
//         } catch (error) {
//           const errorMsg = error instanceof Error ? error.message : String(error);
//           observer.error(new Error(`Ошибка парсинга SSE-сообщения: ${errorMsg}`));
//           eventSource.close();
//         }
//       };
//
//       eventSource.onerror = (error) => {
//         const errorMsg = error instanceof Error ? error.message : 'Неизвестная ошибка';
//         console.error('SSE ошибка:', errorMsg);
//         observer.error(new Error(`Ошибка SSE: ${errorMsg}`));
//         eventSource.close();
//       };
//
//       eventSource.stream();
//
//       // Отписка при завершении Observable
//       return () => {
//         this.parseCache.clear();
//         eventSource.close();
//       };
//     });
//   }
//
//   /**
//    * Парсит содержимое на блоки markdown и custom-ui
//    * Использует улучшенный алгоритм, который корректно обрабатывает
//    * вложенные структуры JSON и частично полученные блоки
//    *
//    * @param content Содержимое для парсинга
//    * @param finalParse Флаг, указывающий что это финальный парсинг (для завершения потока)
//    * @returns Объект с блоками, остатком непарсенного контента и ошибками
//    */
//   private parseContent(content: string, finalParse: boolean = false): ParseResult {
//     const blocks: ContentBlock[] = [];
//     let remainder = content;
//     let error: string | undefined;
//
//     try {
//       // Ищем начало блока
//       let startIdx = remainder.indexOf(':::custom-ui:');
//
//       while (startIdx !== -1) {
//         console.log('#mz parseContent', startIdx)
//         // Если есть текст до блока UI, создаем markdown-блок
//         if (startIdx > 0) {
//           const markdownContent = remainder.substring(0, startIdx).trim();
//           if (markdownContent) {
//             blocks.push({
//               $: 'markdown',
//               payload: markdownContent
//             });
//           }
//           remainder = remainder.substring(startIdx);
//           startIdx = 0; // Теперь блок в начале строки
//         }
//
//         // Ищем конец блока
//         const endIdx = this.findClosingTag(remainder);
//
//         if (endIdx === -1) {
//           // Если конец блока не найден и это не финальный парсинг,
//           // значит блок не завершен - оставляем его в буфере
//           if (!finalParse) {
//             break;
//           }
//
//           // Для финального парсинга пытаемся обработать незавершенный блок
//           // Ищем ID блока
//           const idStartIdx = remainder.indexOf('[');
//           const idEndIdx = remainder.indexOf(']', idStartIdx);
//
//           if (idStartIdx === -1 || idEndIdx === -1) {
//             error = 'Некорректный формат ID блока в незавершенном UI-блоке';
//             break;
//           }
//
//           // Ищем начало JSON
//           const jsonStartIdx = remainder.indexOf('{', idEndIdx);
//           if (jsonStartIdx === -1) {
//             error = 'Не найдено начало JSON в незавершенном UI-блоке';
//             break;
//           }
//
//           // Пытаемся найти конец JSON даже если нет закрывающего тега :::
//           let jsonEndIdx = -1;
//           const jsonStr = remainder.substring(jsonStartIdx);
//
//           try {
//             // Пытаемся распарсить JSON напрямую, если это возможно
//             const result = this.tryParseJsonFromString(jsonStr);
//             if (result.valid) {
//               jsonEndIdx = jsonStartIdx + result.length - 1;
//             }
//           } catch (e) {
//             error = `Невозможно распарсить незавершенный JSON: ${e instanceof Error ? e.message : String(e)}`;
//             break;
//           }
//
//           if (jsonEndIdx === -1) {
//             error = 'Не удалось определить конец JSON в незавершенном UI-блоке';
//             break;
//           }
//
//           const customId = remainder.substring(idStartIdx + 1, idEndIdx);
//           const jsonString = remainder.substring(jsonStartIdx, jsonEndIdx + 1);
//
//           try {
//             // Парсим JSON
//             const payload = JSON.parse(jsonString);
//
//             // Создаем custom-блок
//             blocks.push({
//               $: 'custom',
//               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//               // @ts-ignore
//               code: `[${customId}]`,
//               payload
//             });
//
//             remainder = '';
//             break;
//
//           } catch (e) {
//             error = `Ошибка парсинга JSON в незавершенном UI-блоке: ${e instanceof Error ? e.message : String(e)}`;
//             break;
//           }
//         }
//
//         // Извлекаем полный блок
//         const fullBlock = remainder.substring(0, endIdx + 3); // +3 для учета :::
//
//         // Извлекаем ID блока из [...]
//         const idStartIdx = fullBlock.indexOf('[');
//         const idEndIdx = fullBlock.indexOf(']', idStartIdx);
//
//         if (idStartIdx === -1 || idEndIdx === -1) {
//           error = 'Некорректный формат ID блока';
//           remainder = remainder.substring(endIdx + 3);
//           startIdx = remainder.indexOf(':::custom-ui:');
//           continue;
//         }
//
//         const customId = fullBlock.substring(idStartIdx + 1, idEndIdx);
//
//         // Ищем начало JSON
//         const jsonStartIdx = fullBlock.indexOf('{', idEndIdx);
//         const jsonEndIdx = this.findJsonEnd(fullBlock, jsonStartIdx);
//
//         if (jsonStartIdx === -1 || jsonEndIdx === -1) {
//           error = 'Некорректный формат JSON в UI-блоке';
//           remainder = remainder.substring(endIdx + 3);
//           startIdx = remainder.indexOf(':::custom-ui:');
//           continue;
//         }
//
//         const jsonString = fullBlock.substring(jsonStartIdx, jsonEndIdx + 1);
//
//         try {
//           // Парсим JSON
//           const payload = JSON.parse(jsonString);
//
//           // Создаем custom-блок
//           blocks.push({
//             $: 'custom',
//             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             // @ts-ignore
//             code: `[${customId}]`,
//             payload
//           });
//
//         } catch (e) {
//           error = `Ошибка парсинга JSON: ${e instanceof Error ? e.message : String(e)}`;
//           console.error(error, { jsonString });
//         }
//
//         // Обновляем remainder
//         remainder = remainder.substring(endIdx + 3);
//
//         // Ищем следующий блок
//         startIdx = remainder.indexOf(':::custom-ui:');
//       }
//
//       // Если остался текст и был хотя бы один блок, добавляем его как markdown
//       // Но только если это не финальный парсинг или не было найдено UI-блоков
//       if (remainder && !remainder.includes(':::custom-ui:') && (!finalParse || blocks.length === 0)) {
//         const markdownContent = remainder.trim();
//         if (markdownContent) {
//           blocks.push({
//             $: 'markdown',
//             payload: markdownContent
//           });
//           remainder = '';
//         }
//       }
//
//     } catch (e) {
//       error = `Непредвиденная ошибка при парсинге: ${e instanceof Error ? e.message : String(e)}`;
//       console.error(error);
//     }
//
//     return { blocks, remainder, error };
//   }
//
//   /**
//    * Находит позицию закрывающего тега :::
//    * @param content Контент для поиска
//    * @returns Индекс начала закрывающего тега или -1, если не найден
//    */
//   private findClosingTag(content: string): number {
//     // Ищем закрывающие ::: после открывающего тега
//     const startTagEnd = content.indexOf('custom-ui:') + 'custom-ui:'.length;
//     return content.indexOf(':::', startTagEnd);
//   }
//
//   /**
//    * Находит конец JSON-объекта, учитывая вложенность
//    * @param content Контент для поиска
//    * @param startIdx Начальная позиция (открывающая скобка {)
//    * @returns Индекс закрывающей скобки } или -1, если не найдена
//    */
//   private findJsonEnd(content: string, startIdx: number): number {
//     if (startIdx === -1 || content[startIdx] !== '{') {
//       return -1;
//     }
//
//     let openBraces = 1;
//     let i = startIdx + 1;
//
//     while (i < content.length && openBraces > 0) {
//       // Пропускаем строки в кавычках
//       if (content[i] === '"') {
//         i++;
//         while (i < content.length && content[i] !== '"') {
//           // Пропускаем экранированные кавычки
//           if (content[i] === '\\' && i + 1 < content.length) {
//             i += 2;
//           } else {
//             i++;
//           }
//         }
//       }
//
//       if (content[i] === '{') {
//         openBraces++;
//       } else if (content[i] === '}') {
//         openBraces--;
//       }
//
//       i++;
//     }
//
//     return openBraces === 0 ? i - 1 : -1;
//   }
//
//   /**
//    * Пытается распарсить JSON из строки, даже если она содержит дополнительные символы после JSON
//    * @param jsonStr Строка, предположительно содержащая JSON
//    * @returns Объект с результатом парсинга
//    */
//   private tryParseJsonFromString(jsonStr: string): { valid: boolean, length: number } {
//     let openBraces = 0;
//     let inString = false;
//     let escaped = false;
//     let length = 0;
//
//     for (let i = 0; i < jsonStr.length; i++) {
//       const char = jsonStr[i];
//
//       if (inString) {
//         if (escaped) {
//           escaped = false;
//         } else if (char === '\\') {
//           escaped = true;
//         } else if (char === '"') {
//           inString = false;
//         }
//       } else if (char === '"') {
//         inString = true;
//       } else if (char === '{') {
//         openBraces++;
//       } else if (char === '}') {
//         openBraces--;
//
//         if (openBraces === 0) {
//           length = i + 1;
//           // Проверяем, можно ли распарсить найденный JSON
//           try {
//             const potentialJson = jsonStr.substring(0, length);
//             JSON.parse(potentialJson);
//             return { valid: true, length };
//           } catch {
//             // Продолжаем поиск
//           }
//         }
//       }
//     }
//
//     return { valid: false, length: 0 };
//   }
// }
