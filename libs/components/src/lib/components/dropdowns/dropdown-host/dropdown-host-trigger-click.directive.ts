import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { fromEvent, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: 'prizm-dropdown-host[dropdownTrigger="click"]',
  standalone: true,
  exportAs: 'dropdownTriggerClick',
})
export class PrizmDropdownTriggerClickDirective implements OnChanges, OnInit {
  @Input() dropdownTriggerElement?: HTMLElement;

  readonly #dropdownHost = inject(PrizmDropdownHostComponent, {
    host: true,
  });
  readonly #elementRef = inject(ElementRef);
  readonly #destroyRef = inject(DestroyRef);
  readonly #cdRef = inject(ChangeDetectorRef);
  readonly #destroy = new Subject<void>();

  get #triggerElement() {
    return this.dropdownTriggerElement ?? this.#elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(): void {
    this.init();
  }

  private init() {
    this.#destroy.next();
    fromEvent(this.#triggerElement, 'click')
      .pipe(
        tap(() => {
          this.#dropdownHost.toggle();
          this.#cdRef.markForCheck();
        }),
        takeUntil(this.#destroy),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }
}
