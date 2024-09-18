import { TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';
import { PrizmMutationObserverService } from './mutation-observer.service';
import { take } from 'rxjs/operators';

describe('PrizmMutationObserverService 2', () => {
  let service: PrizmMutationObserverService;
  let element1: HTMLElement;
  let element2: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrizmMutationObserverService],
    });
    service = TestBed.inject(PrizmMutationObserverService);

    // Создаем тестовые элементы
    element1 = document.createElement('div');
    element2 = document.createElement('div');
    document.body.appendChild(element1);
    document.body.appendChild(element2);
  });

  afterEach(() => {
    document.body.removeChild(element1);
    document.body.removeChild(element2);
    jest.clearAllMocks();
    service.disconnectAll(); // Очистка всех наблюдений после каждого теста
  });

  // 1. Тесты на базовый функционал

  it('should create a MutationObserver and start observing the element', () => {
    const element = document.createElement('div');
    const callback = jest.fn();

    service.observe(element, callback);

    expect(service['observers'].has(element)).toBe(true);
    expect(service['observers'].get(element)).toBeInstanceOf(MutationObserver);
  });

  it('should return an observable if the element is being observed', () => {
    const element = document.createElement('div');
    const callback = jest.fn();

    service.observe(element, callback);

    const observable = service.get$(element);
    expect(observable).not.toBe(EMPTY);
  });

  it('should return EMPTY if the element is not being observed', () => {
    const element = document.createElement('div');

    const observable = service.get$(element);
    expect(observable).toBe(EMPTY);
  });

  // 2. Тесты на завершение наблюдения

  it('should disconnect the MutationObserver and clean up resources', () => {
    const element = document.createElement('div');
    const callback = jest.fn();

    service.observe(element, callback);
    service.disconnect(element);

    expect(service['observers'].has(element)).toBe(false);
    expect(service['observersSubjects'].has(element)).toBe(false);
  });

  it('should disconnect all MutationObservers and clean up all resources', () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const callback = jest.fn();

    service.observe(element1, callback);
    service.observe(element2, callback);

    service.disconnectAll();

    expect(service['observers'].size).toBe(0);
    expect(service['observersSubjects'].size).toBe(0);
  });

  it('should observe mutations with the provided configuration', () => {
    const element = document.createElement('div');
    const callback = jest.fn();

    const config: MutationObserverInit = { attributes: true, childList: true, subtree: true };

    service.observe(element, callback, config);

    const observer = service['observers'].get(element);
    expect(observer).toBeInstanceOf(MutationObserver);
  });

  it('should observe multiple elements with the same callback', () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const callback = jest.fn();

    service.observe(element1, callback);
    service.observe(element2, callback);

    expect(service['observers'].size).toBe(2);
    expect(service['observers'].get(element1)).toBeInstanceOf(MutationObserver);
    expect(service['observers'].get(element2)).toBeInstanceOf(MutationObserver);
  });

  it('should disconnect all MutationObservers and clean up resources on ngOnDestroy', () => {
    const element = document.createElement('div');
    const callback = jest.fn();

    service.observe(element, callback);
    service.ngOnDestroy();

    expect(service['observers'].size).toBe(0);
    expect(service['observersSubjects'].size).toBe(0);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should observe a single element and trigger callback', () => {
    const callback = jest.fn();

    service.observe(element1, callback);

    // Модифицируем элемент
    element1.textContent = 'New Content';

    // Имитация вызова наблюдателя
    const observer = service['observers'].get(element1)!;
    observer.takeRecords().forEach(mutation => callback([mutation], observer));

    // Проверяем, что колбэк был вызван
    expect(callback).toHaveBeenCalled();
  });

  it('should observe multiple elements and trigger callbacks', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    service.observe(element1, callback1);
    service.observe(element2, callback2);

    // Модифицируем элементы
    element1.textContent = 'New Content 1';
    element2.textContent = 'New Content 2';

    // Имитация вызова наблюдателей
    const observer1 = service['observers'].get(element1)!;
    observer1.takeRecords().forEach(mutation => callback1([mutation], observer1));

    const observer2 = service['observers'].get(element2)!;
    observer2.takeRecords().forEach(mutation => callback2([mutation], observer2));

    // Проверяем, что колбэки были вызваны
    expect(callback1).toHaveBeenCalled();
    expect(callback2).toHaveBeenCalled();
  });

  it('should not observe the same element twice', () => {
    const callback = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    service.observe(element1, callback);
    service.observe(element1, callback);

    // Проверяем, что было выведено предупреждение
    expect(warnSpy).toHaveBeenCalledWith('MutationObserver already exists for element.');

    warnSpy.mockRestore();
  });

  it('should warn when disconnecting a non-observed element', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    service.disconnect(element1);

    // Проверяем, что было выведено предупреждение
    expect(warnSpy).toHaveBeenCalledWith('No MutationObserver found for element.');

    warnSpy.mockRestore();
  });

  it('should disconnect all observers', () => {
    const callback = jest.fn();

    service.observe(element1, callback);
    service.observe(element2, callback);

    service.disconnectAll();

    expect(service['observers'].size).toBe(0);
  });

  it('should correctly handle different configurations', () => {
    const callback = jest.fn();

    service.observe(element1, callback, { attributes: true });

    // Модифицируем атрибут элемента
    element1.setAttribute('data-test', 'value');

    // Имитация вызова наблюдателя
    const observer = service['observers'].get(element1)!;
    observer.takeRecords().forEach(mutation => callback([mutation], observer));

    // Проверяем, что колбэк был вызван
    expect(callback).toHaveBeenCalled();
  });

  it('should handle massive element changes', () => {
    const callback = jest.fn();

    service.observe(element1, callback, { childList: true });

    // Массовое добавление/удаление детей
    for (let i = 0; i < 100; i++) {
      const child = document.createElement('div');
      element1.appendChild(child);
      element1.removeChild(child);
    }

    // Имитация вызова наблюдателя
    const observer = service['observers'].get(element1)!;
    observer.takeRecords().forEach(mutation => callback([mutation], observer));

    // Проверяем, что колбэк был вызван
    expect(callback).toHaveBeenCalled();
  });

  it('should not throw an error when disconnecting a previously disconnected element', () => {
    const callback = jest.fn();

    service.observe(element1, callback);
    service.disconnect(element1);

    // Второй вызов disconnect не должен выбрасывать ошибку
    expect(() => service.disconnect(element1)).not.toThrow();
  });

  it('should emit mutation events through Observable', done => {
    service.observe(element1, () => {});

    // Подписываемся на Observable
    service['observersSubjects']
      .get(element1)!
      .pipe(
        take(1) // Берем только первое событие
      )
      .subscribe(({ mutations }) => {
        expect(mutations.length).toBeGreaterThan(0);
        done();
      });

    // Модифицируем элемент
    element1.textContent = 'New Content';

    // Имитация вызова наблюдателя
    const observer = service['observers'].get(element1)!;
    observer.takeRecords().forEach(mutation => {
      service['observersSubjects'].get(element1)!.next({ mutations: [mutation], observer });
    });
  });

  it('should complete Observable when disconnecting a specific element', done => {
    service.observe(element1, () => {});

    const subject = service['observersSubjects'].get(element1)!;

    subject.subscribe({
      complete: () => {
        expect(true).toBeTruthy();
        done();
      },
    });

    service.disconnect(element1); // Вызов disconnect должен завершить Observable
  });

  it('should complete all Observables when disconnectAll is called', done => {
    service.observe(element1, () => {});
    service.observe(element2, () => {});

    const subject1 = service['observersSubjects'].get(element1)!;
    const subject2 = service['observersSubjects'].get(element2)!;

    let completedCount = 0;

    const checkCompletion = () => {
      completedCount++;
      if (completedCount === 2) {
        expect(true).toBeTruthy();
        done();
      }
    };

    subject1.subscribe({
      complete: checkCompletion,
    });

    subject2.subscribe({
      complete: checkCompletion,
    });

    service.disconnectAll(); // Вызов disconnectAll должен завершить оба Observable
  });
});
