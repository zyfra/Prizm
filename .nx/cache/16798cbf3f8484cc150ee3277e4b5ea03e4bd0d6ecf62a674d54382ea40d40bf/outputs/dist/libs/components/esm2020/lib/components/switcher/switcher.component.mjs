import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Optional, Output, Self, } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { NgControl } from '@angular/forms';
import { noop } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PrizmSwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmSwitcherHintDirective } from './directives/switcher-hint.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class PrizmSwitcherComponent extends PrizmAbstractTestId {
    set selectedSwitcherIdx(idx) {
        const item = this.switchers[idx];
        if (item)
            this.selectSwitcher(item, idx);
    }
    get selectedSwitcherIdx() {
        return this.selectedSwitcherIdx_;
    }
    constructor(cdRef, ngControl) {
        super();
        this.cdRef = cdRef;
        this.ngControl = ngControl;
        this.onChange = noop;
        this.onTouched = noop;
        this.selectedSwitcherIdx_ = 0;
        this.size = 'l';
        this.type = 'inner';
        this.switchers = [];
        this.fullWidth = false;
        this.selectedSwitcherIdxChange = new EventEmitter();
        this.testId_ = 'ui_switcher';
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    selectSwitcher(item, idx) {
        if (this.ngControl?.disabled)
            return;
        if (item.disabled)
            return;
        if (this.selectedSwitcherIdx === idx)
            return;
        this.selectedSwitcherIdxChange.emit((this.selectedSwitcherIdx_ = idx));
        this.onChange(this.selectedSwitcherIdx);
    }
    writeValue(idx) {
        this.selectedSwitcherIdx = parseInt(idx);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.cdRef.markForCheck();
    }
}
PrizmSwitcherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSwitcherComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmSwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmSwitcherComponent, isStandalone: true, selector: "prizm-switcher", inputs: { size: "size", type: "type", switchers: "switchers", selectedSwitcherIdx: "selectedSwitcherIdx", fullWidth: "fullWidth" }, outputs: { selectedSwitcherIdxChange: "selectedSwitcherIdxChange" }, host: { properties: { "class.full-width": "this.fullWidth" } }, usesInheritance: true, ngImport: i0, template: "<div class=\"container\">\n  <ng-container *ngFor=\"let switcher of switchers; let i = index\">\n    <prizm-switcher-item\n      class=\"switcher-item\"\n      *ngIf=\"!switcher.hide\"\n      [attr.first-child]=\"i === 0\"\n      [attr.last-child]=\"i === switchers.length - 1\"\n      [data]=\"$any(switcher)\"\n      [disabled]=\"!!ngControl?.disabled\"\n      [isActive]=\"selectedSwitcherIdx === i\"\n      [type]=\"type\"\n      [size]=\"size\"\n      [fullWidth]=\"fullWidth\"\n      [prizmSwitcherHint]=\"switcher.hint\"\n      (click)=\"selectSwitcher(switcher, i)\"\n    ></prizm-switcher-item>\n  </ng-container>\n</div>\n", styles: [":host{display:inline-flex}:host .container{display:flex}:host.full-width,:host.full-width .container{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PrizmSwitcherHintDirective, selector: "[prizmSwitcherHint]", inputs: ["prizmSwitcherHint"] }, { kind: "component", type: PrizmSwitcherItemComponent, selector: "prizm-switcher-item", inputs: ["hint", "size", "type", "data", "isActive", "disabled", "fullWidth"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmSwitcherComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmSwitcherComponent.prototype, "type", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmSwitcherComponent.prototype, "switchers", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PrizmSwitcherComponent.prototype, "selectedSwitcherIdx", null);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSwitcherComponent.prototype, "fullWidth", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSwitcherComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-switcher', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [CommonModule, PrizmSwitcherHintDirective, PrizmSwitcherItemComponent], template: "<div class=\"container\">\n  <ng-container *ngFor=\"let switcher of switchers; let i = index\">\n    <prizm-switcher-item\n      class=\"switcher-item\"\n      *ngIf=\"!switcher.hide\"\n      [attr.first-child]=\"i === 0\"\n      [attr.last-child]=\"i === switchers.length - 1\"\n      [data]=\"$any(switcher)\"\n      [disabled]=\"!!ngControl?.disabled\"\n      [isActive]=\"selectedSwitcherIdx === i\"\n      [type]=\"type\"\n      [size]=\"size\"\n      [fullWidth]=\"fullWidth\"\n      [prizmSwitcherHint]=\"switcher.hint\"\n      (click)=\"selectSwitcher(switcher, i)\"\n    ></prizm-switcher-item>\n  </ng-container>\n</div>\n", styles: [":host{display:inline-flex}:host .container{display:flex}:host.full-width,:host.full-width .container{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { size: [{
                type: Input
            }], type: [{
                type: Input
            }], switchers: [{
                type: Input
            }], selectedSwitcherIdx: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.full-width']
            }], selectedSwitcherIdxChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9zd2l0Y2hlci9zd2l0Y2hlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3N3aXRjaGVyL3N3aXRjaGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUF3QixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQVVsRixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsbUJBQW1CO0lBaUI3RCxJQUVXLG1CQUFtQixDQUFDLEdBQVc7UUFDeEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQVdELFlBQ2tCLEtBQXdCLEVBQ0osU0FBb0I7UUFFeEQsS0FBSyxFQUFFLENBQUM7UUFIUSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNKLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFyQzFELGFBQVEsR0FBd0IsSUFBSSxDQUFDO1FBQ3JDLGNBQVMsR0FBZSxJQUFJLENBQUM7UUFDckIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBSTFCLFNBQUksR0FBc0IsR0FBRyxDQUFDO1FBSTlCLFNBQUksR0FBc0IsT0FBTyxDQUFDO1FBSWxDLGNBQVMsR0FBd0IsRUFBRSxDQUFDO1FBZXBDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFUiw4QkFBeUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRSxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBT3hDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUNNLGNBQWMsQ0FBQyxJQUF1QixFQUFFLEdBQVc7UUFDeEQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVE7WUFBRSxPQUFPO1FBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzFCLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLEdBQUc7WUFBRSxPQUFPO1FBQzdDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxVQUFVLENBQUMsR0FBVztRQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTSxnQkFBZ0IsQ0FBQyxFQUEyQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ00saUJBQWlCLENBQUMsRUFBYztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsVUFBbUI7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzttSEFqRVUsc0JBQXNCO3VHQUF0QixzQkFBc0IsMFdDNUJuQywwbkJBa0JBLDJLRFFZLFlBQVksZ1FBQUUsMEJBQTBCLCtGQUFFLDBCQUEwQjtBQU85RTtJQUNDLGdCQUFnQixFQUFFOztvREFDa0I7QUFFckM7SUFDQyxnQkFBZ0IsRUFBRTs7b0RBQ3NCO0FBRXpDO0lBQ0MsZ0JBQWdCLEVBQUU7O3lEQUN3QjtBQUUzQztJQUNDLGdCQUFnQixFQUFFOzs7aUVBSWxCO0FBS0Q7SUFFQyxnQkFBZ0IsRUFBRTs7eURBQ007MkZBOUJkLHNCQUFzQjtrQkFSbEMsU0FBUzsrQkFDRSxnQkFBZ0IsbUJBR1QsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLENBQUM7OzBCQXdDNUUsUUFBUTs7MEJBQUksSUFBSTs0Q0EvQlosSUFBSTtzQkFGVixLQUFLO2dCQU1DLElBQUk7c0JBRlYsS0FBSztnQkFNQyxTQUFTO3NCQUZmLEtBQUs7Z0JBTUssbUJBQW1CO3NCQUY3QixLQUFLO2dCQWFDLFNBQVM7c0JBSGYsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBSWQseUJBQXlCO3NCQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptU3dpdGNoZXJJdGVtLCBQcml6bVN3aXRjaGVyU2l6ZSwgUHJpem1Td2l0Y2hlclR5cGUgfSBmcm9tICcuL3N3aXRjaGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1Td2l0Y2hlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3dpdGNoZXItaXRlbS9zd2l0Y2hlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVN3aXRjaGVySGludERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zd2l0Y2hlci1oaW50LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpdGNoZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFByaXptU3dpdGNoZXJIaW50RGlyZWN0aXZlLCBQcml6bVN3aXRjaGVySXRlbUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU3dpdGNoZXJDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZTogKHY6IG51bWJlcikgPT4gdm9pZCA9IG5vb3A7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9IG5vb3A7XG4gIHByaXZhdGUgc2VsZWN0ZWRTd2l0Y2hlcklkeF8gPSAwO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHNpemU6IFByaXptU3dpdGNoZXJTaXplID0gJ2wnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHR5cGU6IFByaXptU3dpdGNoZXJUeXBlID0gJ2lubmVyJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBzd2l0Y2hlcnM6IFByaXptU3dpdGNoZXJJdGVtW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRTd2l0Y2hlcklkeChpZHg6IG51bWJlcikge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnN3aXRjaGVyc1tpZHhdO1xuICAgIGlmIChpdGVtKSB0aGlzLnNlbGVjdFN3aXRjaGVyKGl0ZW0sIGlkeCk7XG4gIH1cbiAgZ2V0IHNlbGVjdGVkU3dpdGNoZXJJZHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTd2l0Y2hlcklkeF87XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZ1bGwtd2lkdGgnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBmdWxsV2lkdGggPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkU3dpdGNoZXJJZHhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfc3dpdGNoZXInO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgcmVhZG9ubHkgbmdDb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZWxlY3RTd2l0Y2hlcihpdGVtOiBQcml6bVN3aXRjaGVySXRlbSwgaWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LmRpc2FibGVkKSByZXR1cm47XG4gICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFN3aXRjaGVySWR4ID09PSBpZHgpIHJldHVybjtcbiAgICB0aGlzLnNlbGVjdGVkU3dpdGNoZXJJZHhDaGFuZ2UuZW1pdCgodGhpcy5zZWxlY3RlZFN3aXRjaGVySWR4XyA9IGlkeCkpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWxlY3RlZFN3aXRjaGVySWR4KTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKGlkeDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFN3aXRjaGVySWR4ID0gcGFyc2VJbnQoaWR4KTtcbiAgfVxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN3aXRjaGVyIG9mIHN3aXRjaGVyczsgbGV0IGkgPSBpbmRleFwiPlxuICAgIDxwcml6bS1zd2l0Y2hlci1pdGVtXG4gICAgICBjbGFzcz1cInN3aXRjaGVyLWl0ZW1cIlxuICAgICAgKm5nSWY9XCIhc3dpdGNoZXIuaGlkZVwiXG4gICAgICBbYXR0ci5maXJzdC1jaGlsZF09XCJpID09PSAwXCJcbiAgICAgIFthdHRyLmxhc3QtY2hpbGRdPVwiaSA9PT0gc3dpdGNoZXJzLmxlbmd0aCAtIDFcIlxuICAgICAgW2RhdGFdPVwiJGFueShzd2l0Y2hlcilcIlxuICAgICAgW2Rpc2FibGVkXT1cIiEhbmdDb250cm9sPy5kaXNhYmxlZFwiXG4gICAgICBbaXNBY3RpdmVdPVwic2VsZWN0ZWRTd2l0Y2hlcklkeCA9PT0gaVwiXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgW2Z1bGxXaWR0aF09XCJmdWxsV2lkdGhcIlxuICAgICAgW3ByaXptU3dpdGNoZXJIaW50XT1cInN3aXRjaGVyLmhpbnRcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdFN3aXRjaGVyKHN3aXRjaGVyLCBpKVwiXG4gICAgPjwvcHJpem0tc3dpdGNoZXItaXRlbT5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==