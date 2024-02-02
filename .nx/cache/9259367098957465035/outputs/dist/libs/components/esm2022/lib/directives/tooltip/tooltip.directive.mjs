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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTooltipDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTooltipDirective, selector: "[prizmTooltip]:not(ng-container)", inputs: { prizmAutoReposition: "prizmAutoReposition", prizmHintDirection: ["prizmTooltipDirection", "prizmHintDirection"], prizmHintId: ["prizmTooltipId", "prizmHintId"], prizmHintShowDelay: ["prizmTooltipShowDelay", "prizmHintShowDelay"], prizmHintHideDelay: ["prizmTooltipHideDelay", "prizmHintHideDelay"], prizmHintHost: ["prizmTooltipHost", "prizmHintHost"], prizmHintContext: ["prizmTooltipContext", "prizmHintContext"], prizmHintCanShow: ["prizmTooltipCanShow", "prizmHintCanShow"], prizmHint: ["prizmTooltip", "prizmHint"] }, outputs: { prizmHintShowed: "prizmTooltipShowed" }, host: { listeners: { "document:click": "onClick($event.target)", "document:keydown.esc": "closeOnEsc($event)" } }, providers: [
            PrizmDestroyService,
            {
                provide: PRIZM_HINT_OPTIONS,
                useExisting: forwardRef(() => PRIZM_TOOLTIP_OPTIONS),
            },
        ], exportAs: ["prizmTooltip"], usesInheritance: true, ngImport: i0 }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTooltipDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9EQUFvRDtBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBb0IsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFhNUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQjtJQVg3RDs7UUFjVyx3QkFBbUIsR0FBdUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFJdEYsdUJBQWtCLEdBQWtDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBSTNFLGdCQUFXLEdBQVcsU0FBUyxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBSXBELHVCQUFrQixHQUFrQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUkzRSx1QkFBa0IsR0FBa0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFJM0Usa0JBQWEsR0FBdUIsSUFBSSxDQUFDO1FBSXpDLHFCQUFnQixH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UUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0LXJlbmFtZSAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSwgcHJpem1HZW5lcmF0ZUlkIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1Ub29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFJJWk1fVE9PTFRJUF9PUFRJT05TIH0gZnJvbSAnLi90b29sdGlwLW9wdGlvbnMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCwgcHJpem1SZXF1aXJlZFNldHRlciB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFBvbHltb3JwaENvbnRlbnQgfSBmcm9tICcuLi9wb2x5bW9ycGgnO1xuaW1wb3J0IHsgUFJJWk1fSElOVF9PUFRJT05TLCBQcml6bUhpbnRPcHRpb25zIH0gZnJvbSAnLi4vaGludC9oaW50LW9wdGlvbnMnO1xuaW1wb3J0IHsgUHJpem1IaW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vaGludC9oaW50LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVRvb2x0aXBdOm5vdChuZy1jb250YWluZXIpJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUklaTV9ISU5UX09QVElPTlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQUklaTV9UT09MVElQX09QVElPTlMpLFxuICAgIH0sXG4gIF0sXG4gIGV4cG9ydEFzOiAncHJpem1Ub29sdGlwJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ub29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgUHJpem1IaW50RGlyZWN0aXZlIHtcbiAgQElucHV0KCdwcml6bUF1dG9SZXBvc2l0aW9uJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUF1dG9SZXBvc2l0aW9uOiBQcml6bUhpbnRPcHRpb25zWydhdXRvUmVwb3NpdGlvbiddID0gdGhpcy5vcHRpb25zLmF1dG9SZXBvc2l0aW9uO1xuXG4gIEBJbnB1dCgncHJpem1Ub29sdGlwRGlyZWN0aW9uJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnREaXJlY3Rpb246IFByaXptSGludE9wdGlvbnNbJ2RpcmVjdGlvbiddID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcblxuICBASW5wdXQoJ3ByaXptVG9vbHRpcElkJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRJZDogc3RyaW5nID0gJ2hpbnRJZF8nICsgcHJpem1HZW5lcmF0ZUlkKCk7XG5cbiAgQElucHV0KCdwcml6bVRvb2x0aXBTaG93RGVsYXknKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG92ZXJyaWRlIHByaXptSGludFNob3dEZWxheTogUHJpem1IaW50T3B0aW9uc1snc2hvd0RlbGF5J10gPSB0aGlzLm9wdGlvbnMuc2hvd0RlbGF5O1xuXG4gIEBJbnB1dCgncHJpem1Ub29sdGlwSGlkZURlbGF5JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRIaWRlRGVsYXk6IFByaXptSGludE9wdGlvbnNbJ2hpZGVEZWxheSddID0gdGhpcy5vcHRpb25zLmhpZGVEZWxheTtcblxuICBASW5wdXQoJ3ByaXptVG9vbHRpcEhvc3QnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG92ZXJyaWRlIHByaXptSGludEhvc3Q6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KCdwcml6bVRvb2x0aXBDb250ZXh0JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRDb250ZXh0ID0ge307XG5cbiAgQElucHV0KCdwcml6bVRvb2x0aXBDYW5TaG93JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRDYW5TaG93ID0gdHJ1ZTtcblxuICBASW5wdXQoJ3ByaXptVG9vbHRpcCcpXG4gIEBwcml6bVJlcXVpcmVkU2V0dGVyKClcbiAgb3ZlcnJpZGUgc2V0IHByaXptSGludCh2YWx1ZTogUG9seW1vcnBoQ29udGVudCB8IG51bGwpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LXJlbmFtZVxuICBAT3V0cHV0KCdwcml6bVRvb2x0aXBTaG93ZWQnKVxuICBvdmVycmlkZSBwcml6bUhpbnRTaG93ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IGNvbnRhaW5lckNvbXBvbmVudCA9IFByaXptVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudDtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IG9uSG92ZXJBY3RpdmUgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgcHVibGljIG9uQ2xpY2sodGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNsaWNrT25Ub29sdGlwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcbiAgICBpZiAoY2xpY2tPblRvb2x0aXAgJiYgIXRoaXMuY2xpY2tlZEluc2lkZSkgdGhpcy5jbGlja2VkSW5zaWRlID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuY2xpY2tlZEluc2lkZSkgcmV0dXJuO1xuICAgIHRoaXMuc2hvdyQubmV4dChjbGlja09uVG9vbHRpcCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBjbG9zZU9uRXNjKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3cpIHRoaXMuc2hvdyA9IGZhbHNlO1xuICB9XG59XG4iXX0=