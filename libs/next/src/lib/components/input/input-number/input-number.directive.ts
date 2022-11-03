import { Directive, ElementRef, Host, HostBinding, HostListener, Input } from '@angular/core';
import { PrizmInputTextComponent } from '../input-text/input-text.component';

@Directive({
  selector: 'input[pzmInputNumber]',
  exportAs: 'pzmInputNumber',
})
export class PrizmInputNumberDirective {
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() step = 1;
  @Input() value!: number;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_input_number';

  constructor(
    @Host() private readonly el: ElementRef<HTMLInputElement>,
    @Host() private readonly pzmInputText: PrizmInputTextComponent
  ) {
    el.nativeElement.type = 'number';
  }

  public increment(): void {
    if (this.pzmInputText.disabled) return;

    if (this.max === null || this.hostValue < this.max) {
      const devider = this.hostValue % this.step;
      this.hostValue = Math.min(this.max ?? Number.POSITIVE_INFINITY, this.hostValue + this.step - devider);
    }

    this.pzmInputText.markControl({ touched: true, dirty: true });
  }

  public decrement(): void {
    if (this.pzmInputText.disabled) return;

    if (this.min === null || this.hostValue > this.min) {
      const devider = this.hostValue % this.step;
      this.hostValue = Math.max(
        this.min ?? Number.NEGATIVE_INFINITY,
        this.hostValue - (devider || this.step)
      );
    }

    this.pzmInputText.markControl({ touched: true, dirty: true });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowdown', ['$event']) onArrowDown(event: KeyboardEvent): void {
    event.preventDefault();
    this.decrement();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowup', ['$event']) onArrowUp(event: KeyboardEvent): void {
    event.preventDefault();
    this.increment();
  }

  private get hostValue(): number {
    return +this.pzmInputText.value;
  }

  private set hostValue(value: number) {
    this.pzmInputText.value = value;
  }
}

