import { PrizmHtmlAttr, PrizmAstHtmlItem } from './types';
/**
 * Преобразует объект атрибутов в строку атрибутов HTML.
 *
 * @param {PrizmHtmlAttr} attrs - Объект атрибутов для преобразования.
 * @returns {string} Строка атрибутов HTML.
 */
export declare function attrToString(attrs: PrizmHtmlAttr): string;
/**
 * Рекурсивно преобразует объекты PrizmHtmlItem в строку HTML.
 *
 * @param {string} buff - Буфер для хранения преобразованной строки HTML.
 * @param {PrizmAstHtmlItem} doc - Объект PrizmHtmlItem для преобразования.
 * @returns {string} Строка HTML, представляющая объект PrizmHtmlItem.
 */
export declare function stringify(buff: string, doc: PrizmAstHtmlItem): string;
/**
 * Преобразует массив объектов PrizmHtmlItem в строку HTML.
 *
 * @param {PrizmAstHtmlItem[]} doc - Массив объектов PrizmHtmlItem для преобразования.
 * @returns {string} Строка HTML, представляющая массив объектов PrizmHtmlItem.
 */
export declare const prizmAstHtmlStringify: (doc: PrizmAstHtmlItem[], prettier?: boolean) => string;
