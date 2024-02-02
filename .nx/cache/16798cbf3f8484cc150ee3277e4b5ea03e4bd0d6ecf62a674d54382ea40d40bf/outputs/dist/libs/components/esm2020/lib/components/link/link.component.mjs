import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Inject, Input, } from '@angular/core';
import { merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import { prizmTypedFromEvent } from '../../observables';
import { prizmIsNativeFocused } from '../../util/is-native-focused';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/theme";
import * as i2 from "../../directives/focus-visible/focus-visible.service";
export class PrizmLinkComponent extends PrizmAbstractTestId {
    constructor(elementRef, mode$, focusVisible$) {
        super();
        this.elementRef = elementRef;
        this.mode$ = mode$;
        this.pseudo = false;
        // TODO: 2.0 Remove `null`
        this.icon = null;
        this.iconAlign = `right`;
        this.iconRotated = false;
        this.mode = null;
        this.focusVisible = false;
        this.testId_ = 'ui_link';
        this.focusedChange = merge(prizmTypedFromEvent(this.elementRef.nativeElement, `focusin`).pipe(mapTo(true)), prizmTypedFromEvent(this.elementRef.nativeElement, `focusout`).pipe(mapTo(false)));
        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }
    get nativeFocusableElement() {
        return this.elementRef.nativeElement;
    }
    get focused() {
        return prizmIsNativeFocused(this.nativeFocusableElement);
    }
    get hasIcon() {
        return this.icon !== null;
    }
    get iconAlignLeft() {
        return this.hasIcon && this.iconAlign === `left`;
    }
    get iconAlignRight() {
        return this.hasIcon && this.iconAlign === `right`;
    }
}
PrizmLinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLinkComponent, deps: [{ token: ElementRef }, { token: i1.PrizmThemeService }, { token: PrizmFocusVisibleService }], target: i0.ɵɵFactoryTarget.Component });
PrizmLinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmLinkComponent, isStandalone: true, selector: "a[prizmLink], button[prizmLink]", inputs: { pseudo: "pseudo", icon: "icon", iconAlign: "iconAlign", iconRotated: "iconRotated", mode: "mode" }, host: { properties: { "class._pseudo": "this.pseudo", "class._icon-rotated": "this.iconRotated", "attr.data-host-mode": "this.mode", "class._focus-visible": "this.focusVisible" } }, providers: [
        {
            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => PrizmLinkComponent),
        },
        PrizmFocusVisibleService,
        PrizmDestroyService,
    ], exportAs: ["prizmLink"], usesInheritance: true, ngImport: i0, template: "<span class=\"t-content\">\n  <ng-content></ng-content>\n</span>\n", styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:color;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;color:var(--prizm-link);text-decoration:none;text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}:host:hover{color:var(--prizm-index-plan)}:host:disabled{opacity:var(--prizm-disabled-opacity);cursor:default}:host[data-host-mode=negative]{color:var(--prizm-negative)}:host[data-host-mode=negative]:hover{color:var(--prizm-negative-hover)}:host[data-host-mode=negative]._pseudo .t-content{text-decoration-color:#de4c1e7a}:host[data-host-mode=positive]{color:var(--prizm-positive)}:host[data-host-mode=positive]:hover{color:var(--prizm-positive-hover)}:host[data-host-mode=positive]._pseudo .t-content{text-decoration-color:#3aa9817a}:host._focus-visible .t-content{background:var(--prizm-selection)}:host[data-host-mode=positive]._focus-visible .t-content{background:var(--prizm-success-bg)}:host[data-host-mode=negative]._focus-visible .t-content{background:var(--prizm-error-bg)}:host._pseudo .t-content{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon{transition-property:transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;margin-top:-.125rem;opacity:.8}.t-icon_left{margin-right:.25rem}.t-icon_right{margin-left:.25rem}:host:hover .t-icon{opacity:1}:host._icon-rotated .t-icon{transform:rotate(180deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmLinkComponent.prototype, "pseudo", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmLinkComponent.prototype, "icon", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmLinkComponent.prototype, "iconAlign", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmLinkComponent.prototype, "iconRotated", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmLinkComponent.prototype, "mode", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: `a[prizmLink], button[prizmLink]`, providers: [
                        {
                            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                            useExisting: forwardRef(() => PrizmLinkComponent),
                        },
                        PrizmFocusVisibleService,
                        PrizmDestroyService,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, exportAs: `prizmLink`, standalone: true, imports: [PrizmLinkComponent], template: "<span class=\"t-content\">\n  <ng-content></ng-content>\n</span>\n", styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:color;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;color:var(--prizm-link);text-decoration:none;text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}:host:hover{color:var(--prizm-index-plan)}:host:disabled{opacity:var(--prizm-disabled-opacity);cursor:default}:host[data-host-mode=negative]{color:var(--prizm-negative)}:host[data-host-mode=negative]:hover{color:var(--prizm-negative-hover)}:host[data-host-mode=negative]._pseudo .t-content{text-decoration-color:#de4c1e7a}:host[data-host-mode=positive]{color:var(--prizm-positive)}:host[data-host-mode=positive]:hover{color:var(--prizm-positive-hover)}:host[data-host-mode=positive]._pseudo .t-content{text-decoration-color:#3aa9817a}:host._focus-visible .t-content{background:var(--prizm-selection)}:host[data-host-mode=positive]._focus-visible .t-content{background:var(--prizm-success-bg)}:host[data-host-mode=negative]._focus-visible .t-content{background:var(--prizm-error-bg)}:host._pseudo .t-content{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon{transition-property:transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;margin-top:-.125rem;opacity:.8}.t-icon_left{margin-right:.25rem}.t-icon_right{margin-left:.25rem}:host:hover .t-icon{opacity:1}:host._icon-rotated .t-icon{transform:rotate(180deg)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.PrizmThemeService }, { type: i2.PrizmFocusVisibleService, decorators: [{
                    type: Inject,
                    args: [PrizmFocusVisibleService]
                }] }]; }, propDecorators: { pseudo: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`class._pseudo`]
            }], icon: [{
                type: Input
            }], iconAlign: [{
                type: Input
            }], iconRotated: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`class._icon-rotated`]
            }], mode: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`attr.data-host-mode`]
            }], focusVisible: [{
                type: HostBinding,
                args: [`class._focus-visible`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmsvbGluay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmsvbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUtyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQW9CakUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjtJQW1DekQsWUFFbUIsVUFBbUQsRUFDcEQsS0FBd0IsRUFFeEMsYUFBdUM7UUFFdkMsS0FBSyxFQUFF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V0FBVzt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Gb2N1c1Zpc2libGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9mb2N1cy12aXNpYmxlL2ZvY3VzLXZpc2libGUuc2VydmljZSc7XG5pbXBvcnQgeyBQUklaTV9GT0NVU0FCTEVfSVRFTV9BQ0NFU1NPUiB9IGZyb20gJy4uLy4uL3Rva2Vucy9mb2N1c2FibGUtaXRlbS1hY2Nlc3Nvcic7XG5pbXBvcnQge1xuICBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvcixcbiAgUHJpem1OYXRpdmVGb2N1c2FibGVFbGVtZW50LFxufSBmcm9tICcuLi8uLi90eXBlcy9mb2N1c2FibGUtZWxlbWVudC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBwcml6bVR5cGVkRnJvbUV2ZW50IH0gZnJvbSAnLi4vLi4vb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQgfSBmcm9tICcuLi8uLi91dGlsL2lzLW5hdGl2ZS1mb2N1c2VkJztcbmltcG9ydCB7IFByaXptSG9yaXpvbnRhbERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBQcml6bVRoZW1lU2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS90aGVtZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBgYVtwcml6bUxpbmtdLCBidXR0b25bcHJpem1MaW5rXWAsXG4gIHRlbXBsYXRlVXJsOiBgLi9saW5rLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vbGluay5jb21wb25lbnQubGVzc2BdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUklaTV9GT0NVU0FCTEVfSVRFTV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFByaXptTGlua0NvbXBvbmVudCksXG4gICAgfSxcbiAgICBQcml6bUZvY3VzVmlzaWJsZVNlcnZpY2UsXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiBgcHJpem1MaW5rYCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1ByaXptTGlua0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptTGlua0NvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQgaW1wbGVtZW50cyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuX3BzZXVkb2ApXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHNldWRvID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogMi4wIFJlbW92ZSBgbnVsbGBcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpY29uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb25BbGlnbjogUHJpem1Ib3Jpem9udGFsRGlyZWN0aW9uID0gYHJpZ2h0YDtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoYGNsYXNzLl9pY29uLXJvdGF0ZWRgKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb25Sb3RhdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBhdHRyLmRhdGEtaG9zdC1tb2RlYClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtb2RlOiAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8IG51bGwgPSBudWxsO1xuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuX2ZvY3VzLXZpc2libGVgKVxuICBmb2N1c1Zpc2libGUgPSBmYWxzZTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2xpbmsnO1xuXG4gIHJlYWRvbmx5IGZvY3VzZWRDaGFuZ2UgPSBtZXJnZShcbiAgICBwcml6bVR5cGVkRnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZm9jdXNpbmApLnBpcGUobWFwVG8odHJ1ZSkpLFxuICAgIHByaXptVHlwZWRGcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBmb2N1c291dGApLnBpcGUobWFwVG8oZmFsc2UpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8UHJpem1OYXRpdmVGb2N1c2FibGVFbGVtZW50PixcbiAgICBwdWJsaWMgcmVhZG9ubHkgbW9kZSQ6IFByaXptVGhlbWVTZXJ2aWNlLFxuICAgIEBJbmplY3QoUHJpem1Gb2N1c1Zpc2libGVTZXJ2aWNlKVxuICAgIGZvY3VzVmlzaWJsZSQ6IFByaXptRm9jdXNWaXNpYmxlU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIGZvY3VzVmlzaWJsZSQuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xuICAgICAgdGhpcy5mb2N1c1Zpc2libGUgPSB2aXNpYmxlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogUHJpem1OYXRpdmVGb2N1c2FibGVFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJpem1Jc05hdGl2ZUZvY3VzZWQodGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50KTtcbiAgfVxuXG4gIGdldCBoYXNJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmljb24gIT09IG51bGw7XG4gIH1cblxuICBnZXQgaWNvbkFsaWduTGVmdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNJY29uICYmIHRoaXMuaWNvbkFsaWduID09PSBgbGVmdGA7XG4gIH1cblxuICBnZXQgaWNvbkFsaWduUmlnaHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzSWNvbiAmJiB0aGlzLmljb25BbGlnbiA9PT0gYHJpZ2h0YDtcbiAgfVxufVxuIiwiPHNwYW4gY2xhc3M9XCJ0LWNvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9zcGFuPlxuIl19