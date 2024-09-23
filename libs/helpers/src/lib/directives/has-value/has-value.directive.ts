import { AfterViewInit, Directive, ElementRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { PrizmMutationObserverService } from '../../services/mutation-observer';
import { concat, defer, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Directive({
  selector: '[prizmHasValue]:not(ng-content):not(ng-template):not(ng-container)',
  standalone: true,
  providers: [PrizmMutationObserverService],
  exportAs: 'prizmHasValue',
})
export class PrizmHasValueDirective implements OnInit {
  @Output() hasValue = new EventEmitter<boolean>();
  public readonly hasVal$ = concat(
    defer(() => of(this.hasVal)),
    this.hasValue.asObservable()
  ).pipe(shareReplay(1));
  public readonly empty$ = this.hasVal$.pipe(map(() => this.empty));
  readonly elRef = inject(ElementRef<HTMLElement>);
  readonly mutationObserverService = inject(PrizmMutationObserverService, {
    self: true,
  });

  get hasVal() {
    return !!this.elRef.nativeElement.childNodes.length;
  }
  get empty() {
    return !this.hasVal;
  }

  ngOnInit(): void {
    this.emit();
    this.mutationObserverService.observe(this.elRef.nativeElement, () => {
      this.emit();
    });
  }

  private emit() {
    this.hasValue.emit(!!this.elRef.nativeElement.childNodes.length);
  }
}
