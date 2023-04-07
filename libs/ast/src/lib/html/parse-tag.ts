import { PrizmHtmlComment, PrizmHtmlItem } from './types';

import { prizmHtmlVoidElements } from './element';

const prizmAttrRegular = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

/**
 * Функция для разбора тега HTML.
 *
 * @param {string} tag - Тег HTML, который необходимо разобрать.
 * @returns {PrizmHtmlItem | PrizmHtmlComment} - Объект с информацией о теге или комментарии.
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
export const prizmParseTag = (tag: string): PrizmHtmlItem | PrizmHtmlComment => {
  // Создание объекта для хранения информации о теге
  const res: PrizmHtmlItem = {
    type: 'tag',
    name: '',
    voidElement: false,
    attrs: {},
    children: [],
  };

  // Находим имя тега и его тип (открывающий, закрывающий или пустой)
  const tagMatch = tag.match(/<\/?([^\s]+?)[/\s>]/);
  if (tagMatch) {
    res.name = tagMatch[1];
    // Определяем, является ли тег пустым (void) элементом
    res.voidElement = prizmHtmlVoidElements.includes(tagMatch[1]) || tag.charAt(tag.length - 2) === '/';

    // Обработка комментариев
    if (res.name.startsWith('!--')) {
      const endIndex = tag.indexOf('-->');
      return {
        type: 'comment',
        comment: endIndex !== -1 ? tag.slice(4, endIndex) : '',
      };
    }
  }

  // Создание нового регулярного выражения на основе prizmAttrRegular
  const reg = new RegExp(prizmAttrRegular);
  let result = null;
  for (;;) {
    // Проходимся по всем найденным атрибутам в теге
    result = reg.exec(tag);

    // Если результат пустой, значит, все атрибуты разобраны
    if (result === null) {
      break;
    }

    // Если текущий результат - пустая строка, пропускаем его
    if (!result[0].trim()) {
      continue;
    }

    // Если найден атрибут без значения
    if (result[1]) {
      const attr = result[1].trim();
      let arr = [attr, ''];

      // Если атрибут содержит символ "=", разбиваем его на ключ и значение
      if (attr.indexOf('=') > -1) {
        arr = attr.split('=');
      }

      // Сохраняем атрибут и его значение в объекте res
      res.attrs[arr[0]] = arr[1];
      // Уменьшаем индекс для следующей итерации, чтобы не пропустить символы
      reg.lastIndex--;
    } else if (result[2]) {
      // Если найден атрибут с значением (в кавычках), сохраняем его в объекте res
      res.attrs[result[2]] = result[3].trim().substring(1, result[3].length - 1);
    }
  }

  // Возвращаем объект с информацией о теге
  return res;
};
