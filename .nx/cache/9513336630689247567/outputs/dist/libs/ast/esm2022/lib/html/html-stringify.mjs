"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstHtmlStringify = exports.stringify = exports.attrToString = void 0;
const prettify_1 = require("./prettify");
/**
 * Преобразует объект атрибутов в строку атрибутов HTML.
 *
 * @param {PrizmHtmlAttr} attrs - Объект атрибутов для преобразования.
 * @returns {string} Строка атрибутов HTML.
 */
function attrToString(attrs) {
    // Массив для хранения пар атрибут-значение
    const buff = [];
    // Итерация по объекту атрибутов и добавление пар атрибут-значение в массив
    for (const key in attrs) {
        if (attrs[key] === null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            buff.push(key);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
        }
        else
            buff.push(key + '="' + attrs[key] + '"');
    }
    // Если массив пуст, возвращаем пустую строку
    if (!buff.length) {
        return '';
    }
    // Возвращаем строку атрибутов, разделенных пробелами
    return ' ' + buff.join(' ');
}
exports.attrToString = attrToString;
/**
 * Рекурсивно преобразует объекты PrizmHtmlItem в строку HTML.
 *
 * @param {string} buff - Буфер для хранения преобразованной строки HTML.
 * @param {PrizmAstHtmlItem} doc - Объект PrizmHtmlItem для преобразования.
 * @returns {string} Строка HTML, представляющая объект PrizmHtmlItem.
 */
function stringify(buff, doc) {
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
exports.stringify = stringify;
/**
 * Преобразует массив объектов PrizmHtmlItem в строку HTML.
 *
 * @param {PrizmAstHtmlItem[]} doc - Массив объектов PrizmHtmlItem для преобразования.
 * @returns {string} Строка HTML, представляющая массив объектов PrizmHtmlItem.
 */
const prizmAstHtmlStringify = (doc, prettier = true) => {
    let result = doc.reduce(function (token, rootEl) {
        // Для каждого элемента в массиве вызываем функцию stringify и склеиваем результаты
        return token + stringify('', rootEl);
    }, '');
    if (prettier)
        result = (0, prettify_1.prizmAstHtmlPrettify)(result);
    return result;
};
exports.prizmAstHtmlStringify = prizmAstHtmlStringify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1zdHJpbmdpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9zcmMvbGliL2h0bWwvaHRtbC1zdHJpbmdpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUNBQWtEO0FBRWxEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLEtBQW9CO0lBQy9DLDJDQUEyQztJQUMzQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFFaEIsMkVBQTJFO0lBQzNFLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3ZCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN2Qiw2REFBNkQ7WUFDN0QsYUFBYTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBVSxDQUFDLENBQUM7WUFDdEIsNkRBQTZEO1lBQzdELGFBQWE7U0FDZDs7WUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsNkNBQTZDO0lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxxREFBcUQ7SUFDckQsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBdEJELG9DQXNCQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsR0FBcUI7SUFDM0QsNEJBQTRCO0lBQzVCLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNoQixLQUFLLE1BQU07WUFDVCx1REFBdUQ7WUFDdkQsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM1QixLQUFLLEtBQUs7WUFDUix5RkFBeUY7WUFDekYsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJHLG9EQUFvRDtZQUNwRCxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCw4RUFBOEU7WUFDOUUsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUMzRSxLQUFLLFNBQVM7WUFDWixvREFBb0Q7WUFDcEQsSUFBSSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztRQUNkO1lBQ0UsT0FBTyxFQUFFLENBQUM7S0FDYjtBQUNILENBQUM7QUF4QkQsOEJBd0JDO0FBRUQ7Ozs7O0dBS0c7QUFDSSxNQUFNLHFCQUFxQixHQUFHLENBQUMsR0FBdUIsRUFBRSxRQUFRLEdBQUcsSUFBSSxFQUFVLEVBQUU7SUFDeEYsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQWEsRUFBRSxNQUF3QjtRQUN2RSxtRkFBbUY7UUFDbkYsT0FBTyxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFJLFFBQVE7UUFBRSxNQUFNLEdBQUcsSUFBQSwrQkFBb0IsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFSVyxRQUFBLHFCQUFxQix5QkFRaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcml6bUh0bWxBdHRyLCBQcml6bUFzdEh0bWxJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBwcml6bUFzdEh0bWxQcmV0dGlmeSB9IGZyb20gJy4vcHJldHRpZnknO1xuXG4vKipcbiAqINCf0YDQtdC+0LHRgNCw0LfRg9C10YIg0L7QsdGK0LXQutGCINCw0YLRgNC40LHRg9GC0L7QsiDQsiDRgdGC0YDQvtC60YMg0LDRgtGA0LjQsdGD0YLQvtCyIEhUTUwuXG4gKlxuICogQHBhcmFtIHtQcml6bUh0bWxBdHRyfSBhdHRycyAtINCe0LHRitC10LrRgiDQsNGC0YDQuNCx0YPRgtC+0LIg0LTQu9GPINC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40Y8uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSDQodGC0YDQvtC60LAg0LDRgtGA0LjQsdGD0YLQvtCyIEhUTUwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyVG9TdHJpbmcoYXR0cnM6IFByaXptSHRtbEF0dHIpOiBzdHJpbmcge1xuICAvLyDQnNCw0YHRgdC40LIg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0L/QsNGAINCw0YLRgNC40LHRg9GCLdC30L3QsNGH0LXQvdC40LVcbiAgY29uc3QgYnVmZiA9IFtdO1xuXG4gIC8vINCY0YLQtdGA0LDRhtC40Y8g0L/QviDQvtCx0YrQtdC60YLRgyDQsNGC0YDQuNCx0YPRgtC+0LIg0Lgg0LTQvtCx0LDQstC70LXQvdC40LUg0L/QsNGAINCw0YLRgNC40LHRg9GCLdC30L3QsNGH0LXQvdC40LUg0LIg0LzQsNGB0YHQuNCyXG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzW2tleV0gPT09IG51bGwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJ1ZmYucHVzaChrZXkgYXMgYW55KTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICB9IGVsc2UgYnVmZi5wdXNoKGtleSArICc9XCInICsgYXR0cnNba2V5XSArICdcIicpO1xuICB9XG5cbiAgLy8g0JXRgdC70Lgg0LzQsNGB0YHQuNCyINC/0YPRgdGCLCDQstC+0LfQstGA0LDRidCw0LXQvCDQv9GD0YHRgtGD0Y4g0YHRgtGA0L7QutGDXG4gIGlmICghYnVmZi5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyDQktC+0LfQstGA0LDRidCw0LXQvCDRgdGC0YDQvtC60YMg0LDRgtGA0LjQsdGD0YLQvtCyLCDRgNCw0LfQtNC10LvQtdC90L3Ri9GFINC/0YDQvtCx0LXQu9Cw0LzQuFxuICByZXR1cm4gJyAnICsgYnVmZi5qb2luKCcgJyk7XG59XG5cbi8qKlxuICog0KDQtdC60YPRgNGB0LjQstC90L4g0L/RgNC10L7QsdGA0LDQt9GD0LXRgiDQvtCx0YrQtdC60YLRiyBQcml6bUh0bWxJdGVtINCyINGB0YLRgNC+0LrRgyBIVE1MLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBidWZmIC0g0JHRg9GE0LXRgCDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QvdC+0Lkg0YHRgtGA0L7QutC4IEhUTUwuXG4gKiBAcGFyYW0ge1ByaXptQXN0SHRtbEl0ZW19IGRvYyAtINCe0LHRitC10LrRgiBQcml6bUh0bWxJdGVtINC00LvRjyDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNGPLlxuICogQHJldHVybnMge3N0cmluZ30g0KHRgtGA0L7QutCwIEhUTUwsINC/0YDQtdC00YHRgtCw0LLQu9GP0Y7RidCw0Y8g0L7QsdGK0LXQutGCIFByaXptSHRtbEl0ZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkoYnVmZjogc3RyaW5nLCBkb2M6IFByaXptQXN0SHRtbEl0ZW0pOiBzdHJpbmcge1xuICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0YLQuNC/0L7QsiDRjdC70LXQvNC10L3RgtC+0LJcbiAgc3dpdGNoIChkb2MudHlwZSkge1xuICAgIGNhc2UgJ3RleHQnOlxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGC0LXQutGB0YLQvtCy0YvQuSDQutC+0L3RgtC10L3RgiDQsiDQsdGD0YTQtdGAINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC10LPQvlxuICAgICAgcmV0dXJuIGJ1ZmYgKyBkb2MuY29udGVudDtcbiAgICBjYXNlICd0YWcnOlxuICAgICAgLy8g0KTQvtGA0LzQuNGA0L7QstCw0L3QuNC1INC+0YLQutGA0YvQstCw0Y7RidC10LPQviDRgtC10LPQsCDRgSDQsNGC0YDQuNCx0YPRgtCw0LzQuCDQuCDQt9Cw0LrRgNGL0LLQsNGO0YnQtdCz0L4g0YLQtdCz0LAgKNC10YHQu9C4INGN0LvQtdC80LXQvdGCINC90LUg0L/Rg9GB0YIpXG4gICAgICBidWZmICs9ICc8JyArIGRvYy5uYW1lICsgKGRvYy5hdHRycyA/IGF0dHJUb1N0cmluZyhkb2MuYXR0cnMpIDogJycpICsgKGRvYy52b2lkRWxlbWVudCA/ICcvPicgOiAnPicpO1xuXG4gICAgICAvLyDQldGB0LvQuCDRjdC70LXQvNC10L3RgiDQv9GD0YHRgiwg0LLQvtC30LLRgNCw0YnQsNC10Lwg0LHRg9GE0LXRgCDQsdC10Lcg0LjQt9C80LXQvdC10L3QuNC5XG4gICAgICBpZiAoZG9jLnZvaWRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBidWZmO1xuICAgICAgfVxuXG4gICAgICAvLyDQoNC10LrRg9GA0YHQuNCy0L3QviDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0LTQvtGH0LXRgNC90LjQtSDRjdC70LXQvNC10L3RgtGLINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INGB0YTQvtGA0LzQuNGA0L7QstCw0L3QvdGL0Lkg0LHRg9GE0LXRgFxuICAgICAgcmV0dXJuIGJ1ZmYgKyBkb2MuY2hpbGRyZW4ucmVkdWNlKHN0cmluZ2lmeSwgJycpICsgJzwvJyArIGRvYy5uYW1lICsgJz4nO1xuICAgIGNhc2UgJ2NvbW1lbnQnOlxuICAgICAgLy8g0KTQvtGA0LzQuNGA0L7QstCw0L3QuNC1INC60L7QvNC80LXQvdGC0LDRgNC40Y8g0Lgg0LTQvtCx0LDQstC70LXQvdC40LUg0LXQs9C+INCyINCx0YPRhNC10YBcbiAgICAgIGJ1ZmYgKz0gJzwhLS0nICsgZG9jLmNvbW1lbnQgKyAnLS0+JztcbiAgICAgIHJldHVybiBidWZmO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuLyoqXG4gKiDQn9GA0LXQvtCx0YDQsNC30YPQtdGCINC80LDRgdGB0LjQsiDQvtCx0YrQtdC60YLQvtCyIFByaXptSHRtbEl0ZW0g0LIg0YHRgtGA0L7QutGDIEhUTUwuXG4gKlxuICogQHBhcmFtIHtQcml6bUFzdEh0bWxJdGVtW119IGRvYyAtINCc0LDRgdGB0LjQsiDQvtCx0YrQtdC60YLQvtCyIFByaXptSHRtbEl0ZW0g0LTQu9GPINC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40Y8uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSDQodGC0YDQvtC60LAgSFRNTCwg0L/RgNC10LTRgdGC0LDQstC70Y/RjtGJ0LDRjyDQvNCw0YHRgdC40LIg0L7QsdGK0LXQutGC0L7QsiBQcml6bUh0bWxJdGVtLlxuICovXG5leHBvcnQgY29uc3QgcHJpem1Bc3RIdG1sU3RyaW5naWZ5ID0gKGRvYzogUHJpem1Bc3RIdG1sSXRlbVtdLCBwcmV0dGllciA9IHRydWUpOiBzdHJpbmcgPT4ge1xuICBsZXQgcmVzdWx0ID0gZG9jLnJlZHVjZShmdW5jdGlvbiAodG9rZW46IHN0cmluZywgcm9vdEVsOiBQcml6bUFzdEh0bWxJdGVtKSB7XG4gICAgLy8g0JTQu9GPINC60LDQttC00L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0LIg0LzQsNGB0YHQuNCy0LUg0LLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiBzdHJpbmdpZnkg0Lgg0YHQutC70LXQuNCy0LDQtdC8INGA0LXQt9GD0LvRjNGC0LDRgtGLXG4gICAgcmV0dXJuIHRva2VuICsgc3RyaW5naWZ5KCcnLCByb290RWwpO1xuICB9LCAnJyk7XG5cbiAgaWYgKHByZXR0aWVyKSByZXN1bHQgPSBwcml6bUFzdEh0bWxQcmV0dGlmeShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdfQ==