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
import {PolymorpheusContent} from '../../directives/polymorpheus';

import {ZUI_TOGGLE_OPTIONS, ZuiToggleOptions} from './toggle-options';
import {zuiDefaultProp} from "../../decorators";
import {AbstractZuiControl} from "../../abstract/control";
import {zuiIsNativeFocused, ZuiSize, ZuiSizeL, ZuiSizeM} from '../../util';
import {ZuiNativeFocusableElement} from '../../types/focusable-element-accessor';
import {ZuiContextWithImplicit} from "../../types/context-with-implicit";
import {ZuiAppearance} from '../../types/appearance.types';

@Component({
    selector: 'zui-toggle',
    templateUrl: './toggle.template.html',
    styleUrls: ['./toggle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ZuiToggleComponent
    extends AbstractZuiControl<boolean>
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<ZuiNativeFocusableElement>;

    @Input()
    @zuiDefaultProp()
    singleColor = this.options.singleColor;

    @Input()
    @zuiDefaultProp()
    showIcons = this.options.showIcons;

    @Input()
    @zuiDefaultProp()
    showLoader = false;

    @Input()
    @HostBinding('attr.data-size')
    @zuiDefaultProp()
    size: ZuiSizeL | ZuiSizeM = this.options.size;

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

    get iconOn(): PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> {
        return this.options.icons.toggleOn;
    }

    get iconOff(): PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> {
        return this.options.icons.toggleOff;
    }

    get nativeFocusableElement(): ZuiNativeFocusableElement | null {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }

    get focused(): boolean {
        return zuiIsNativeFocused(this.nativeFocusableElement);
    }

    get appearance(): ZuiAppearance {
        return this.singleColor || this.checked
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

    get loaderSize(): ZuiSize {
        return this.sizeM ? 'l' : 's';
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
