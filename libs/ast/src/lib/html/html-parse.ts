import type { PrizmHtmlAttr, PrizmHtmlOptions } from './types';

import { prizmParseTag } from './parse-tag';
import { prizmAstHtmlPrettify } from './prettify';

// Регулярные выражения для поиска тегов и пробелов
const tagRE = /<[a-zA-Z0-9\-!/](?:"[^"]*"|'[^']*'|[^'">])*>/g;
const whitespaceRE = /^\s*$/;

// Пустой объект для быстрого поиска компонентов
const empty = Object.create(null);

// Определение типа, который может содержать свойства PrizmHtmlItem и PrizmHtmlComment
interface PrizmMaybeHtmlItem {
  type?: string;
  text?: string;
  content?: string;
  voidElement?: boolean;
  name?: string;
  style?: string[];
  attrs?: PrizmHtmlAttr;
  children?: PrizmMaybeHtmlItem[];
  comment?: string;
}

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
export const prizmAstHtmlParse = (html: string, options: Partial<PrizmHtmlOptions> = {}): any => {
  // очищаем от пробелов внтури тегов для правильно работы парсера
  html = prizmAstHtmlPrettify(html);
  // Инициализация переменных
  options || (options = {});
  options.components || (options.components = empty);
  const result: PrizmMaybeHtmlItem[] = [];
  const arr: PrizmMaybeHtmlItem[] = [];
  let current: PrizmMaybeHtmlItem;
  let level = -1;
  let inComponent = false;

  // Обработка текста на верхнем уровне
  if (html.indexOf('<') !== 0) {
    // ... создание текстового узла
    const end = html.indexOf('<');
    result.push({
      type: 'text',
      content: end === -1 ? html : html.substring(0, end),
    });
  }

  // Основной проход по HTML-строке с использованием регулярного выражения
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  html.replace(tagRE, function (tag, index) {
    // Обработка состояний внутри компонента
    if (inComponent) {
      // ... условия и выход из компонента
      if (tag !== '</' + current.name + '>') {
        return '';
      } else {
        inComponent = false;
      }
    }

    // Определение открывающегося и комментарного тега
    const isOpen = tag.charAt(1) !== '/';
    const isComment = tag.startsWith('<!--');
    const start = index + tag.length;
    const nextChar = html.charAt(start);

    let parent: PrizmMaybeHtmlItem | PrizmMaybeHtmlItem['children'];

    // Обработка комментария
    if (isComment) {
      // ... создание узла комментария и добавление в родительский элемент
      const comment = prizmParseTag(tag);

      // if we're at root, push new base node
      if (level < 0) {
        result.push(comment);
        return result;
      }
      parent = arr[level];
      if (parent && parent.children && Array.isArray(parent.children)) {
        parent.children.push(comment);
      }
      return result;
    }

    // Обработка открывающегося тега
    if (isOpen) {
      // ... увеличение уровня и разбор тега
      // ... обработка компонентов
      // ... добавление текстового узла внутри тега

      level++;

      current = prizmParseTag(tag);
      if (current.type === 'tag' && current.name && options.components && options.components[current.name]) {
        current.type = 'component';
        inComponent = true;
      }

      if (
        !current.voidElement &&
        !inComponent &&
        nextChar &&
        nextChar !== '<' &&
        Array.isArray(current.children)
      ) {
        current.children.push({
          type: 'text',
          content: html.slice(start, html.indexOf('<', start)),
        });
      }

      // Если находимся на корневом уровне, добавляем новый базовый узел
      if (level === 0) {
        result.push(current);
      }

      // Добавление текущего узла в родительский элемент
      parent = arr[level - 1];

      if (parent && parent.children) {
        parent.children.push(current);
      }

      // Сохранение текущего узла в массиве
      arr[level] = current;
    }

    // Обработка закрывающегося тега или пустого элемента
    if (!isOpen || current.voidElement) {
      // Если текущий элемент пустой или имя текущего элемента совпадает с именем закрывающего тега,
      // уменьшаем уровень и перемещаем current на уровень выше, чтобы соответствовать закрывающему тегу
      if (level > -1 && (current.voidElement || current.name === tag.slice(2, -1))) {
        level--;
        // move current up a level to match the end tag
        current = level === -1 ? (result as PrizmMaybeHtmlItem) : arr[level];
      }
      // Если мы не внутри компонента и следующий символ не является открывающим тегом, обрабатываем текстовый узел
      if (!inComponent && nextChar !== '<' && nextChar) {
        // Создаем текстовый узел и добавляем его к родительскому элементу
        parent = level === -1 ? result : (arr[level].children as PrizmMaybeHtmlItem[]);

        // Вычисляем правильный конец среза содержимого на случай, если после текстового узла нет тега
        const end = html.indexOf('<', start);
        let content = html.slice(start, end === -1 ? undefined : end);
        // Если узел состоит только из пробелов, сжимаем его в соответствии со спецификацией:
        // https://www.w3.org/TR/html4/struct/text.html#h-9.1
        if (whitespaceRE.test(content)) {
          content = ' ';
        }
        // Не добавляем текстовые узлы, состоящие только из пробелов, если они являются конечными или начальными текстовыми узлами
        if ((end > -1 && level + parent.length >= 0) || content !== ' ') {
          if (parent && Array.isArray(parent)) {
            parent.push({
              type: 'text',
              content: content,
            });
          }
        }
      }
    }
  });

  // Возвращаем результат разбора HTML
  return result;
};
