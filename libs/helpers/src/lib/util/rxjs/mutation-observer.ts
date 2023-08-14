import { Observable } from 'rxjs';

export function prizmFromMutationObserver$(
  target: HTMLElement,
  config?: MutationObserverInit
): Observable<MutationRecord[]> {
  return new Observable(observer => {
    const mutation = new MutationObserver((mutations, instance) => {
      observer.next(mutations);
    });
    mutation.observe(target, config);

    return () => {
      mutation.disconnect();
    };
  });
}
