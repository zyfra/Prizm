import { Directive, ElementRef, Host, HostBinding } from '@angular/core';
import { PzmInputTextComponent } from '../input-text/input-text.component';

@Directive({
  selector: 'input[pzmInputPassword]',
  exportAs: 'pzmInputPassword',
})
export class PzmInputPasswordDirective {
  @HostBinding('attr.testId')
  readonly testId = 'pzm_input_password';

  constructor(
    @Host() private readonly el: ElementRef<HTMLInputElement>,
    @Host() private readonly pzmInputText: PzmInputTextComponent
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
    this.pzmInputText.markControl({ touched: true });
  }

  public hidePassword(): void {
    this.el.nativeElement.type = 'password';
    this._passwordHidden = true;
    this.pzmInputText.markControl({ touched: true });
  }

  public toggle(): void {
    if (this.passwordHidden) {
      this.showPassword();
    } else {
      this.hidePassword();
    }
  }
}

