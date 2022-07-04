import { ChangeDetectorRef, Directive, Injector, Input } from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil } from 'rxjs/operators';
import { ZuiInputControl } from '../input-directives/zui-input-control.class';
import { ZuiInputValidationTexts } from './input-invalid-subtext.service';

@Directive()
export abstract class InputInvalidTextBaseClass {
  /**
   * Gets invalid text
   */
  public abstract getText(firstInvalidKey: string): string;
}

@Directive()
export class DefaultInputInvalidTextClass extends InputInvalidTextBaseClass {
  @Input() control?: ZuiInputControl<unknown>;

  public invalidText: string;

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);
  private readonly destroy$: ZuiDestroyService = this.injector.get(ZuiDestroyService);
  private readonly validationTexts: ZuiInputValidationTexts;

  constructor(protected readonly injector: Injector) {
    super();

    this.validationTexts = injector.get(ZuiInputValidationTexts, new ZuiInputValidationTexts());
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
