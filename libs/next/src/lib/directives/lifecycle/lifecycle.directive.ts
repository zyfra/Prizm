import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input, OnDestroy, OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
    selector: '[zuiAfterViewInit], [zuiOnInit], [zuiOnDestroy]',
})
export class ZuiLifecycleDirective implements AfterViewInit, OnInit, OnDestroy {
    @Output()
    readonly zuiAfterViewInit = new EventEmitter<ElementRef>();

    @Output()
    readonly zuiOnInit = new EventEmitter<ElementRef>();

    @Output()
    readonly zuiOnDestroy = new EventEmitter<ElementRef>();

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
    ) {}

    ngAfterViewInit(): void {
      this.zuiAfterViewInit.next(this.element);
    }

    ngOnDestroy(): void {
      this.zuiOnDestroy.next(this.element);
    }

    ngOnInit(): void {
      this.zuiOnInit.next(this.element);
    }
}
