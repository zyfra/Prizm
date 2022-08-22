import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { ZuiThemeService } from '../../services';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

export enum ZuiInteractiveState {
  Disabled = "disabled",
  Readonly = "readonly",
  Pressed = "pressed",
  Hovered = "hovered",
}

@Component({
  selector: 'zui-wrapper',
  template: '<ng-content></ng-content>',
  styleUrls: ['./wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService,
  ]
})
export class ZuiWrapperComponent implements OnInit {
  @Input()
  disabled = false;

  @Input()
  readOnly = false;

  @Input()
  pseudoState: string;

  @Input()
  hovered: boolean | null = null;

  @Input()
  pressed: boolean | null = null;

  @Input()
  focused = false;

  @Input()
  invalid = false;

  @Input()
  @HostBinding('attr.data-appearance')
  appearance = '';

  @HostBinding('class._invalid')
  get computedInvalid(): boolean {
    return !this.disabled && !this.readOnly && this.invalid;
  }

  @HostBinding('class._focused')
  get computedFocused(): boolean {
    return this.focused && !this.disabled;
  }

  @HostBinding('attr.data-state')
  get interactiveState(): ZuiInteractiveState | string | null {
    if (this.pseudoState) {
      return this.pseudoState;
    }
    if (this.disabled) {
      return ZuiInteractiveState.Disabled;
    }

    if (this.readOnly) {
      return ZuiInteractiveState.Readonly;
    }

    if (this.pressed) {
      return ZuiInteractiveState.Pressed;
    }

    if (this.hovered) {
      return ZuiInteractiveState.Hovered;
    }

    return null;
  }

  @HostBinding('class._no-hover')
  get noHover(): boolean {
    return this.readOnly || this.hovered === false;
  }

  @HostBinding('class._no-active')
  get noActive(): boolean {
    return this.readOnly || this.hovered === false;
  }

  constructor(
    public readonly themeService: ZuiThemeService,
    public readonly destroy$: ZuiDestroyService,
    public readonly elRef: ElementRef,
  ) {}

  public ngOnInit(): void {
    this.themeService.updateElementOnChange(
      this.elRef.nativeElement
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
