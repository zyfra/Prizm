import { PrizmHtmlAttr, PrizmHtmlItem } from './types';

/**
 * Преобразует объект атрибутов в строку атрибутов HTML.
 *
 * @param {PrizmHtmlAttr} attrs - Объект атрибутов для преобразования.
 * @returns {string} Строка атрибутов HTML.
 */
export function attrToString(attrs: PrizmHtmlAttr): string {
  // Массив для хранения пар атрибут-значение
  const buff = [];

  // Итерация по объекту атрибутов и добавление пар атрибут-значение в массив
  for (const key in attrs) {
    if (attrs[key] === null) {
      buff.push(key);
    } else buff.push(key + '="' + attrs[key] + '"');
  }

  // Если массив пуст, возвращаем пустую строку
  if (!buff.length) {
    return '';
  }

  // Возвращаем строку атрибутов, разделенных пробелами
  return ' ' + buff.join(' ');
}

/**
 * Рекурсивно преобразует объекты PrizmHtmlItem в строку HTML.
 *
 * @param {string} buff - Буфер для хранения преобразованной строки HTML.
 * @param {PrizmHtmlItem} doc - Объект PrizmHtmlItem для преобразования.
 * @returns {string} Строка HTML, представляющая объект PrizmHtmlItem.
 */
export function stringify(buff: string, doc: PrizmHtmlItem): string {
  // Обработка типов элементов
  switch (doc.type) {
    case 'text':
      // Добавляем текстовый контент в буфер и возвращаем его
      return buff + doc.content;
    case 'tag':
      // Формирование открывающего тега с атрибутами и закрывающего тега (если элемент не пуст)
      buff += '<' + doc.name + (doc.attrs ? attrToString(doc.attrs) : '') + (doc.voidElement ? '/>' : '>');

      // Если элемент пуст, возвращаем буфер без изменений
      if (doc.voidElement) {
        return buff;
      }

      // Рекурсивно обрабатываем дочерние элементы и возвращаем сформированный буфер
      return buff + doc.children.reduce(stringify, '') + '</' + doc.name + '>';
    case 'comment':
      // Формирование комментария и добавление его в буфер
      buff += '<!--' + doc.comment + '-->';
      return buff;
    default:
      return '';
  }
}

/**
 * Преобразует массив объектов PrizmHtmlItem в строку HTML.
 *
 * @param {PrizmHtmlItem[]} doc - Массив объектов PrizmHtmlItem для преобразования.
 * @returns {string} Строка HTML, представляющая массив объектов PrizmHtmlItem.
 */
export const prizmHtmlStringify = (doc: PrizmHtmlItem[]) => {
  return doc.reduce(function (token: string, rootEl: PrizmHtmlItem) {
    // Для каждого элемента в массиве вызываем функцию stringify и склеиваем результаты
    return token + stringify('', rootEl);
  }, '');
};
