import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter, HostBinding,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractZuiInteractive } from '../../../abstract/interactive';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZUI_SPIN_TEXTS } from '../../../tokens/i18n';
import { ZuiAppearanceTypeGhost } from '../../../types/appearance.types';
import { zuiIsNativeFocused } from '../../../util/is-native-focused';

// @dynamic
@Component({
    selector: `zui-primitive-spin-button`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./primitive-spin-button.template.html`,
    styleUrls: [`./primitive-spin-button.component.less`],
})
export class ZuiPrimitiveSpinButtonComponent extends AbstractZuiInteractive {
    @ViewChild(`wrapper`)
    private readonly wrapper?: ElementRef<HTMLElement>;

    @Input()
    @zuiDefaultProp()
    disabled = false;

    @Input()
    @zuiDefaultProp()
    mode: ZuiAppearanceTypeGhost = 'ghost';

    @Input()
    @zuiDefaultProp()
    leftDisabled = false;

    @Input()
    @zuiDefaultProp()
    rightDisabled = false;

    @Output()
    readonly leftClick = new EventEmitter<void>();

    @Output()
    readonly rightClick = new EventEmitter<void>();

    @HostBinding('attr.testId')
    readonly testId = 'zui_primitive_spin_button';

    constructor(
        @Inject(ZUI_SPIN_TEXTS) readonly spinTexts$: Observable<[string, string]>,
    ) {
        super();
    }

    public get focused(): boolean {
        return !!this.wrapper && zuiIsNativeFocused(this.wrapper.nativeElement);
    }

    public get leftComputedDisabled(): boolean {
        return this.computedDisabled || this.leftDisabled;
    }

    public get rightComputedDisabled(): boolean {
        return this.computedDisabled || this.rightDisabled;
    }

    public onLeftClick(): void {
        if (!this.leftComputedDisabled) {
            this.leftClick.emit();
        }
    }

    public onRightClick(): void {
        if (!this.rightComputedDisabled) {
            this.rightClick.emit();
        }
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    public onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }
}
