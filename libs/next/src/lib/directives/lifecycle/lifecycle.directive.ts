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
    selector: '[zuiLifecycle], [zuiAfterViewInit], [zuiAfterContentInit], [zuiOnInit], [zuiOnDestroy]',
    exportAs: 'zuiLifecycle'
})
export class ZuiLifecycleDirective implements AfterViewInit, OnInit, OnDestroy, AfterContentInit {
    @Output()
    readonly zuiAfterViewInit = new EventEmitter<ElementRef>();

    @Output()
    readonly zuiOnInit = new EventEmitter<ElementRef>();

    @Output()
    readonly zuiAfterContentInit = new EventEmitter<ElementRef>();

    @Output()
    readonly zuiOnDestroy = new EventEmitter<ElementRef>();

    private readonly afterViewInitSource$ = new ReplaySubject(1);
    readonly afterViewInit$ = this.afterViewInitSource$.pipe(
      debounceTime(0)
    );

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
    ) {}

    ngAfterViewInit(): void {
      this.zuiAfterViewInit.next(this.element);
      this.afterViewInitSource$.next(this.element);
    }

    ngAfterContentInit(): void {
      this.zuiAfterContentInit.next(this.element);
    }

    ngOnDestroy(): void {
      this.zuiOnDestroy.next(this.element);
    }

    ngOnInit(): void {
      this.zuiOnInit.next(this.element);
    }
}
