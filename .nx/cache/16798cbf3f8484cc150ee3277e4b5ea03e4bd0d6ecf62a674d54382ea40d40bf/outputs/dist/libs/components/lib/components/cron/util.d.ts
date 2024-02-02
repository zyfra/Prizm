import { PrizmCronUiDayType } from './model';
import { PrizmInputCarouselArrayContent } from '../input/carousel';
export declare function getArrWithStringNumbers(length: number, start?: number, withZero?: boolean): string[];
export declare function getCarousel(length: number, start?: number): PrizmInputCarouselArrayContent<string>;
export declare function getArrWithWeekNumber(): string[];
export declare function getCarouselWeek(): PrizmInputCarouselArrayContent<string>;
export declare function prizmConvertDayToType(day: string, dayOfWeek: string): PrizmCronUiDayType;
/**
 * Определяет, может ли элемент списка Cron отобразиться на основе переданных элементов и проверяемого элемента.
 *
 * @param {unknown[]} items - Массив элементов, которые могут быть отображены.
 * @param {unknown} item - Элемент, который необходимо проверить на возможность отображения.
 * @returns {boolean} Возвращает true, если список элементов пуст и проверяемый элемент содержится в нем, иначе false.
 */
export declare function canShowCronListItem(items: unknown[], item: unknown): boolean;
