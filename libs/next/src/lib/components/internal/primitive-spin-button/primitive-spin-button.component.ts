import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractPrizmInteractive } from '../../../abstract/interactive';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PZM_SPIN_TEXTS } from '../../../tokens/i18n';
import { PrizmAppearanceTypeGhost } from '../../../types/appearance.types';
import { pzmIsNativeFocused } from '../../../util/is-native-focused';

// @dynamic
@Component({
    selector: `pzm-primitive-spin-button`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./primitive-spin-button.template.html`,
    styleUrls: [`./primitive-spin-button.component.less`],
})
export class PrizmPrimitiveSpinButtonComponent extends AbstractPrizmInteractive {
    @ViewChild(`wrapper`)
    private readonly wrapper?: ElementRef<HTMLElement>;

    @Input()
    @pzmDefaultProp()
    disabled = false;

    @Input()
    @pzmDefaultProp()
    mode: PrizmAppearanceTypeGhost = 'ghost';

    @Input()
    @pzmDefaultProp()
    leftDisabled = false;

    @Input()
    @pzmDefaultProp()
    rightDisabled = false;

    @Output()
    readonly leftClick = new EventEmitter<void>();

    @Output()
    readonly rightClick = new EventEmitter<void>();

    @HostBinding('attr.testId')
    readonly testId = 'pzm_primitive_spin_button';

    constructor(
        @Inject(PZM_SPIN_TEXTS) readonly spinTexts$: Observable<[string, string]>,
    ) {
        super();
    }

    public get focused(): boolean {
        return !!this.wrapper && pzmIsNativeFocused(this.wrapper.nativeElement);
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
