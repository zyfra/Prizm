import { Directive, ElementRef, Host } from '@angular/core';
import { PrizmInputTextComponent } from '../input-text/input-text.component';
import { PrizmAbstractTestId } from '../../../abstract/interactive';

@Directive({
  selector: 'input[prizmInputPassword]',
  exportAs: 'prizmInputPassword',
})
export class PrizmInputPasswordDirective extends PrizmAbstractTestId {
  override readonly testId_ = 'ui_input_password';

  constructor(
    @Host() public readonly el: ElementRef<HTMLInputElement>,
    @Host() public readonly prizmInputText: PrizmInputTextComponent
  ) {
    super();
    this.el.nativeElement.type = 'password';
    this._passwordHidden = true;
  }

  private _passwordHidden!: boolean;

  public get passwordHidden(): boolean {
    return this._passwordHidden;
  }

  public showPassword(): void {
    this.el.nativeElement.type = 'text';
    this._passwordHidden = false;
    this.prizmInputText.markControl({ touched: true });
  }

  public hidePassword(): void {
    this.el.nativeElement.type = 'password';
    this._passwordHidden = true;
    this.prizmInputText.markControl({ touched: true });
  }

  public toggle(): void {
    if (this.passwordHidden) {
      this.showPassword();
    } else {
      this.hidePassword();
    }
  }
}
