import {
  AfterContentInit,
  AfterViewInit,
  booleanAttribute,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector:
    '[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]',
  exportAs: 'prizmLifecycle',
  standalone: true,
})
export class PrizmLifecycleDirective implements AfterViewInit, OnInit, OnDestroy, AfterContentInit {
  @Output()
  readonly prizmAfterViewInit = new EventEmitter<ElementRef>();

  @Output()
  readonly prizmOnInit = new EventEmitter<ElementRef>();

  @Output()
  readonly prizmAfterContentInit = new EventEmitter<ElementRef>();

  @Output()
  readonly prizmOnDestroy = new EventEmitter<ElementRef>();

  @Input({
    transform: booleanAttribute,
  })
  prizmLifecycleDisabled = false;
  private readonly afterViewInitSource$ = new ReplaySubject(1);
  readonly afterViewInit$ = this.afterViewInitSource$.pipe(debounceTime(0));

  constructor(
    @Inject(ElementRef)
    private readonly element: ElementRef<HTMLInputElement>
  ) {}

  ngAfterViewInit(): void {
    if (this.prizmLifecycleDisabled) return;
    this.prizmAfterViewInit.next(this.element);
    this.afterViewInitSource$.next(this.element);
  }

  ngAfterContentInit(): void {
    if (this.prizmLifecycleDisabled) return;
    this.prizmAfterContentInit.next(this.element);
  }

  ngOnDestroy(): void {
    if (this.prizmLifecycleDisabled) return;
    this.prizmOnDestroy.next(this.element);
  }

  ngOnInit(): void {
    if (this.prizmLifecycleDisabled) return;
    this.prizmOnInit.next(this.element);
  }
}
