import { PrizmHtmlComment, PrizmAstHtmlItem } from './types';
/**
 * Функция для разбора тега HTML.
 *
 * @param {string} tag - Тег HTML, который необходимо разобрать.
 * @returns {PrizmAstHtmlItem | PrizmHtmlComment} - Объект с информацией о теге или комментарии.
 * В случае тега, объект будет содержать следующие свойства:
 * - type: 'tag'
 * - name: имя тега
 * - voidElement: флаг, указывающий, является ли элемент пустым (void)
 * - attrs: объект, содержащий атрибуты тега и их значения
 * - children: массив дочерних элементов (пустой, заполняется в другой функции)
 * В случае комментария, объект будет содержать следующие свойства:
 * - type: 'comment'
 * - comment: текст комментария
 */
export declare const prizmParseTag: (tag: string) => PrizmAstHtmlItem | PrizmHtmlComment;
