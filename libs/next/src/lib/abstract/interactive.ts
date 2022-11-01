import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

/**
 * The most basic class for interactive components
 */
@Directive()
export abstract class AbstractPzmInteractive {
    abstract disabled: boolean;

    abstract focused: boolean;

    private readonly autoIdString: string;

    @Input()
    pseudoHovered: boolean | null = null;

    @Input()
    pseudoPressed: boolean | null = null;

    @Input()
    pseudoFocused: boolean | null = null;

    @Input()
    focusable = true;

    @Input()
    pseudoState: string;

    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    @Output()
    readonly pressedChange = new EventEmitter<boolean>();

    @Output()
    readonly hoveredChange = new EventEmitter<boolean>();

    @Output()
    readonly focusVisibleChange = new EventEmitter<boolean>();

    hovered = false;

    pressed = false;

    focusVisible = false;

    @HostBinding('class._disabled')
    get computedDisabled(): boolean {
        return this.disabled;
    }

    @HostBinding('class._hovered')
    get computedHovered(): boolean {
        return !this.computedDisabled && (this.pseudoHovered ?? this.hovered);
    }

    @HostBinding('class._pressed')
    get computedPressed(): boolean {
        return !this.computedDisabled && (this.pseudoPressed ?? this.pressed);
    }

    get computedFocusable(): boolean {
        return !this.computedDisabled && (this.focusable || this.focused);
    }

    @HostBinding('class._focused')
    get computedFocused(): boolean {
        return !this.computedDisabled && (this.pseudoFocused ?? this.focused);
    }

    @HostBinding('class._focus-visible')
    get computedFocusVisible(): boolean {
        return !this.computedDisabled && (this.pseudoFocused ?? this.focusVisible);
    }

    protected updateHovered(hovered: boolean): void {
        if (this.hovered === hovered) {
            return;
        }

        this.hovered = hovered;
        this.hoveredChange.emit(hovered);
    }

    protected updatePressed(pressed: boolean): void {
        if (this.pressed === pressed) {
            return;
        }

        this.pressed = pressed;
        this.pressedChange.emit(pressed);
    }

    protected updateFocused(focused: boolean): void {
        this.focusedChange.emit(focused);
    }

    protected updateFocusVisible(focusVisible: boolean): void {
        if (this.focusVisible === focusVisible) {
            return;
        }

        this.focusVisible = focusVisible;
        this.focusVisibleChange.emit(focusVisible);
    }
}
