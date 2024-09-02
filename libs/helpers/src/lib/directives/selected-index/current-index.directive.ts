import { ChangeDetectorRef, Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmMutationObserverService } from '../../services/mutation-observer';

@Directive({
  selector: '[prizmCurrentIndex]',
  standalone: true,
  providers: [PrizmMutationObserverService], // Регистрируем сервис на уровне директивы
})
export class PrizmCurrentIndexDirective implements OnInit, OnDestroy {
  private indexSubject = new BehaviorSubject<number>(-1);
  private lengthSubject = new BehaviorSubject<number>(0);
  private lastIndexSubject = new BehaviorSubject<number>(-1);

  private readonly cdRef = inject(ChangeDetectorRef);
  public readonly index$: Observable<number> = this.indexSubject.asObservable();
  public readonly lastIndex$: Observable<number> = this.lastIndexSubject.asObservable();
  public readonly length$: Observable<number> = this.lengthSubject.asObservable();

  get index() {
    return this.indexSubject.value;
  }

  get lastIndex() {
    return this.lastIndexSubject.value;
  }

  get length() {
    return this.lastIndexSubject.value;
  }

  get isFirst() {
    return this.index === 0;
  }

  get isLast() {
    return this.index === this.lastIndex;
  }

  constructor(
    private el: ElementRef,
    private mutationObserverService: PrizmMutationObserverService // Используем сервис
  ) {}

  ngOnInit(): void {
    this.updateIndexes();
    // Подписываемся на изменения в DOM через PrizmMutationObserverService
    this.mutationObserverService.observe(this.el.nativeElement.parentNode, () => this.updateIndexes());
  }

  ngOnDestroy(): void {
    this.mutationObserverService.disconnectAll();
  }

  private updateIndexes(): void {
    const parent = this.el.nativeElement.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, this.el.nativeElement);
    const lastIndex = parent.children.length - 1;

    this.indexSubject.next(index);
    this.lastIndexSubject.next(lastIndex);
    this.lengthSubject.next(parent.children.length);
    this.cdRef.markForCheck();
  }
}
