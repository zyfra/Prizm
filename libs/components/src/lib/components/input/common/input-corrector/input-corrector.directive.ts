import { ChangeDetectorRef, Directive, ElementRef, HostListener, Input, Optional, Self } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[prizmInputCorrector]',
  providers: [PrizmDestroyService],
})
export class PrizmInputCorrectorDirective {
  @Input('prizmInputCorrector') corrector: ((value: string) => string) | null = null;
  @Input() needCorrect: (value: string) => boolean = () => true;

  @HostListener('paste', [])
  @HostListener('input', [])
  block(): void | false {
    const value = this.el.nativeElement.value;
    const correctValue = this.correctValue(value);
    if (correctValue !== value) {
      this.updateNativeValue(correctValue);
      this.updateNgValue(correctValue);
    }
  }

  constructor(
    private readonly el: ElementRef<HTMLInputElement>,
    @Optional() @Self() private ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    this.overrideSetValue();
  }

  private overrideSetValue(): void {
    if (this.ngControl.control) {
      const originFunc = this.ngControl.control.setValue;
      const self = this;
      this.ngControl.control.setValue = function (value, options) {
        const newValue = self.correctValue(value);
        originFunc.call(this, newValue, options);
        self.updateNativeValue(newValue);
      };
    }
  }

  private correctValue(value: string): typeof value {
    if (!this.needCorrect(value)) return value;
    if (!this.corrector) return value;
    return this.corrector(value);
  }

  private updateNativeValue(value: string): void {
    this.el.nativeElement.value = value;
  }

  private updateNgValue(value: string): void {
    this.ngControl?.control?.setValue(value);
  }
}
