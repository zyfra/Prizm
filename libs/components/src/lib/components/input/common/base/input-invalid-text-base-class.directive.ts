import { ChangeDetectorRef, Directive, Injector, Input, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil } from 'rxjs/operators';
import { PrizmInputControl } from './input-control.class';
import { PrizmInputValidationTexts } from '../services/input-invalid-subtext.service';

@Directive()
export abstract class InputInvalidTextBaseClass {
  /**
   * Gets invalid text
   */
  public abstract getText(firstInvalidKey: string): string;
}

@Directive()
export class DefaultInputInvalidTextClass extends InputInvalidTextBaseClass implements OnInit {
  @Input() control?: PrizmInputControl<unknown>;

  public invalidText: string;

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);
  private readonly destroy$: PrizmDestroyService = this.injector.get(PrizmDestroyService);
  private readonly validationTexts: PrizmInputValidationTexts;

  constructor(protected readonly injector: Injector) {
    super();

    this.validationTexts = injector.get(PrizmInputValidationTexts, new PrizmInputValidationTexts());
  }

  ngOnInit(): void {
    this.actualizeText();

    this.control?.stateChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.actualizeText();
    });
  }

  public getText(firstInvalidKey: string): string {
    return firstInvalidKey && this.validationTexts.getText(firstInvalidKey);
  }

  private actualizeText(): void {
    // By default show only touched
    if (!this.control?.touched) return;

    const errors = this.control.ngControl.errors || {};

    const firstInvalidKey = Object.keys(errors)?.[0];
    const errorText = this.getText(firstInvalidKey);

    if (this.invalidText !== errorText) {
      this.setInvalidText(errorText);
      this.cdr.detectChanges();
    }
  }

  protected setInvalidText(text: string): void {
    this.invalidText = text;
  }
}
