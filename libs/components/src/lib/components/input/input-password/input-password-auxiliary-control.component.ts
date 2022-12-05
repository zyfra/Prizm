import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent, merge } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputPasswordDirective } from './input-password.directive';

@Component({
  selector: 'prizm-input-password-auxiliary-control',
  template: ` <button
    [prizmInputIconButton]="icon"
    class="btn"
    #btn
    [interactive]="true"
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
        display: block;
      }
    `,
  ],
  providers: [PrizmDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmInputPasswordDefaultControlComponent {
  @Input() inputPassword!: PrizmInputPasswordDirective;

  constructor(
    public readonly layout: PrizmInputLayoutComponent,
    private readonly destroy$: PrizmDestroyService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  get icon(): string {
    return this.inputPassword.passwordHidden ? 'sort-eye' : 'sort-eye-off-2';
  }

  public toggle(): void {
    this.inputPassword.toggle();
  }
}

