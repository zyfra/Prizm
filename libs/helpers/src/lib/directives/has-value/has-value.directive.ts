import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
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

  private _hasContent = true;

  private readonly cdr = inject(ChangeDetectorRef);

  get hasVal() {
    return this._hasContent;
  }
  get empty() {
    return !this.hasVal;
  }

  ngOnInit(): void {
    this.mutationObserverService.observe(this.elRef.nativeElement, () => this.checkAndUpdateState(), {
      childList: true,
      subtree: true,
      characterData: true,
    });

    this.checkAndUpdateState();
  }

  private checkAndUpdateState(): void {
    const currentState = this.checkContent(this.elRef.nativeElement);

    if (currentState !== this._hasContent) {
      this._hasContent = currentState;

      this.hasValue.emit(currentState);
      this.cdr.markForCheck();
    }
  }

  private checkContent(element: HTMLElement): boolean {
    return Array.from(element.childNodes).some(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        return !!node.textContent?.trim();
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;

        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') {
          return false;
        }

        return this.checkContent(el);
      }

      return false;
    });
  }
}
