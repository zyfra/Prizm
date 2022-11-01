import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';

import {ZUI_TOGGLE_OPTIONS, ZuiToggleOptions} from './toggle-options';
import {pzmDefaultProp} from "../../decorators";
import {AbstractZuiControl} from "../../abstract/control";
import {pzmIsNativeFocused, PzmSize, ZuiSizeL, ZuiSizeM} from '../../util';
import {ZuiNativeFocusableElement} from '../../types/focusable-element-accessor';
import {PzmAppearance} from '../../types/appearance.types';

@Component({
    selector: 'zui-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ZuiToggleComponent
    extends AbstractZuiControl<boolean>
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<ZuiNativeFocusableElement>;

    @Input()
    @pzmDefaultProp()
    singleColor = this.options.singleColor;

    @Input()
    @pzmDefaultProp()
    iconOn = this.options.icons.toggleOn;

    @Input()
    @pzmDefaultProp()
    iconOff = this.options.icons.toggleOff;

    @Input()
    @HostBinding('class._loading')
    @pzmDefaultProp()
    showLoader = false;

    @Input()
    @HostBinding('attr.data-size')
    @pzmDefaultProp()
    size: ZuiSizeL | ZuiSizeM = this.options.size;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_toggle';

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl) control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Optional()
        @Inject(ZUI_TOGGLE_OPTIONS)
        readonly options: ZuiToggleOptions,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): ZuiNativeFocusableElement | null {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }

    get focused(): boolean {
        return pzmIsNativeFocused(this.nativeFocusableElement);
    }

    get appearance(): PzmAppearance {
        return (this.singleColor || this.checked)
            ? 'primary'
            : 'secondary';
    }

    get sizeM(): boolean {
        return this.size === 'm';
    }

    @HostBinding('class._checked')
    get checked(): boolean {
        return this.value;
    }

    get loaderSize(): PzmSize {
        return this.sizeM ? 'xs' : 's';
    }

    public onChecked(checked: boolean): void {
        this.updateValue(checked);
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    public onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    public onPressed(pressed: boolean): void {
        this.updatePressed(pressed);
    }

    public onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    protected getFallbackValue(): boolean {
        return false;
    }
}
