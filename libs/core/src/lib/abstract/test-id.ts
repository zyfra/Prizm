import { Directive, HostBinding, Input } from '@angular/core';

@Directive({})
export abstract class PrizmAbstractTestId {
  protected testIdPostfix?: string;

  @Input()
  @HostBinding('attr.data-testid')
  get testId() {
    return this.generateManeTestId + (this.testIdPostfix ? `--${this.testIdPostfix}` : '');
  }
  set testId(value: string) {
    this.testIdPostfix = value;
  }

  public get generateManeTestId() {
    return this.testId_;
  }
  protected testId_!: string;
}
