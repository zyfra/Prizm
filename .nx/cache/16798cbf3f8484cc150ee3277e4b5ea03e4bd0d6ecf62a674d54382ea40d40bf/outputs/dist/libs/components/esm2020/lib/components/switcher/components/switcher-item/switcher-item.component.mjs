import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmHintDirective } from '../../../../directives';
import { CommonModule } from '@angular/common';
import { PrizmButtonComponent } from '../../../button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PrizmSwitcherItemComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.size = 'l';
        this.type = 'inner';
        this.data = null;
        this.isActive = false;
        this.disabled = false;
        this.fullWidth = false;
        this.testId_ = 'ui_switcher_item';
        this.prizmHint_ = new PrizmHintDirective();
    }
    get isDisabled() {
        return Boolean(this.disabled || this.data?.disabled);
    }
    get prizmHint() {
        return this.hint?.value || '';
    }
    ngOnInit() {
        this.prizmHint_.ngOnInit();
    }
}
PrizmSwitcherItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSwitcherItemComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmSwitcherItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmSwitcherItemComponent, isStandalone: true, selector: "prizm-switcher-item", inputs: { hint: "hint", size: "size", type: "type", data: "data", isActive: "isActive", disabled: "disabled", fullWidth: "fullWidth" }, host: { properties: { "attr.data-size": "this.size", "attr.switcher-type": "this.type", "class.full-width": "this.fullWidth", "attr.prizmHint": "this.prizmHint" } }, usesInheritance: true, ngImport: i0, template: "<button\n  class=\"switcher\"\n  *ngIf=\"data?.title; else iconBtn\"\n  [disabled]=\"isDisabled\"\n  [icon]=\"$any(data?.icon)\"\n  [size]=\"size\"\n  [appearanceType]=\"data?.appearanceType ?? 'ghost'\"\n  [appearance]=\"data?.appearance ?? 'secondary'\"\n  [pseudoPressed]=\"isActive\"\n  prizmButton\n>\n  {{ data?.title }}\n</button>\n\n<ng-template #iconBtn>\n  <button\n    class=\"switcher switcher_icon\"\n    [pseudoPressed]=\"isActive\"\n    [disabled]=\"isDisabled\"\n    [icon]=\"$any(data?.icon)\"\n    [size]=\"size\"\n    [appearanceType]=\"data?.appearanceType ?? 'ghost'\"\n    [appearance]=\"data?.appearance ?? 'secondary'\"\n    prizmIconButton\n  ></button>\n</ng-template>\n", styles: [":host button{border-radius:0}:host button._focused{border-radius:2px!important;z-index:1}:host.full-width,:host.full-width button{width:100%}:host[last-child=true] .switcher{border-right:1px solid var(--prizm-v3-background-stroke)}:host[last-child=true] .switcher{border-radius:0 2px 2px 0}:host[first-child=true] .switcher{border-radius:2px 0 0 2px}:host .switcher{border:1px solid var(--prizm-v3-background-stroke);border-right:none;transition:.4s;overflow:hidden}:host .switcher_icon{min-width:50px}:host[switcher-type=outer][data-size=l] .switcher{height:40px}:host[switcher-type=outer][data-size=l] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=outer][data-size=l] .switcher__title{font-size:14px}:host[switcher-type=outer][data-size=m] .switcher{height:32px}:host[switcher-type=outer][data-size=m] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=outer][data-size=m] .switcher__title{font-size:14px}:host[switcher-type=outer][data-size=s] .switcher{height:24px}:host[switcher-type=outer][data-size=s] .switcher prizm-wrapper{padding:0 8px}:host[switcher-type=outer][data-size=s] .switcher__title{font-size:12px}:host[switcher-type=inner][data-size=l] .switcher{height:44px}:host[switcher-type=inner][data-size=l] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=inner][data-size=l] .switcher__title{font-size:14px}:host[switcher-type=inner][data-size=m] .switcher,:host[switcher-type=inner][data-size=s] .switcher{height:36px}:host[switcher-type=inner][data-size=m] .switcher prizm-wrapper,:host[switcher-type=inner][data-size=s] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=inner][data-size=m] .switcher__title,:host[switcher-type=inner][data-size=s] .switcher__title{font-size:14px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmSwitcherItemComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmSwitcherItemComponent.prototype, "type", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSwitcherItemComponent.prototype, "isActive", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSwitcherItemComponent.prototype, "disabled", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSwitcherItemComponent.prototype, "fullWidth", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSwitcherItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-switcher-item', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [CommonModule, PrizmButtonComponent], template: "<button\n  class=\"switcher\"\n  *ngIf=\"data?.title; else iconBtn\"\n  [disabled]=\"isDisabled\"\n  [icon]=\"$any(data?.icon)\"\n  [size]=\"size\"\n  [appearanceType]=\"data?.appearanceType ?? 'ghost'\"\n  [appearance]=\"data?.appearance ?? 'secondary'\"\n  [pseudoPressed]=\"isActive\"\n  prizmButton\n>\n  {{ data?.title }}\n</button>\n\n<ng-template #iconBtn>\n  <button\n    class=\"switcher switcher_icon\"\n    [pseudoPressed]=\"isActive\"\n    [disabled]=\"isDisabled\"\n    [icon]=\"$any(data?.icon)\"\n    [size]=\"size\"\n    [appearanceType]=\"data?.appearanceType ?? 'ghost'\"\n    [appearance]=\"data?.appearance ?? 'secondary'\"\n    prizmIconButton\n  ></button>\n</ng-template>\n", styles: [":host button{border-radius:0}:host button._focused{border-radius:2px!important;z-index:1}:host.full-width,:host.full-width button{width:100%}:host[last-child=true] .switcher{border-right:1px solid var(--prizm-v3-background-stroke)}:host[last-child=true] .switcher{border-radius:0 2px 2px 0}:host[first-child=true] .switcher{border-radius:2px 0 0 2px}:host .switcher{border:1px solid var(--prizm-v3-background-stroke);border-right:none;transition:.4s;overflow:hidden}:host .switcher_icon{min-width:50px}:host[switcher-type=outer][data-size=l] .switcher{height:40px}:host[switcher-type=outer][data-size=l] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=outer][data-size=l] .switcher__title{font-size:14px}:host[switcher-type=outer][data-size=m] .switcher{height:32px}:host[switcher-type=outer][data-size=m] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=outer][data-size=m] .switcher__title{font-size:14px}:host[switcher-type=outer][data-size=s] .switcher{height:24px}:host[switcher-type=outer][data-size=s] .switcher prizm-wrapper{padding:0 8px}:host[switcher-type=outer][data-size=s] .switcher__title{font-size:12px}:host[switcher-type=inner][data-size=l] .switcher{height:44px}:host[switcher-type=inner][data-size=l] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=inner][data-size=l] .switcher__title{font-size:14px}:host[switcher-type=inner][data-size=m] .switcher,:host[switcher-type=inner][data-size=s] .switcher{height:36px}:host[switcher-type=inner][data-size=m] .switcher prizm-wrapper,:host[switcher-type=inner][data-size=s] .switcher prizm-wrapper{padding:0 16px}:host[switcher-type=inner][data-size=m] .switcher__title,:host[switcher-type=inner][data-size=s] .switcher__title{font-size:14px}\n"] }]
        }], propDecorators: { hint: [{
                type: Input
            }], size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-size']
            }], type: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.switcher-type']
            }], data: [{
                type: Input
            }], isActive: [{
                type: Input
            }], disabled: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.full-width']
            }], prizmHint: [{
                type: HostBinding,
                args: ['attr.prizmHint']
            }] } });
/**
 * TODO v5: remove
 * @deprecated
 * */
export const SwitcherItemComponent = PrizmSwitcherItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3N3aXRjaGVyL2NvbXBvbmVudHMvc3dpdGNoZXItaXRlbS9zd2l0Y2hlci1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvc3dpdGNoZXIvY29tcG9uZW50cy9zd2l0Y2hlci1pdGVtL3N3aXRjaGVyLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU8vRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7QUFVMUUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjtJQVJuRTs7UUFjUyxTQUFJLEdBQXNCLEdBQUcsQ0FBQztRQUs5QixTQUFJLEdBQXNCLE9BQU8sQ0FBQztRQUdsQyxTQUFJLEdBQTZCLElBQUksQ0FBQztRQUl0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBSWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFLakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVQLFlBQU8sR0FBRyxrQkFBa0IsQ0FBQztRQU10QyxlQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0tBU2hEO0lBYkMsSUFBSSxVQUFVO1FBQ1osT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFJRCxJQUFtQyxTQUFTO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzt1SEEzQ1UsMEJBQTBCOzJHQUExQiwwQkFBMEIsb1pDckJ2QywwckJBMEJBLG93RERQWSxZQUFZLG1JQUFFLG9CQUFvQjtBQUs1QztJQUNDLGdCQUFnQixFQUFFOzt3REFFa0I7QUFFckM7SUFDQyxnQkFBZ0IsRUFBRTs7d0RBRXNCO0FBS3pDO0lBQ0MsZ0JBQWdCLEVBQUU7OzREQUNLO0FBRXhCO0lBQ0MsZ0JBQWdCLEVBQUU7OzREQUNLO0FBRXhCO0lBRUMsZ0JBQWdCLEVBQUU7OzZEQUNNOzJGQTNCZCwwQkFBMEI7a0JBUnRDLFNBQVM7K0JBQ0UscUJBQXFCLG1CQUdkLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDOzhCQUdwQyxJQUFJO3NCQUFaLEtBQUs7Z0JBS0MsSUFBSTtzQkFIVixLQUFLOztzQkFFTCxXQUFXO3VCQUFDLGdCQUFnQjtnQkFNdEIsSUFBSTtzQkFIVixLQUFLOztzQkFFTCxXQUFXO3VCQUFDLG9CQUFvQjtnQkFJMUIsSUFBSTtzQkFEVixLQUFLO2dCQUtDLFFBQVE7c0JBRmQsS0FBSztnQkFNQyxRQUFRO3NCQUZkLEtBQUs7Z0JBT0MsU0FBUztzQkFIZixLQUFLOztzQkFDTCxXQUFXO3VCQUFDLGtCQUFrQjtnQkFZSSxTQUFTO3NCQUEzQyxXQUFXO3VCQUFDLGdCQUFnQjs7QUFTL0I7OztLQUdLO0FBQ0wsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgcHJpem1Td2l0Y2hlckhpbnQsXG4gIFByaXptU3dpdGNoZXJJdGVtLFxuICBQcml6bVN3aXRjaGVyU2l6ZSxcbiAgUHJpem1Td2l0Y2hlclR5cGUsXG59IGZyb20gJy4vLi4vLi4vc3dpdGNoZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1IaW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1CdXR0b25Db21wb25lbnQsIFByaXptQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tc3dpdGNoZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2hlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpdGNoZXItaXRlbS5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUHJpem1CdXR0b25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVN3aXRjaGVySXRlbUNvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBoaW50PzogcHJpem1Td2l0Y2hlckhpbnQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1zaXplJylcbiAgcHVibGljIHNpemU6IFByaXptU3dpdGNoZXJTaXplID0gJ2wnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnN3aXRjaGVyLXR5cGUnKVxuICBwdWJsaWMgdHlwZTogUHJpem1Td2l0Y2hlclR5cGUgPSAnaW5uZXInO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkYXRhOiBQcml6bVN3aXRjaGVySXRlbSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZ1bGwtd2lkdGgnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBmdWxsV2lkdGggPSBmYWxzZTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX3N3aXRjaGVyX2l0ZW0nO1xuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5kYXRhPy5kaXNhYmxlZCk7XG4gIH1cblxuICByZWFkb25seSBwcml6bUhpbnRfID0gbmV3IFByaXptSGludERpcmVjdGl2ZSgpO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5wcml6bUhpbnQnKSBnZXQgcHJpem1IaW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaGludD8udmFsdWUgfHwgJyc7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByaXptSGludF8ubmdPbkluaXQoKTtcbiAgfVxufVxuXG4vKipcbiAqIFRPRE8gdjU6IHJlbW92ZVxuICogQGRlcHJlY2F0ZWRcbiAqICovXG5leHBvcnQgY29uc3QgU3dpdGNoZXJJdGVtQ29tcG9uZW50ID0gUHJpem1Td2l0Y2hlckl0ZW1Db21wb25lbnQ7XG4iLCI8YnV0dG9uXG4gIGNsYXNzPVwic3dpdGNoZXJcIlxuICAqbmdJZj1cImRhdGE/LnRpdGxlOyBlbHNlIGljb25CdG5cIlxuICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gIFtpY29uXT1cIiRhbnkoZGF0YT8uaWNvbilcIlxuICBbc2l6ZV09XCJzaXplXCJcbiAgW2FwcGVhcmFuY2VUeXBlXT1cImRhdGE/LmFwcGVhcmFuY2VUeXBlID8/ICdnaG9zdCdcIlxuICBbYXBwZWFyYW5jZV09XCJkYXRhPy5hcHBlYXJhbmNlID8/ICdzZWNvbmRhcnknXCJcbiAgW3BzZXVkb1ByZXNzZWRdPVwiaXNBY3RpdmVcIlxuICBwcml6bUJ1dHRvblxuPlxuICB7eyBkYXRhPy50aXRsZSB9fVxuPC9idXR0b24+XG5cbjxuZy10ZW1wbGF0ZSAjaWNvbkJ0bj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwic3dpdGNoZXIgc3dpdGNoZXJfaWNvblwiXG4gICAgW3BzZXVkb1ByZXNzZWRdPVwiaXNBY3RpdmVcIlxuICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICBbaWNvbl09XCIkYW55KGRhdGE/Lmljb24pXCJcbiAgICBbc2l6ZV09XCJzaXplXCJcbiAgICBbYXBwZWFyYW5jZVR5cGVdPVwiZGF0YT8uYXBwZWFyYW5jZVR5cGUgPz8gJ2dob3N0J1wiXG4gICAgW2FwcGVhcmFuY2VdPVwiZGF0YT8uYXBwZWFyYW5jZSA/PyAnc2Vjb25kYXJ5J1wiXG4gICAgcHJpem1JY29uQnV0dG9uXG4gID48L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=