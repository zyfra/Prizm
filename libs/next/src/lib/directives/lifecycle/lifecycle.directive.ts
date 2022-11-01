import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
    selector: '[pzmLifecycle], [pzmAfterViewInit], [pzmAfterContentInit], [pzmOnInit], [pzmOnDestroy]',
    exportAs: 'pzmLifecycle'
})
export class ZuiLifecycleDirective implements AfterViewInit, OnInit, OnDestroy, AfterContentInit {
    @Output()
    readonly pzmAfterViewInit = new EventEmitter<ElementRef>();

    @Output()
    readonly pzmOnInit = new EventEmitter<ElementRef>();

    @Output()
    readonly pzmAfterContentInit = new EventEmitter<ElementRef>();

    @Output()
    readonly pzmOnDestroy = new EventEmitter<ElementRef>();

    private readonly afterViewInitSource$ = new ReplaySubject(1);
    readonly afterViewInit$ = this.afterViewInitSource$.pipe(
      debounceTime(0)
    );

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
    ) {}

    ngAfterViewInit(): void {
      this.pzmAfterViewInit.next(this.element);
      this.afterViewInitSource$.next(this.element);
    }

    ngAfterContentInit(): void {
      this.pzmAfterContentInit.next(this.element);
    }

    ngOnDestroy(): void {
      this.pzmOnDestroy.next(this.element);
    }

    ngOnInit(): void {
      this.pzmOnInit.next(this.element);
    }
}
