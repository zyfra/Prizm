import { Injectable, OnDestroy } from '@angular/core';
import { EMPTY, Subject, Observable } from 'rxjs';

export type PrizmMutationObserverItem = {
  mutations: MutationRecord[];
  observer: MutationObserver;
};

@Injectable()
export class PrizmMutationObserverService implements OnDestroy {
  private observers = new Map<Element, MutationObserver>();
  private observersSubjects = new Map<Element, Subject<PrizmMutationObserverItem>>();

  public get$(element: Element): Observable<PrizmMutationObserverItem> {
    return this.observersSubjects.get(element)?.asObservable() ?? EMPTY;
  }

  public observe(
    element: Element,
    callback: MutationCallback = () => null,
    config: MutationObserverInit = { childList: true, subtree: true }
  ): this {
    if (this.observers.has(element)) {
      console.warn(`MutationObserver already exists for element.`);
      return this;
    }

    const subject = new Subject<PrizmMutationObserverItem>();
    this.observersSubjects.set(element, subject);

    const observer = new MutationObserver((mutations, observer) => {
      callback(mutations, observer);
      subject.next({ mutations, observer });
    });

    observer.observe(element, config);
    this.observers.set(element, observer);

    return this;
  }

  public disconnect(element: Element): void {
    const observer = this.observers.get(element);
    if (observer) {
      observer.disconnect();
      this.cleanupObserver(element);
    } else {
      console.warn(`No MutationObserver found for element.`);
    }
  }

  public disconnectAll(): void {
    this.observers.forEach((observer, element) => {
      observer.disconnect();
      this.cleanupObserver(element);
    });
  }

  private cleanupObserver(element: Element): void {
    this.observers.delete(element);
    const subject = this.observersSubjects.get(element);
    if (subject) {
      subject.complete();
      this.observersSubjects.delete(element);
    }
  }

  public ngOnDestroy(): void {
    this.disconnectAll();
  }
}
