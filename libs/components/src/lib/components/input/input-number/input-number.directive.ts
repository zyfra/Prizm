import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';
import { PrizmInputTextComponent } from '../input-text/input-text.component';
import { PrizmAbstractTestId } from '../../../abstract/interactive';

@Directive({
  selector: 'input[prizmInputNumber], input[type=number][prizmInput]',
  exportAs: 'prizmInputNumber',
})
export class PrizmInputNumberDirective extends PrizmAbstractTestId {
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() step = 1;
  @Input() value!: number;

  override readonly testId_ = 'ui_input_number';

  get disabled() {
    return this.prizmInputText.disabled;
  }

  @HostListener('keydown', ['$event']) public stopValue(ev: KeyboardEvent) {
    if ((ev.ctrlKey || ev.metaKey) && ['c', 'v', 'a', 'x'].includes(ev.key)) return true;
    if (
      ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Enter', 'Space', '.'].includes(ev.key)
    )
      return true;
    return !ev.key.match(/[^-,0-9]/);
  }

  constructor(
    @Host() private readonly el: ElementRef<HTMLInputElement>,
    @Host() private readonly prizmInputText: PrizmInputTextComponent<number>
  ) {
    el.nativeElement.type = 'text';
    super();
  }

  public increment(): void {
    if (this.prizmInputText.disabled || isNaN(this.hostValue)) return;

    if (this.max === null || this.hostValue < this.max) {
      const devider = this.hostValue % this.step;
      this.hostValue = Math.min(this.max ?? Number.POSITIVE_INFINITY, this.hostValue + this.step - devider);
    }

    this.prizmInputText.markControl({ touched: true, dirty: true });
  }

  public decrement(): void {
    if (this.prizmInputText.disabled || isNaN(this.hostValue)) return;

    if (this.min === null || this.hostValue > this.min) {
      const devider = this.hostValue % this.step;
      this.hostValue = Math.max(
        this.min ?? Number.NEGATIVE_INFINITY,
        this.hostValue - (devider || this.step)
      );
    }

    this.prizmInputText.markControl({ touched: true, dirty: true });
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
    return +this.prizmInputText.value;
  }

  private set hostValue(value: number) {
    this.prizmInputText.value = value;
  }
}
