import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { fromEvent, merge } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { ZuiInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { ZuiInputPasswordDirective } from './input-password.directive';

@Component({
  selector: 'zui-input-password-auxiliary-control',
  template: ` <button [zuiInputIconButton]="icon" class="btn" #btn [interactive]="true"></button>`,
  styles: [
    `
      :host {
        display: block;
      }

      :host-context(.zui-input-form-outer[data-size='m']) {
        font-size: 15px;
      }

      :host-context(.zui-input-form-outer[data-size='s']) {
        font-size: 11px;
      }

      .btn {
        display: block;
      }
    `,
  ],
  providers: [ZuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiInputPasswordDefaultControlComponent implements OnInit {
  @ViewChild('btn', { static: true, read: ElementRef }) btn!: ElementRef<HTMLButtonElement>;

  @Input() inputPassword!: ZuiInputPasswordDirective;

  constructor(
    public readonly layout: ZuiInputLayoutComponent,
    private readonly destroy$: ZuiDestroyService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  get icon(): string {
    return this.inputPassword.passwordHidden ? 'sort-eye' : 'sort-eye-off-2';
  }

  ngOnInit(): void {
    const el = this.btn.nativeElement;

    const onMouseDown$ = merge(merge(fromEvent(el, 'mouseleave')), fromEvent(el, 'mouseup'));

    fromEvent(el, 'mousedown')
      .pipe(
        tap(() => {
          this.showPassword();
          this.cdr.markForCheck();
        }),
        switchMap(() =>
          onMouseDown$.pipe(
            tap(() => {
              this.hidePassword();
              this.cdr.markForCheck();
            }),
            take(1)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private showPassword(): void {
    this.inputPassword.showPassword();
  }

  private hidePassword(): void {
    this.inputPassword.hidePassword();
  }
}

