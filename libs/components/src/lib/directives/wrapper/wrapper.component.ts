import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

export enum PrizmInteractiveState {
  Disabled = 'disabled',
  Readonly = 'readonly',
  Pressed = 'pressed',
  Hovered = 'hovered',
}

@Component({
  selector: 'prizm-wrapper',
  template: '<ng-content></ng-content>',
  styleUrls: ['./wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  standalone: true,
})
export class PrizmWrapperComponent {
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  readOnly = false;

  @Input()
  pseudoState!: string;

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
  get interactiveState(): PrizmInteractiveState | string | null {
    if (this.pseudoState) {
      return this.pseudoState;
    }
    if (this.disabled) {
      return PrizmInteractiveState.Disabled;
    }

    if (this.readOnly) {
      return PrizmInteractiveState.Readonly;
    }

    if (this.pressed) {
      return PrizmInteractiveState.Pressed;
    }

    if (this.hovered) {
      return PrizmInteractiveState.Hovered;
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
    public readonly themeService: PrizmThemeService,
    public readonly destroy$: PrizmDestroyService,
    public readonly elRef: ElementRef
  ) {}
}
