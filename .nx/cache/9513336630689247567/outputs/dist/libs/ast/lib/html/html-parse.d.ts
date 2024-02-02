import type { PrizmHtmlOptions } from './types';
/**
 * Разбирает строку HTML и возвращает массив объектов, представляющих структуру HTML-документа.
 *
 * @param {string} html - Входная строка HTML для разбора.
 * @param {Partial<PrizmHtmlOptions>} [options={}] - Необязательные параметры для настройки разбора HTML.
 * @param {Object} options.components - Объект с компонентами, которые должны быть обработаны особым образом при разборе.
 *
 * @returns {PrizmMaybeHtmlItem[]} Массив объектов, представляющих элементы HTML-документа.
 *
 * @example
 * const htmlString = '<div><p>Hello, world!</p></div>';
 * const result = prizmHtmlParse(htmlString);
 * // Результат: массив объектов, представляющих элементы HTML-документа
 */
export declare const prizmAstHtmlParse: (html: string, options?: Partial<PrizmHtmlOptions>) => any;
