import { Directive, ElementRef, Host, HostBinding } from '@angular/core';
import { PrizmInputTextComponent } from '../input-text/input-text.component';

@Directive({
  selector: 'input[prizmInputPassword]',
  exportAs: 'prizmInputPassword',
})
export class PrizmInputPasswordDirective {
  @HostBinding('attr.testId')
  readonly testId = 'prizm_input_password';

  constructor(
    @Host() private readonly el: ElementRef<HTMLInputElement>,
    @Host() private readonly prizmInputText: PrizmInputTextComponent
  ) {
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

