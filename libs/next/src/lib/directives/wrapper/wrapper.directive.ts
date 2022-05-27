import {Directive, HostBinding, Input} from '@angular/core';

export enum ZuiInteractiveState {
  Disabled = "disabled",
  Readonly = "readonly",
  Pressed = "pressed",
  Hovered = "hovered",
}

@Directive({
    selector: 'zui-wrapper, [zuiWrapper]',
})
export class ZuiWrapperDirective {
    @Input()
    disabled = false;

    @Input()
    readOnly = false;

    @Input()
    hover: boolean | null = null;

    @Input()
    active: boolean | null = null;

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
        if (this.disabled) {
            return ZuiInteractiveState.Disabled;
        }

        if (this.readOnly) {
            return ZuiInteractiveState.Readonly;
        }

        if (this.active) {
            return ZuiInteractiveState.Pressed;
        }

        if (this.hover) {
            return ZuiInteractiveState.Hovered;
        }

        return null;
    }

    @HostBinding('class._no-hover')
    get noHover(): boolean {
        return this.readOnly || this.hover === false;
    }

    @HostBinding('class._no-active')
    get noActive(): boolean {
        return this.readOnly || this.hover === false;
    }
}
