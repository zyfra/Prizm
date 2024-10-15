import { Observable } from 'rxjs';

export function prizmCreateResizeObservable(element: HTMLElement): Observable<ResizeObserverEntry[]> {
  return new Observable<ResizeObserverEntry[]>(observer => {
    // Создаем новый ResizeObserver
    const resizeObserver = new ResizeObserver(entries => {
      // Передаем изменения в observable
      observer.next(entries);
    });

    // Начинаем наблюдение за изменениями размеров указанного элемента
    resizeObserver.observe(element);

    // Возвращаем функцию очистки, которая будет вызвана при завершении подписки
    return () => {
      resizeObserver.disconnect();
    };
  });
}
