import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputPasswordDirective } from './input-password.directive';
import { prizmIconsEye, prizmIconsEyeClosed } from '@prizm-ui/icons/full/source';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';

@Component({
  selector: 'prizm-input-password-auxiliary-control',
  template: ` <button
    class="btn"
    #btn
    [prizmInputIconButton]="icon"
    [interactive]="true"
    [disabled]="
      (inputPassword?.prizmInputText?.ngControl?.statusChanges &&
        inputPassword.prizmInputText.ngControl.statusChanges | async) &&
      inputPassword?.prizmInputText?.ngControl?.disabled
    "
    (click)="toggle()"
  ></button>`,
  styles: [
    `
      :host {
        display: block;
      }

      :host-context(.prizm-input-form-outer[data-size='m']) {
        font-size: 15px;
      }

      :host-context(.prizm-input-form-outer[data-size='s']) {
        font-size: 11px;
      }

      .btn {
        display: flex;
      }
    `,
  ],
  providers: [PrizmDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmInputPasswordDefaultControlComponent {
  @Input() inputPassword!: PrizmInputPasswordDirective;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    public readonly layout: PrizmInputLayoutComponent,
    private readonly destroy$: PrizmDestroyService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.iconsFullRegistry.registerIcons(prizmIconsEye, prizmIconsEyeClosed);
  }

  get icon(): string {
    return this.inputPassword.passwordHidden ? 'eye' : 'eye-closed';
  }

  public toggle(): void {
    this.inputPassword.toggle();
  }
}
