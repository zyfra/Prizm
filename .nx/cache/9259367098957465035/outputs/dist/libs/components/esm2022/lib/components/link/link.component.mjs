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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmLinkComponent, deps: [{ token: ElementRef }, { token: i1.PrizmThemeService }, { token: PrizmFocusVisibleService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmLinkComponent, isStandalone: true, selector: "a[prizmLink], button[prizmLink]", inputs: { pseudo: "pseudo", icon: "icon", iconAlign: "iconAlign", iconRotated: "iconRotated", mode: "mode" }, host: { properties: { "class._pseudo": "this.pseudo", "class._icon-rotated": "this.iconRotated", "attr.data-host-mode": "this.mode", "class._focus-visible": "this.focusVisible" } }, providers: [
            {
                provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                useExisting: forwardRef(() => PrizmLinkComponent),
            },
            PrizmFocusVisibleService,
            PrizmDestroyService,
        ], exportAs: ["prizmLink"], usesInheritance: true, ngImport: i0, template: "<span class=\"t-content\">\n  <ng-content></ng-content>\n</span>\n", styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:color;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;color:var(--prizm-link);text-decoration:none;text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}:host:hover{color:var(--prizm-index-plan)}:host:disabled{opacity:var(--prizm-disabled-opacity);cursor:default}:host[data-host-mode=negative]{color:var(--prizm-negative)}:host[data-host-mode=negative]:hover{color:var(--prizm-negative-hover)}:host[data-host-mode=negative]._pseudo .t-content{text-decoration-color:#de4c1e7a}:host[data-host-mode=positive]{color:var(--prizm-positive)}:host[data-host-mode=positive]:hover{color:var(--prizm-positive-hover)}:host[data-host-mode=positive]._pseudo .t-content{text-decoration-color:#3aa9817a}:host._focus-visible .t-content{background:var(--prizm-selection)}:host[data-host-mode=positive]._focus-visible .t-content{background:var(--prizm-success-bg)}:host[data-host-mode=negative]._focus-visible .t-content{background:var(--prizm-error-bg)}:host._pseudo .t-content{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon{transition-property:transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out;margin-top:-.125rem;opacity:.8}.t-icon_left{margin-right:.25rem}.t-icon_right{margin-left:.25rem}:host:hover .t-icon{opacity:1}:host._icon-rotated .t-icon{transform:rotate(180deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmLinkComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmsvbGluay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmsvbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUtyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQW9CakUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjtJQW1DekQsWUFFbUIsVUFBbUQsRUFDcEQsS0FBd0IsRUFFeEMsYUFBdUM7UUFFdkMsS0FBSyxFQUFF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WCxXQUFXO3VCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bUZvY3VzVmlzaWJsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ZvY3VzLXZpc2libGUvZm9jdXMtdmlzaWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SIH0gZnJvbSAnLi4vLi4vdG9rZW5zL2ZvY3VzYWJsZS1pdGVtLWFjY2Vzc29yJztcbmltcG9ydCB7XG4gIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yLFxuICBQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQsXG59IGZyb20gJy4uLy4uL3R5cGVzL2ZvY3VzYWJsZS1lbGVtZW50LWFjY2Vzc29yJztcbmltcG9ydCB7IHByaXptVHlwZWRGcm9tRXZlbnQgfSBmcm9tICcuLi8uLi9vYnNlcnZhYmxlcyc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uL3V0aWwvaXMtbmF0aXZlLWZvY3VzZWQnO1xuaW1wb3J0IHsgUHJpem1Ib3Jpem9udGFsRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGlyZWN0aW9uJztcbmltcG9ydCB7IFByaXptVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL3RoZW1lJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IGBhW3ByaXptTGlua10sIGJ1dHRvbltwcml6bUxpbmtdYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2xpbmsuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9saW5rLmNvbXBvbmVudC5sZXNzYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1MaW5rQ29tcG9uZW50KSxcbiAgICB9LFxuICAgIFByaXptRm9jdXNWaXNpYmxlU2VydmljZSxcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6IGBwcml6bUxpbmtgLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUHJpem1MaW5rQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1MaW5rQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCBpbXBsZW1lbnRzIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5fcHNldWRvYClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwc2V1ZG8gPSBmYWxzZTtcblxuICAvLyBUT0RPOiAyLjAgUmVtb3ZlIGBudWxsYFxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaWNvbkFsaWduOiBQcml6bUhvcml6b250YWxEaXJlY3Rpb24gPSBgcmlnaHRgO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuX2ljb24tcm90YXRlZGApXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaWNvblJvdGF0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoYGF0dHIuZGF0YS1ob3N0LW1vZGVgKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1vZGU6ICdwb3NpdGl2ZScgfCAnbmVnYXRpdmUnIHwgbnVsbCA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5fZm9jdXMtdmlzaWJsZWApXG4gIGZvY3VzVmlzaWJsZSA9IGZhbHNlO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfbGluayc7XG5cbiAgcmVhZG9ubHkgZm9jdXNlZENoYW5nZSA9IG1lcmdlKFxuICAgIHByaXptVHlwZWRGcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBmb2N1c2luYCkucGlwZShtYXBUbyh0cnVlKSksXG4gICAgcHJpem1UeXBlZEZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYGZvY3Vzb3V0YCkucGlwZShtYXBUbyhmYWxzZSkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQ+LFxuICAgIHB1YmxpYyByZWFkb25seSBtb2RlJDogUHJpem1UaGVtZVNlcnZpY2UsXG4gICAgQEluamVjdChQcml6bUZvY3VzVmlzaWJsZVNlcnZpY2UpXG4gICAgZm9jdXNWaXNpYmxlJDogUHJpem1Gb2N1c1Zpc2libGVTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgZm9jdXNWaXNpYmxlJC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XG4gICAgICB0aGlzLmZvY3VzVmlzaWJsZSA9IHZpc2libGU7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcml6bUlzTmF0aXZlRm9jdXNlZCh0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IGhhc0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiAhPT0gbnVsbDtcbiAgfVxuXG4gIGdldCBpY29uQWxpZ25MZWZ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc0ljb24gJiYgdGhpcy5pY29uQWxpZ24gPT09IGBsZWZ0YDtcbiAgfVxuXG4gIGdldCBpY29uQWxpZ25SaWdodCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNJY29uICYmIHRoaXMuaWNvbkFsaWduID09PSBgcmlnaHRgO1xuICB9XG59XG4iLCI8c3BhbiBjbGFzcz1cInQtY29udGVudFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L3NwYW4+XG4iXX0=