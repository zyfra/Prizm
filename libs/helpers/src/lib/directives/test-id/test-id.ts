import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[prizmTestId]',
  standalone: true,
})
export class PrizmTestIdDirective {
  protected testIdPostfix?: string;

  @Input()
  @HostBinding('attr.data-testid')
  get testId() {
    return this.generateMainTestId + (this.testIdPostfix ? `--${this.testIdPostfix}` : '');
  }
  set testId(value: string) {
    this.testIdPostfix = value;
  }

  public get generateMainTestId() {
    return this.testId_;
  }
  public set generateMainTestId(value: string) {
    this.testId_ = value;
  }

  private testId_!: string;
}
