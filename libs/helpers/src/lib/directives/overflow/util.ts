export function hideOverflowElements(parent: HTMLElement, childItem: HTMLElement) {
  const containerRect = parent.getBoundingClientRect();
  const boxRect = childItem.getBoundingClientRect();
  // Проверка на пересечение по вертикали и горизонтали
  const isOverflowingVertically = boxRect.bottom > containerRect.bottom;
  const isOverflowingHorizontally = boxRect.right > containerRect.right;

  // Скрываем элемент, если он выходит за границы контейнера
  if (isOverflowingVertically || isOverflowingHorizontally) {
    if (childItem.style.display !== 'none') childItem.style.display = 'none';
  } else {
    // Восстанавливаем видимость элемента
    if (childItem.style.display) childItem.style.display = '';
  }
}
