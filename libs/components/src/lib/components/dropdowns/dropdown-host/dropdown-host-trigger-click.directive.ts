import {
  ChangeDetectorRef,
  computed,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  Injector,
  input,
  OnInit,
} from '@angular/core';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { combineLatest, fromEvent } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { filter, switchMap, tap } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: 'prizm-dropdown-host[dropdownTrigger="click"]',
  standalone: true,
  exportAs: 'prizmDropdownTriggerClick',
})
export class PrizmDropdownTriggerClickDirective implements OnInit {
  dropdownTriggerElement = input<HTMLElement>();
  dropdownDisabled = input(false, {
    transform: coerceBooleanProperty,
  });

  readonly #dropdownHost = inject(PrizmDropdownHostComponent, {
    host: true,
  });
  readonly #elementRef = inject(ElementRef);
  readonly #destroyRef = inject(DestroyRef);
  readonly #injector = inject(Injector);
  readonly #cdRef = inject(ChangeDetectorRef);
  readonly #dropdownHostComponent = inject(PrizmDropdownHostComponent);

  readonly #triggerElement = computed<HTMLElement>(() => {
    return this.dropdownTriggerElement() ?? this.#elementRef.nativeElement;
  });

  ngOnInit(): void {
    this.init();
  }

  private init() {
    combineLatest([
      toObservable(this.dropdownDisabled, {
        injector: this.#injector,
      }).pipe(
        tap(disabled => {
          if (!disabled) return;
          this.#dropdownHostComponent.close();
        })
      ),
      toObservable(this.#triggerElement, {
        injector: this.#injector,
      }),
    ])
      .pipe(
        filter(([disabled]) => !disabled),
        switchMap(([, triggerElement]) => fromEvent(triggerElement, 'click')),
        filter(() => !this.dropdownDisabled()),
        tap(() => {
          this.#dropdownHost.toggle();
          this.#cdRef.markForCheck();
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }
}
