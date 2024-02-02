import { __decorate, __metadata } from "tslib";
/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PRIZM_TOOLTIP_OPTIONS } from './tooltip-options';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { PRIZM_HINT_OPTIONS } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';
import * as i0 from "@angular/core";
export class PrizmTooltipDirective extends PrizmHintDirective {
    constructor() {
        super(...arguments);
        this.prizmAutoReposition = this.options.autoReposition;
        this.prizmHintDirection = this.options.direction;
        this.prizmHintId = 'hintId_' + prizmGenerateId();
        this.prizmHintShowDelay = this.options.showDelay;
        this.prizmHintHideDelay = this.options.hideDelay;
        this.prizmHintHost = null;
        this.prizmHintContext = {};
        this.prizmHintCanShow = true;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.prizmHintShowed = new EventEmitter();
        this.containerComponent = PrizmTooltipContainerComponent;
        this.onHoverActive = false;
        this.clickedInside = false;
    }
    set prizmHint(value) {
        if (!value) {
            this.content = '';
            return;
        }
        this.content = value;
    }
    onClick(target) {
        const clickOnTooltip = this.elementRef.nativeElement.contains(target);
        if (clickOnTooltip && !this.clickedInside)
            this.clickedInside = true;
        if (!this.clickedInside)
            return;
        this.show$.next(clickOnTooltip);
    }
    closeOnEsc() {
        if (this.show)
            this.show = false;
    }
}
PrizmTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
PrizmTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTooltipDirective, selector: "[prizmTooltip]:not(ng-container)", inputs: { prizmAutoReposition: "prizmAutoReposition", prizmHintDirection: ["prizmTooltipDirection", "prizmHintDirection"], prizmHintId: ["prizmTooltipId", "prizmHintId"], prizmHintShowDelay: ["prizmTooltipShowDelay", "prizmHintShowDelay"], prizmHintHideDelay: ["prizmTooltipHideDelay", "prizmHintHideDelay"], prizmHintHost: ["prizmTooltipHost", "prizmHintHost"], prizmHintContext: ["prizmTooltipContext", "prizmHintContext"], prizmHintCanShow: ["prizmTooltipCanShow", "prizmHintCanShow"], prizmHint: ["prizmTooltip", "prizmHint"] }, outputs: { prizmHintShowed: "prizmTooltipShowed" }, host: { listeners: { "document:click": "onClick($event.target)", "document:keydown.esc": "closeOnEsc($event)" } }, providers: [
        PrizmDestroyService,
        {
            provide: PRIZM_HINT_OPTIONS,
            useExisting: forwardRef(() => PRIZM_TOOLTIP_OPTIONS),
        },
    ], exportAs: ["prizmTooltip"], usesInheritance: true, ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTooltipDirective.prototype, "prizmAutoReposition", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTooltipDirective.prototype, "prizmHintDirection", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmTooltipDirective.prototype, "prizmHintId", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTooltipDirective.prototype, "prizmHintShowDelay", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTooltipDirective.prototype, "prizmHintHideDelay", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTooltipDirective.prototype, "prizmHintHost", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTooltipDirective.prototype, "prizmHintContext", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmTooltipDirective.prototype, "prizmHintCanShow", void 0);
__decorate([
    prizmRequiredSetter(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmTooltipDirective.prototype, "prizmHint", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmTooltip]:not(ng-container)',
                    providers: [
                        PrizmDestroyService,
                        {
                            provide: PRIZM_HINT_OPTIONS,
                            useExisting: forwardRef(() => PRIZM_TOOLTIP_OPTIONS),
                        },
                    ],
                    exportAs: 'prizmTooltip',
                }]
        }], propDecorators: { prizmAutoReposition: [{
                type: Input,
                args: ['prizmAutoReposition']
            }], prizmHintDirection: [{
                type: Input,
                args: ['prizmTooltipDirection']
            }], prizmHintId: [{
                type: Input,
                args: ['prizmTooltipId']
            }], prizmHintShowDelay: [{
                type: Input,
                args: ['prizmTooltipShowDelay']
            }], prizmHintHideDelay: [{
                type: Input,
                args: ['prizmTooltipHideDelay']
            }], prizmHintHost: [{
                type: Input,
                args: ['prizmTooltipHost']
            }], prizmHintContext: [{
                type: Input,
                args: ['prizmTooltipContext']
            }], prizmHintCanShow: [{
                type: Input,
                args: ['prizmTooltipCanShow']
            }], prizmHint: [{
                type: Input,
                args: ['prizmTooltip']
            }], prizmHintShowed: [{
                type: Output,
                args: ['prizmTooltipShowed']
            }], onClick: [{
                type: HostListener,
                args: ['document:click', ['$event.target']]
            }], closeOnEsc: [{
                type: HostListener,
                args: ['document:keydown.esc', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9EQUFvRDtBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBb0IsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFhNUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQjtJQVg3RDs7UUFjVyx3QkFBbUIsR0FBdUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFJdEYsdUJBQWtCLEdBQWtDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBSTNFLGdCQUFXLEdBQVcsU0FBUyxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBSXBELHVCQUFrQixHQUFrQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUkzRSx1QkFBa0IsR0FBa0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFJM0Usa0JBQWEsR0FBdUIsSUFBSSxDQUFDO1FBSXpDLHFCQUFnQixH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QVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWUgKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIHByaXptR2VuZXJhdGVJZCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBSSVpNX1RPT0xUSVBfT1BUSU9OUyB9IGZyb20gJy4vdG9vbHRpcC1vcHRpb25zJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AsIHByaXptUmVxdWlyZWRTZXR0ZXIgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb250ZW50IH0gZnJvbSAnLi4vcG9seW1vcnBoJztcbmltcG9ydCB7IFBSSVpNX0hJTlRfT1BUSU9OUywgUHJpem1IaW50T3B0aW9ucyB9IGZyb20gJy4uL2hpbnQvaGludC1vcHRpb25zJztcbmltcG9ydCB7IFByaXptSGludERpcmVjdGl2ZSB9IGZyb20gJy4uL2hpbnQvaGludC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1Ub29sdGlwXTpub3QobmctY29udGFpbmVyKScsXG4gIHByb3ZpZGVyczogW1xuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fSElOVF9PUFRJT05TLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUFJJWk1fVE9PTFRJUF9PUFRJT05TKSxcbiAgICB9LFxuICBdLFxuICBleHBvcnRBczogJ3ByaXptVG9vbHRpcCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIFByaXptSGludERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgncHJpem1BdXRvUmVwb3NpdGlvbicpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1BdXRvUmVwb3NpdGlvbjogUHJpem1IaW50T3B0aW9uc1snYXV0b1JlcG9zaXRpb24nXSA9IHRoaXMub3B0aW9ucy5hdXRvUmVwb3NpdGlvbjtcblxuICBASW5wdXQoJ3ByaXptVG9vbHRpcERpcmVjdGlvbicpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50RGlyZWN0aW9uOiBQcml6bUhpbnRPcHRpb25zWydkaXJlY3Rpb24nXSA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG5cbiAgQElucHV0KCdwcml6bVRvb2x0aXBJZCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50SWQ6IHN0cmluZyA9ICdoaW50SWRfJyArIHByaXptR2VuZXJhdGVJZCgpO1xuXG4gIEBJbnB1dCgncHJpem1Ub29sdGlwU2hvd0RlbGF5JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRTaG93RGVsYXk6IFByaXptSGludE9wdGlvbnNbJ3Nob3dEZWxheSddID0gdGhpcy5vcHRpb25zLnNob3dEZWxheTtcblxuICBASW5wdXQoJ3ByaXptVG9vbHRpcEhpZGVEZWxheScpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50SGlkZURlbGF5OiBQcml6bUhpbnRPcHRpb25zWydoaWRlRGVsYXknXSA9IHRoaXMub3B0aW9ucy5oaWRlRGVsYXk7XG5cbiAgQElucHV0KCdwcml6bVRvb2x0aXBIb3N0JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRIb3N0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgncHJpem1Ub29sdGlwQ29udGV4dCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50Q29udGV4dCA9IHt9O1xuXG4gIEBJbnB1dCgncHJpem1Ub29sdGlwQ2FuU2hvdycpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50Q2FuU2hvdyA9IHRydWU7XG5cbiAgQElucHV0KCdwcml6bVRvb2x0aXAnKVxuICBAcHJpem1SZXF1aXJlZFNldHRlcigpXG4gIG92ZXJyaWRlIHNldCBwcml6bUhpbnQodmFsdWU6IFBvbHltb3JwaENvbnRlbnQgfCBudWxsKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgncHJpem1Ub29sdGlwU2hvd2VkJylcbiAgb3ZlcnJpZGUgcHJpem1IaW50U2hvd2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBjb250YWluZXJDb21wb25lbnQgPSBQcml6bVRvb2x0aXBDb250YWluZXJDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBvbkhvdmVyQWN0aXZlID0gZmFsc2U7XG4gIHByb3RlY3RlZCBjbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pIHB1YmxpYyBvbkNsaWNrKHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbGlja09uVG9vbHRpcCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG4gICAgaWYgKGNsaWNrT25Ub29sdGlwICYmICF0aGlzLmNsaWNrZWRJbnNpZGUpIHRoaXMuY2xpY2tlZEluc2lkZSA9IHRydWU7XG4gICAgaWYgKCF0aGlzLmNsaWNrZWRJbnNpZGUpIHJldHVybjtcbiAgICB0aGlzLnNob3ckLm5leHQoY2xpY2tPblRvb2x0aXApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxuICBwdWJsaWMgY2xvc2VPbkVzYygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93KSB0aGlzLnNob3cgPSBmYWxzZTtcbiAgfVxufVxuIl19