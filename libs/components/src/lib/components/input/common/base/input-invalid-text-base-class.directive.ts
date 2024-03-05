import { ChangeDetectorRef, Directive, Injector, Input, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { PrizmInputControl } from './input-control.class';
import { PrizmInputValidationTexts } from '../services/input-invalid-subtext.service';
import { isObservable, Observable, Subject } from 'rxjs';

@Directive()
export abstract class InputInvalidTextBaseClass {
  /**
   * Gets invalid text
   */
  public abstract getText(
    firstInvalidKey: string,
    control?: PrizmInputControl<unknown>
  ): string | null | Observable<string | null>;
}

@Directive()
export class DefaultInputInvalidTextClass extends InputInvalidTextBaseClass implements OnInit {
  @Input() control?: PrizmInputControl<unknown>;

  public invalidText!: string;

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);
  private readonly destroy$: PrizmDestroyService = this.injector.get(PrizmDestroyService);
  private readonly validationTexts: PrizmInputValidationTexts;
  private readonly destroyPrevious$ = new Subject<void>();
  constructor(protected readonly injector: Injector) {
    super();

    this.validationTexts = injector.get(PrizmInputValidationTexts, new PrizmInputValidationTexts());
  }

  ngOnInit(): void {
    this.actualizeText();

    this.control?.stateChanges.pipe(debounceTime(0), takeUntil(this.destroy$)).subscribe(() => {
      this.actualizeText();
    });
  }

  public getText(firstInvalidKey: string): string | null | Observable<string | null> {
    const result = firstInvalidKey && this.validationTexts.getText(firstInvalidKey, this.control);
    if (!result) return null;
    if (isObservable(result)) return result;
    return result;
  }

  private actualizeText(): void {
    // By default show only touched
    if (!this.control?.touched) return;
    this.destroyPrevious$.next();

    const errors = this.control.ngControl?.errors || {};

    const firstInvalidKey = Object.keys(errors)?.[0];
    const errorText = this.getText(firstInvalidKey);

    if (isObservable(errorText)) {
      errorText
        .pipe(
          tap(errorText => this.safeSetInvalidText(errorText ?? '')),
          takeUntil(this.destroy$),
          takeUntil(this.destroyPrevious$)
        )
        .subscribe();
    }
    if (!errorText || typeof errorText === 'string') {
      this.safeSetInvalidText(errorText);
    }
  }

  private safeSetInvalidText(errorText: string | null): void {
    if (this.invalidText !== errorText) {
      this.setInvalidText(errorText ?? '');
    }
    this.cdr.markForCheck();
  }

  protected setInvalidText(text: string): void {
    this.invalidText = text;
  }
}
