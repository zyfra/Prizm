import { Directive, ElementRef, Host } from '@angular/core';
import { ZuiInputTextComponent } from '../input-text/input-text.component';

@Directive({
  selector: 'input[zuiInputPassword]',
  exportAs: 'zuiInputPassword',
})
export class ZuiInputPasswordDirective {
  constructor(
    @Host() private readonly el: ElementRef<HTMLInputElement>,
    @Host() private readonly zuiInputText: ZuiInputTextComponent
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
    this.zuiInputText.markControl({ touched: true });
  }

  public hidePassword(): void {
    this.el.nativeElement.type = 'password';
    this._passwordHidden = true;
    this.zuiInputText.markControl({ touched: true });
  }

  public toggle(): void {
    if (this.passwordHidden) {
      this.showPassword();
    } else {
      this.hidePassword();
    }
  }
}

