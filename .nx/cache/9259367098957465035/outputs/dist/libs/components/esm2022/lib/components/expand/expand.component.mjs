import { __decorate, __metadata } from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, HostListener, Inject, Input, TemplateRef, ViewChild, } from '@angular/core';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { prizmIsCurrentTarget } from '../../util/dom';
import { PrizmExpandContentDirective } from './expand-content.directive';
import { PRIZM_EXPAND_LOADED } from './expand.const';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PrizmLoaderModule } from '../loader';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../loader/loader.component";
var State;
(function (State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Loading"] = 1] = "Loading";
    State[State["Prepared"] = 2] = "Prepared";
    State[State["Animated"] = 3] = "Animated";
})(State || (State = {}));
const LOADER_HEIGHT = 48;
export class PrizmExpandComponent extends PrizmAbstractTestId {
    set expanded(expanded) {
        if (this.expanded_ === null) {
            this.expanded_ = expanded;
            return;
        }
        if (this.state !== State.Idle) {
            this.expanded_ = expanded;
            this.state = State.Animated;
            return;
        }
        this.expanded_ = expanded;
        this.reTrigger(this.isLoading && expanded ? State.Loading : State.Animated);
    }
    onTransitionEnd(event) {
        if (prizmIsCurrentTarget(event) && event.propertyName === 'opacity' && this.state === State.Animated) {
            this.state = State.Idle;
        }
    }
    onExpandLoaded(event) {
        event.stopPropagation();
        if (this.state === State.Loading) {
            this.reTrigger(State.Animated);
        }
    }
    constructor(changeDetectorRef) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.state = State.Idle;
        this.isLoading = false;
        this.content = null;
        this.expanded_ = null;
        this.testId_ = 'ui-area--expand';
    }
    get overflow() {
        return this.state !== State.Idle;
    }
    get loading() {
        return !!this.expanded_ && this.isLoading && this.state === State.Loading;
    }
    get height() {
        const { expanded_, state, contentWrapper } = this;
        if ((expanded_ && state === State.Prepared) || (!expanded_ && state === State.Animated)) {
            return 0;
        }
        if (contentWrapper &&
            ((!expanded_ && state === State.Prepared) || (expanded_ && state === State.Animated))) {
            return contentWrapper.nativeElement.offsetHeight;
        }
        if (contentWrapper && expanded_ && state === State.Loading) {
            return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
        }
        return null;
    }
    get contentVisible() {
        return this.expanded_ || this.state !== State.Idle;
    }
    reTrigger(state) {
        this.state = State.Prepared;
        // We need delay to re-trigger CSS height transition from the correct number
        setTimeout(() => {
            if (this.state !== State.Prepared) {
                return;
            }
            this.state = state;
            this.changeDetectorRef.markForCheck();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmExpandComponent, deps: [{ token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmExpandComponent, isStandalone: true, selector: "prizm-expand", inputs: { isLoading: "isLoading", expanded: "expanded" }, host: { listeners: { "transitionend": "onTransitionEnd($event)", "prizm-expand-loaded": "onExpandLoaded($event)" }, properties: { "class._expanded": "this.expanded_", "attr.aria-expanded": "this.expanded_", "class._overflow": "this.overflow", "class._loading": "this.loading", "style.height.px": "this.height" } }, queries: [{ propertyName: "content", first: true, predicate: PrizmExpandContentDirective, descendants: true, read: TemplateRef }], viewQueries: [{ propertyName: "contentWrapper", first: true, predicate: ["wrapper"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"wrapper\" #wrapper>\n  <ng-container *ngIf=\"contentVisible\">\n    <ng-content></ng-content>\n    <prizm-loader *ngIf=\"this.isLoading; else content\" [overlay]=\"true\" [showLoader]=\"loading\" size=\"l\">\n      <ng-container [ngTemplateOutlet]=\"content\"></ng-container>\n    </prizm-loader>\n  </ng-container>\n</div>\n", styles: [":host{display:block;transition-property:opacity,height,visibility;transition-duration:var(--prizm-duration, .3s);opacity:0}:host._overflow{overflow:hidden}:host._expanded{opacity:1;transform:translateZ(0)}:host._loading{opacity:.99}.wrapper:before,.wrapper:after{content:\"\";display:table}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: PrizmLoaderModule }, { kind: "component", type: i2.PrizmLoaderComponent, selector: "prizm-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmExpandComponent.prototype, "isLoading", void 0);
__decorate([
    prizmRequiredSetter(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmExpandComponent.prototype, "expanded", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmExpandComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-expand', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [CommonModule, PrizmLoaderModule], template: "<div class=\"wrapper\" #wrapper>\n  <ng-container *ngIf=\"contentVisible\">\n    <ng-content></ng-content>\n    <prizm-loader *ngIf=\"this.isLoading; else content\" [overlay]=\"true\" [showLoader]=\"loading\" size=\"l\">\n      <ng-container [ngTemplateOutlet]=\"content\"></ng-container>\n    </prizm-loader>\n  </ng-container>\n</div>\n", styles: [":host{display:block;transition-property:opacity,height,visibility;transition-duration:var(--prizm-duration, .3s);opacity:0}:host._overflow{overflow:hidden}:host._expanded{opacity:1;transform:translateZ(0)}:host._loading{opacity:.99}.wrapper:before,.wrapper:after{content:\"\";display:table}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }]; }, propDecorators: { contentWrapper: [{
                type: ViewChild,
                args: ['wrapper']
            }], isLoading: [{
                type: Input
            }], expanded: [{
                type: Input
            }], content: [{
                type: ContentChild,
                args: [PrizmExpandContentDirective, { read: TemplateRef }]
            }], expanded_: [{
                type: HostBinding,
                args: ['class._expanded']
            }, {
                type: HostBinding,
                args: ['attr.aria-expanded']
            }], onTransitionEnd: [{
                type: HostListener,
                args: ['transitionend', ['$event']]
            }], onExpandLoaded: [{
                type: HostListener,
                args: [PRIZM_EXPAND_LOADED, ['$event']]
            }], overflow: [{
                type: HostBinding,
                args: ['class._overflow']
            }], loading: [{
                type: HostBinding,
                args: ['class._loading']
            }], height: [{
                type: HostBinding,
                args: ['style.height.px']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5kL2V4cGFuZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuZC9leHBhbmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFOUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ1IsaUNBQUksQ0FBQTtJQUNKLHVDQUFPLENBQUE7SUFDUCx5Q0FBUSxDQUFBO0lBQ1IseUNBQVEsQ0FBQTtBQUNWLENBQUMsRUFMSSxLQUFLLEtBQUwsS0FBSyxRQUtUO0FBRUQsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FB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LFdBQVc7dUJBQUMsb0JBQW9CO2dCQU0xQixlQUFlO3NCQURyQixZQUFZO3VCQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRbEMsY0FBYztzQkFEcEIsWUFBWTt1QkFBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFjekMsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLGlCQUFpQjtnQkFNMUIsT0FBTztzQkFEVixXQUFXO3VCQUFDLGdCQUFnQjtnQkFNekIsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdJZkNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wLCBwcml6bVJlcXVpcmVkU2V0dGVyIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgcHJpem1Jc0N1cnJlbnRUYXJnZXQgfSBmcm9tICcuLi8uLi91dGlsL2RvbSc7XG5cbmltcG9ydCB7IFByaXptRXhwYW5kQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vZXhwYW5kLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBSSVpNX0VYUEFORF9MT0FERUQgfSBmcm9tICcuL2V4cGFuZC5jb25zdCc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1Mb2FkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2FkZXInO1xuXG5lbnVtIFN0YXRlIHtcbiAgSWRsZSxcbiAgTG9hZGluZyxcbiAgUHJlcGFyZWQsXG4gIEFuaW1hdGVkLFxufVxuXG5jb25zdCBMT0FERVJfSEVJR0hUID0gNDg7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWV4cGFuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kLmNvbXBvbmVudC5sZXNzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFByaXptTG9hZGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1FeHBhbmRDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicpXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGVudFdyYXBwZXI/OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBwcml2YXRlIHN0YXRlID0gU3RhdGUuSWRsZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bVJlcXVpcmVkU2V0dGVyKClcbiAgc2V0IGV4cGFuZGVkKGV4cGFuZGVkOiBib29sZWFuIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLmV4cGFuZGVkXyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5leHBhbmRlZF8gPSBleHBhbmRlZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5JZGxlKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkXyA9IGV4cGFuZGVkO1xuICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkFuaW1hdGVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5leHBhbmRlZF8gPSBleHBhbmRlZDtcbiAgICB0aGlzLnJlVHJpZ2dlcih0aGlzLmlzTG9hZGluZyAmJiBleHBhbmRlZCA/IFN0YXRlLkxvYWRpbmcgOiBTdGF0ZS5BbmltYXRlZCk7XG4gIH1cblxuICBAQ29udGVudENoaWxkKFByaXptRXhwYW5kQ29udGVudERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwdWJsaWMgY29udGVudDogVGVtcGxhdGVSZWY8TmdJZkNvbnRleHQ8Ym9vbGVhbj4+IHwgbnVsbCA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fZXhwYW5kZWQnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIHByaXZhdGUgZXhwYW5kZWRfOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aS1hcmVhLS1leHBhbmQnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25UcmFuc2l0aW9uRW5kKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAocHJpem1Jc0N1cnJlbnRUYXJnZXQoZXZlbnQpICYmIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknICYmIHRoaXMuc3RhdGUgPT09IFN0YXRlLkFuaW1hdGVkKSB7XG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSWRsZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFBSSVpNX0VYUEFORF9MT0FERUQsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkV4cGFuZExvYWRlZChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLnN0YXRlID09PSBTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICB0aGlzLnJlVHJpZ2dlcihTdGF0ZS5BbmltYXRlZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fb3ZlcmZsb3cnKVxuICBnZXQgb3ZlcmZsb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgIT09IFN0YXRlLklkbGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLl9sb2FkaW5nJylcbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5leHBhbmRlZF8gJiYgdGhpcy5pc0xvYWRpbmcgJiYgdGhpcy5zdGF0ZSA9PT0gU3RhdGUuTG9hZGluZztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCB7IGV4cGFuZGVkXywgc3RhdGUsIGNvbnRlbnRXcmFwcGVyIH0gPSB0aGlzO1xuXG4gICAgaWYgKChleHBhbmRlZF8gJiYgc3RhdGUgPT09IFN0YXRlLlByZXBhcmVkKSB8fCAoIWV4cGFuZGVkXyAmJiBzdGF0ZSA9PT0gU3RhdGUuQW5pbWF0ZWQpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb250ZW50V3JhcHBlciAmJlxuICAgICAgKCghZXhwYW5kZWRfICYmIHN0YXRlID09PSBTdGF0ZS5QcmVwYXJlZCkgfHwgKGV4cGFuZGVkXyAmJiBzdGF0ZSA9PT0gU3RhdGUuQW5pbWF0ZWQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIGNvbnRlbnRXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChjb250ZW50V3JhcHBlciAmJiBleHBhbmRlZF8gJiYgc3RhdGUgPT09IFN0YXRlLkxvYWRpbmcpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChjb250ZW50V3JhcHBlci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCwgTE9BREVSX0hFSUdIVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgY29udGVudFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRfIHx8IHRoaXMuc3RhdGUgIT09IFN0YXRlLklkbGU7XG4gIH1cblxuICBwcml2YXRlIHJlVHJpZ2dlcihzdGF0ZTogU3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuUHJlcGFyZWQ7XG5cbiAgICAvLyBXZSBuZWVkIGRlbGF5IHRvIHJlLXRyaWdnZXIgQ1NTIGhlaWdodCB0cmFuc2l0aW9uIGZyb20gdGhlIGNvcnJlY3QgbnVtYmVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuUHJlcGFyZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwid3JhcHBlclwiICN3cmFwcGVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFZpc2libGVcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPHByaXptLWxvYWRlciAqbmdJZj1cInRoaXMuaXNMb2FkaW5nOyBlbHNlIGNvbnRlbnRcIiBbb3ZlcmxheV09XCJ0cnVlXCIgW3Nob3dMb2FkZXJdPVwibG9hZGluZ1wiIHNpemU9XCJsXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L3ByaXptLWxvYWRlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==