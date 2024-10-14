import { PrizmOverflowReserveSpace } from './model';

export function hideOverflowElements(
  parent: HTMLElement,
  childItem: HTMLElement,
  options: {
    reserveSpace?: PrizmOverflowReserveSpace;
  } = {}
) {
  const containerRect = parent.getBoundingClientRect();
  const boxRect = childItem.getBoundingClientRect();
  // Проверка на пересечение по вертикали и горизонтали
  const isOverflowingVertically = boxRect.bottom + (options.reserveSpace?.y ?? 0) > containerRect.bottom;
  const isOverflowingHorizontally = boxRect.right + (options.reserveSpace?.x ?? 0) > containerRect.right;

  // Скрываем элемент, если он выходит за границы контейнера
  if (isOverflowingVertically || isOverflowingHorizontally) {
    if (childItem.style.display !== 'none') childItem.style.display = 'none';
  } else {
    // Восстанавливаем видимость элемента
    if (childItem.style.display) childItem.style.display = '';
  }
}
