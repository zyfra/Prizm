import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, HostListener, Inject, Injector, Input, Optional, Output, TemplateRef, ViewChild, } from '@angular/core';
import { PrizmOverlayModule, PrizmOverlayRelativePosition, PrizmOverlayService, } from '../../../modules/overlay';
import { PolymorphModule, PrizmDropdownZoneModule, PrizmLifecycleModule, PrizmMutationObserveModule, PrizmZoneEventModule, } from '../../../directives';
import { debounceTime, delay, distinctUntilChanged, skip, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { CommonModule, DOCUMENT } from '@angular/common';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_DROPDOWN_HOST_OPTIONS } from './dropdown-host.options';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { PrizmDropdownHostControlDirective } from './dropdown-host-control.directive';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmZoneEventService } from '../../../directives/zone-event/zone-event.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../modules/overlay";
import * as i2 from "../../../directives/zone-event/zone-event.service";
import * as i3 from "@prizm-ui/helpers";
import * as i4 from "@angular/common";
import * as i5 from "@prizm-ui/theme";
import * as i6 from "../../../directives/lifecycle/lifecycle.directive";
import * as i7 from "../../../directives/zone-event/zone-event.directive";
import * as i8 from "../../../directives/polymorph/directives/outlet";
import * as i9 from "../../../directives/mutation-observer/mutation-observer.directive";
import * as i10 from "./dropdown-host-control.directive";
export class PrizmDropdownHostComponent extends PrizmAbstractTestId {
    set prizmDropdownHostWidth(width) {
        this._prizmDropdownHostWidth = width;
        this.updateWidth();
    }
    get prizmDropdownHostWidth() {
        return this._prizmDropdownHostWidth;
    }
    set autoReposition(state) {
        this.position?.updateConfig({ autoReposition: (this._autoReposition = state) });
    }
    get autoReposition() {
        return this._autoReposition;
    }
    set placement(place) {
        this.position?.updateConfig({ placement: place });
    }
    get placement() {
        return this._placement;
    }
    set isOpen(state) {
        this.isOpen$.next(state);
    }
    get isOpen() {
        return this.isOpen$.value;
    }
    constructor(prizmOverlayService, zoneEventService, dropdownHostControlDirective, document, options, el, cdRef, injector, destroy$) {
        super();
        this.prizmOverlayService = prizmOverlayService;
        this.zoneEventService = zoneEventService;
        this.dropdownHostControlDirective = dropdownHostControlDirective;
        this.document = document;
        this.options = options;
        this.el = el;
        this.cdRef = cdRef;
        this.injector = injector;
        this.destroy$ = destroy$;
        this.prizmDropdownHostId = 'dropdownHostId_' + prizmGenerateId();
        this.prizmDropdownCustomContext = {};
        this.delay = 0;
        this.canOpen = true;
        this.closeByEsc = false;
        this.closeOnOutsideClick = true;
        this._prizmDropdownHostWidth = this.options.width;
        this.testId_ = 'ui_dropdown_host';
        this.itemForListener = new Set();
        this.destroyReCalc$ = new Subject();
        this._autoReposition = this.options.autoReposition;
        this._placement = this.options.placement;
        this.isOpenChange = new EventEmitter();
        this.isOpen$ = new BehaviorSubject(false);
        this.positionSource$ = new BehaviorSubject('');
        this.position$ = this.positionSource$.pipe(delay(0));
        this.wrapper_class = 'prizm-overlay-dropdown-host no-overflow';
        this.destroy$.addCallback(() => this.closeOverlay());
    }
    closeIfNeed() {
        if (this.closeByEsc)
            this.closeOverlay();
    }
    ngAfterViewInit() {
        this.initOverlay();
        this.initClickListener();
    }
    updateWidth() {
        this.position?.updateConfig({
            width: this.prizmDropdownHostWidth ?? this.el.nativeElement.offsetWidth,
        });
    }
    initClickListener() {
        this.isOpen$
            .pipe(skip(1), debounceTime(this.delay), distinctUntilChanged(), tap(state => {
            if (state) {
                if (this.dropdownHostControlDirective?.enabled ?? true)
                    this.openOverlay();
            }
            else {
                this.closeOverlay();
            }
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    closeOverlay() {
        this.overlay?.close();
        if (this.lastEmittedState)
            this.isOpenChange.emit((this.lastEmittedState = false));
    }
    openOverlay() {
        this.overlay?.open();
        if (!this.lastEmittedState)
            this.isOpenChange.emit((this.lastEmittedState = true));
    }
    open() {
        this.isOpen$.next(true);
    }
    close() {
        this.isOpen$.next(false);
    }
    toggle() {
        this.isOpen$.next(!this.isOpen$.value);
    }
    initOverlay() {
        this.position = new PrizmOverlayRelativePosition({
            placement: this.placement,
            autoReposition: this.autoReposition,
            element: this.prizmDropdownHost ?? this.el.nativeElement,
        });
        this.updateWidth();
        this.overlay = this.prizmOverlayService
            .position(this.position)
            .config({
            wrapperClass: this.wrapper_class,
        })
            .content(this.temp)
            .create({
            parentInjector: this.injector,
        });
        this.initPositionListener(this.position);
    }
    reCalculatePositions(timeout = 0) {
        this.destroyReCalc$.next();
        timer(timeout)
            .pipe(tap(() => this.overlay?.reCalculatePositions()), takeUntil(this.destroy$), takeUntil(this.destroyReCalc$))
            .subscribe();
    }
    initPositionListener(position) {
        position.pos$
            .pipe(tap(data => {
            if (!data.extra)
                return;
            this.positionSource$.next(data.extra);
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    addListenerItems(el) {
        this.itemForListener.add(el);
    }
    removeListenerItems(el) {
        this.itemForListener.delete(el);
    }
    outsideClick() {
        if (!this.closeOnOutsideClick || !this.isOpen$.value)
            return;
        this.isOpen$.next(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownHostComponent, deps: [{ token: i1.PrizmOverlayService }, { token: i2.PrizmZoneEventService }, { token: PrizmDropdownHostControlDirective, host: true, optional: true }, { token: DOCUMENT }, { token: PRIZM_DROPDOWN_HOST_OPTIONS }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: i3.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmDropdownHostComponent, isStandalone: true, selector: "prizm-dropdown-host", inputs: { content: "content", prizmDropdownHostId: "prizmDropdownHostId", prizmDropdownCustomContext: "prizmDropdownCustomContext", delay: "delay", canOpen: "canOpen", closeByEsc: "closeByEsc", closeOnOutsideClick: "closeOnOutsideClick", prizmDropdownHost: "prizmDropdownHost", prizmDropdownHostWidth: "prizmDropdownHostWidth", autoReposition: "autoReposition", placement: "placement", isOpen: "isOpen", dropdownStyles: "dropdownStyles", dropdownClasses: "dropdownClasses" }, outputs: { isOpenChange: "isOpenChange" }, host: { listeners: { "window:keyup.esc": "closeIfNeed()" } }, providers: [PrizmDestroyService, PrizmZoneEventService], viewQueries: [{ propertyName: "temp", first: true, predicate: ["temp"], descendants: true }, { propertyName: "contentBlockRef", first: true, predicate: ["contentBlockRef"], descendants: true }], exportAs: ["prizm-dropdown-host"], usesInheritance: true, ngImport: i0, template: "<div class=\"block\" [prizmMutationObserverHost]=\"el.nativeElement\" (prizmMutationObserver)=\"updateWidth()\">\n  <ng-content></ng-content>\n  <ng-template #temp>\n    <div\n      class=\"prizm-dropdown-host-modal\"\n      [ngStyle]=\"dropdownStyles\"\n      [ngClass]=\"dropdownClasses\"\n      [id]=\"prizmDropdownHostId\"\n      [attr.position]=\"position$ | async\"\n      [childrenZones]=\"[zoneEventService]\"\n      (zoneOutsideEvent)=\"outsideClick()\"\n      (prizmAfterViewInit)=\"addListenerItems($event.nativeElement); reCalculatePositions()\"\n      (prizmOnDestroy)=\"removeListenerItems($event.nativeElement)\"\n      prizmTheme\n      prizmZoneEvent\n      zoneEventName=\"click\"\n    >\n      <ng-container\n        *polymorphOutlet=\"content; context: { custom: prizmDropdownCustomContext }\"\n      ></ng-container>\n    </div>\n  </ng-template>\n</div>\n", styles: [":host{position:relative;z-index:0;display:inline-block;width:var(--prizm-dropdown-host-width, 100%)}.block{height:100%;display:inline-block;width:var(--prizm-dropdown-host-width, 100%)}.prizm-dropdown-host-modal{width:100%;border-radius:var(--prizm-dropdrown-host-border-radius, 2px);border:var(--prizm-dropdrown-host-border, 1px solid var(--prizm-v3-background-stroke));background:var(--prizm-dropdrown-host-background, var(--prizm-v3-background-fill-overlay));box-shadow:var(--prizm-dropdrown-host-box-shadow, var(--prizm-v3-shadow-big-bottom))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmOverlayModule }, { kind: "ngmodule", type: PrizmThemeModule }, { kind: "directive", type: i5.PrizmThemeDirective, selector: "[prizmTheme]", inputs: ["prizmTheme"], outputs: ["prizmThemeChange"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i6.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmZoneEventModule }, { kind: "directive", type: i7.PrizmZoneEventDirective, selector: "[prizmZoneEvent]", inputs: ["zoneElement", "parentZone", "childrenZones", "zoneEventName", "zoneActive"], outputs: ["zoneOutsideEvent", "zoneInsideEvent"], exportAs: ["prizmZoneEvent"] }, { kind: "ngmodule", type: PolymorphModule }, { kind: "directive", type: i8.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmDropdownZoneModule }, { kind: "ngmodule", type: PrizmMutationObserveModule }, { kind: "directive", type: i9.PrizmMutationObserveDirective, selector: "[prizmMutationObserver]", inputs: ["prizmMutationObserverConfig", "prizmMutationObserverHost"], outputs: ["prizmMutationObserver"], exportAs: ["prizmMutationObserverEl"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmDropdownHostComponent.prototype, "prizmDropdownHostId", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmDropdownHostComponent.prototype, "prizmDropdownCustomContext", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmDropdownHostComponent.prototype, "delay", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmDropdownHostComponent.prototype, "canOpen", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmDropdownHostComponent.prototype, "closeByEsc", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmDropdownHostComponent.prototype, "closeOnOutsideClick", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmDropdownHostComponent.prototype, "prizmDropdownHostWidth", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownHostComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-dropdown-host', changeDetection: ChangeDetectionStrategy.OnPush, providers: [PrizmDestroyService, PrizmZoneEventService], exportAs: 'prizm-dropdown-host', standalone: true, imports: [
                        PrizmDropdownHostControlDirective,
                        CommonModule,
                        PrizmOverlayModule,
                        PrizmThemeModule,
                        PrizmLifecycleModule,
                        PrizmZoneEventModule,
                        PolymorphModule,
                        PrizmDropdownZoneModule,
                        PrizmMutationObserveModule,
                    ], template: "<div class=\"block\" [prizmMutationObserverHost]=\"el.nativeElement\" (prizmMutationObserver)=\"updateWidth()\">\n  <ng-content></ng-content>\n  <ng-template #temp>\n    <div\n      class=\"prizm-dropdown-host-modal\"\n      [ngStyle]=\"dropdownStyles\"\n      [ngClass]=\"dropdownClasses\"\n      [id]=\"prizmDropdownHostId\"\n      [attr.position]=\"position$ | async\"\n      [childrenZones]=\"[zoneEventService]\"\n      (zoneOutsideEvent)=\"outsideClick()\"\n      (prizmAfterViewInit)=\"addListenerItems($event.nativeElement); reCalculatePositions()\"\n      (prizmOnDestroy)=\"removeListenerItems($event.nativeElement)\"\n      prizmTheme\n      prizmZoneEvent\n      zoneEventName=\"click\"\n    >\n      <ng-container\n        *polymorphOutlet=\"content; context: { custom: prizmDropdownCustomContext }\"\n      ></ng-container>\n    </div>\n  </ng-template>\n</div>\n", styles: [":host{position:relative;z-index:0;display:inline-block;width:var(--prizm-dropdown-host-width, 100%)}.block{height:100%;display:inline-block;width:var(--prizm-dropdown-host-width, 100%)}.prizm-dropdown-host-modal{width:100%;border-radius:var(--prizm-dropdrown-host-border-radius, 2px);border:var(--prizm-dropdrown-host-border, 1px solid var(--prizm-v3-background-stroke));background:var(--prizm-dropdrown-host-background, var(--prizm-v3-background-fill-overlay));box-shadow:var(--prizm-dropdrown-host-box-shadow, var(--prizm-v3-shadow-big-bottom))}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmOverlayService }, { type: i2.PrizmZoneEventService }, { type: i10.PrizmDropdownHostControlDirective, decorators: [{
                    type: Inject,
                    args: [PrizmDropdownHostControlDirective]
                }, {
                    type: Host
                }, {
                    type: Optional
                }] }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DROPDOWN_HOST_OPTIONS]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: i3.PrizmDestroyService }]; }, propDecorators: { content: [{
                type: Input
            }], prizmDropdownHostId: [{
                type: Input
            }], prizmDropdownCustomContext: [{
                type: Input
            }], delay: [{
                type: Input
            }], canOpen: [{
                type: Input
            }], closeByEsc: [{
                type: Input
            }], closeOnOutsideClick: [{
                type: Input
            }], prizmDropdownHost: [{
                type: Input
            }], prizmDropdownHostWidth: [{
                type: Input
            }], autoReposition: [{
                type: Input
            }], placement: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], dropdownStyles: [{
                type: Input
            }], dropdownClasses: [{
                type: Input
            }], temp: [{
                type: ViewChild,
                args: ['temp']
            }], isOpenChange: [{
                type: Output
            }], contentBlockRef: [{
                type: ViewChild,
                args: ['contentBlockRef']
            }], closeIfNeed: [{
                type: HostListener,
                args: ['window:keyup.esc']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0L2Ryb3Bkb3duLWhvc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bnMvZHJvcGRvd24taG9zdC9kcm9wZG93bi1ob3N0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLDRCQUE0QixFQUM1QixtQkFBbUIsR0FDcEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBRUwsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLG9CQUFvQixHQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFB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LE1BQU0sYUFDcEMsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxZQUM3QyxxQkFBcUIsY0FDbkIsSUFBSSxXQUNQO3dCQUNQLGlDQUFpQzt3QkFDakMsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsdUJBQXVCO3dCQUN2QiwwQkFBMEI7cUJBQzNCOzswQkE2RkUsTUFBTTsyQkFBQyxpQ0FBaUM7OzBCQUN4QyxJQUFJOzswQkFDSixRQUFROzswQkFFUixNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsMkJBQTJCOzhKQS9GNUIsT0FBTztzQkFBZixLQUFLO2dCQUlOLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTiwwQkFBMEI7c0JBRnpCLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLE9BQU87c0JBRk4sS0FBSztnQkFNTixVQUFVO3NCQUZULEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQUtOLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFLRixzQkFBc0I7c0JBRnpCLEtBQUs7Z0JBa0JPLGNBQWM7c0JBQTFCLEtBQUs7Z0JBUU8sU0FBUztzQkFBckIsS0FBSztnQkFPTyxNQUFNO3NCQUFsQixLQUFLO2dCQVNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDYSxJQUFJO3NCQUF0QixTQUFTO3VCQUFDLE1BQU07Z0JBRUUsWUFBWTtzQkFBOUIsTUFBTTtnQkFVdUIsZUFBZTtzQkFBNUMsU0FBUzt1QkFBQyxpQkFBaUI7Z0JBcUJyQixXQUFXO3NCQURqQixZQUFZO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJpem1PdmVybGF5Q29udHJvbCxcbiAgUHJpem1PdmVybGF5TW9kdWxlLFxuICBQcml6bU92ZXJsYXlSZWxhdGl2ZVBvc2l0aW9uLFxuICBQcml6bU92ZXJsYXlTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgUG9seW1vcnBoQ29udGVudCxcbiAgUG9seW1vcnBoTW9kdWxlLFxuICBQcml6bURyb3Bkb3duWm9uZU1vZHVsZSxcbiAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG4gIFByaXptTXV0YXRpb25PYnNlcnZlTW9kdWxlLFxuICBQcml6bVpvbmVFdmVudE1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRlbGF5LCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2tpcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlLCBwcml6bUdlbmVyYXRlSWQgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9EUk9QRE9XTl9IT1NUX09QVElPTlMsIFByaXptRHJvcGRvd25Ib3N0T3B0aW9ucyB9IGZyb20gJy4vZHJvcGRvd24taG9zdC5vcHRpb25zJztcbmltcG9ydCB7XG4gIFByaXptRHJvcGRvd25Ib3N0Q2xhc3NlcyxcbiAgUHJpem1Ecm9wZG93bkhvc3RDb250ZXh0LFxuICBQcml6bURyb3Bkb3duSG9zdEN1c3RvbUNvbnRleHQsXG4gIFByaXptRHJvcGRvd25Ib3N0U3R5bGVzLFxuICBQcml6bURyb3Bkb3duSG9zdFdpZHRoLFxufSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9vdmVybGF5L21vZGVscyc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkhvc3RDb250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1ob3N0LWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptVGhlbWVNb2R1bGUgfSBmcm9tICdAcHJpem0tdWkvdGhlbWUnO1xuaW1wb3J0IHsgUHJpem1ab25lRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy96b25lLWV2ZW50L3pvbmUtZXZlbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWRyb3Bkb3duLWhvc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24taG9zdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLWhvc3QuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2UsIFByaXptWm9uZUV2ZW50U2VydmljZV0sXG4gIGV4cG9ydEFzOiAncHJpem0tZHJvcGRvd24taG9zdCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBQcml6bURyb3Bkb3duSG9zdENvbnRyb2xEaXJlY3RpdmUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptT3ZlcmxheU1vZHVsZSxcbiAgICBQcml6bVRoZW1lTW9kdWxlLFxuICAgIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxuICAgIFByaXptWm9uZUV2ZW50TW9kdWxlLFxuICAgIFBvbHltb3JwaE1vZHVsZSxcbiAgICBQcml6bURyb3Bkb3duWm9uZU1vZHVsZSxcbiAgICBQcml6bU11dGF0aW9uT2JzZXJ2ZU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbnRlbnQhOiBQb2x5bW9ycGhDb250ZW50PFByaXptRHJvcGRvd25Ib3N0Q29udGV4dD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bURyb3Bkb3duSG9zdElkOiBzdHJpbmcgPSAnZHJvcGRvd25Ib3N0SWRfJyArIHByaXptR2VuZXJhdGVJZCgpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHJpem1Ecm9wZG93bkN1c3RvbUNvbnRleHQ6IFByaXptRHJvcGRvd25Ib3N0Q3VzdG9tQ29udGV4dCA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGVsYXkgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgY2FuT3BlbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBjbG9zZUJ5RXNjID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBjbG9zZU9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwcml6bURyb3Bkb3duSG9zdD86IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNldCBwcml6bURyb3Bkb3duSG9zdFdpZHRoKHdpZHRoOiBQcml6bURyb3Bkb3duSG9zdFdpZHRoKSB7XG4gICAgdGhpcy5fcHJpem1Ecm9wZG93bkhvc3RXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgfVxuICBnZXQgcHJpem1Ecm9wZG93bkhvc3RXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpem1Ecm9wZG93bkhvc3RXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX3ByaXptRHJvcGRvd25Ib3N0V2lkdGg6IFByaXptRHJvcGRvd25Ib3N0V2lkdGggPSB0aGlzLm9wdGlvbnMud2lkdGg7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9kcm9wZG93bl9ob3N0JztcblxuICByZWFkb25seSBpdGVtRm9yTGlzdGVuZXIgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xuXG4gIHByaXZhdGUgZGVzdHJveVJlQ2FsYyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9hdXRvUmVwb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5hdXRvUmVwb3NpdGlvbjtcbiAgQElucHV0KCkgc2V0IGF1dG9SZXBvc2l0aW9uKHN0YXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5wb3NpdGlvbj8udXBkYXRlQ29uZmlnKHsgYXV0b1JlcG9zaXRpb246ICh0aGlzLl9hdXRvUmVwb3NpdGlvbiA9IHN0YXRlKSB9KTtcbiAgfVxuICBnZXQgYXV0b1JlcG9zaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9SZXBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGxhY2VtZW50OiBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50ID0gdGhpcy5vcHRpb25zLnBsYWNlbWVudDtcbiAgQElucHV0KCkgc2V0IHBsYWNlbWVudChwbGFjZTogUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCkge1xuICAgIHRoaXMucG9zaXRpb24/LnVwZGF0ZUNvbmZpZyh7IHBsYWNlbWVudDogcGxhY2UgfSk7XG4gIH1cbiAgZ2V0IHBsYWNlbWVudCgpOiBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGlzT3BlbihzdGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuJC5uZXh0KHN0YXRlKTtcbiAgfVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzT3BlbiQudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGxhc3RFbWl0dGVkU3RhdGUhOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGRyb3Bkb3duU3R5bGVzOiBQcml6bURyb3Bkb3duSG9zdFN0eWxlcztcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc2VzOiBQcml6bURyb3Bkb3duSG9zdENsYXNzZXM7XG4gIEBWaWV3Q2hpbGQoJ3RlbXAnKSB0ZW1wITogVGVtcGxhdGVSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgb3ZlcmxheSE6IFByaXptT3ZlcmxheUNvbnRyb2w7XG4gIHByb3RlY3RlZCBpc09wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBwb3NpdGlvblNvdXJjZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICByZWFkb25seSBwb3NpdGlvbiQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMucG9zaXRpb25Tb3VyY2UkLnBpcGUoZGVsYXkoMCkpO1xuXG4gIHByaXZhdGUgcG9zaXRpb24hOiBQcml6bU92ZXJsYXlSZWxhdGl2ZVBvc2l0aW9uO1xuICByZWFkb25seSB3cmFwcGVyX2NsYXNzID0gJ3ByaXptLW92ZXJsYXktZHJvcGRvd24taG9zdCBuby1vdmVyZmxvdyc7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudEJsb2NrUmVmJykgY29udGVudEJsb2NrUmVmITogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJpem1PdmVybGF5U2VydmljZTogUHJpem1PdmVybGF5U2VydmljZSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgem9uZUV2ZW50U2VydmljZTogUHJpem1ab25lRXZlbnRTZXJ2aWNlLFxuICAgIEBJbmplY3QoUHJpem1Ecm9wZG93bkhvc3RDb250cm9sRGlyZWN0aXZlKVxuICAgIEBIb3N0KClcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyByZWFkb25seSBkcm9wZG93bkhvc3RDb250cm9sRGlyZWN0aXZlOiBQcml6bURyb3Bkb3duSG9zdENvbnRyb2xEaXJlY3RpdmUgfCBudWxsLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIEBJbmplY3QoUFJJWk1fRFJPUERPV05fSE9TVF9PUFRJT05TKSBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFByaXptRHJvcGRvd25Ib3N0T3B0aW9ucyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGVzdHJveSQuYWRkQ2FsbGJhY2soKCkgPT4gdGhpcy5jbG9zZU92ZXJsYXkoKSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5dXAuZXNjJylcbiAgcHVibGljIGNsb3NlSWZOZWVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlQnlFc2MpIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdE92ZXJsYXkoKTtcbiAgICB0aGlzLmluaXRDbGlja0xpc3RlbmVyKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlV2lkdGgoKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbj8udXBkYXRlQ29uZmlnKHtcbiAgICAgIHdpZHRoOiB0aGlzLnByaXptRHJvcGRvd25Ib3N0V2lkdGggPz8gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q2xpY2tMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiRcbiAgICAgIC5waXBlKFxuICAgICAgICBza2lwKDEpLFxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWxheSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRhcChzdGF0ZSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wZG93bkhvc3RDb250cm9sRGlyZWN0aXZlPy5lbmFibGVkID8/IHRydWUpIHRoaXMub3Blbk92ZXJsYXkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VPdmVybGF5KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheT8uY2xvc2UoKTtcbiAgICBpZiAodGhpcy5sYXN0RW1pdHRlZFN0YXRlKSB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KCh0aGlzLmxhc3RFbWl0dGVkU3RhdGUgPSBmYWxzZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuT3ZlcmxheSgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXk/Lm9wZW4oKTtcbiAgICBpZiAoIXRoaXMubGFzdEVtaXR0ZWRTdGF0ZSkgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCgodGhpcy5sYXN0RW1pdHRlZFN0YXRlID0gdHJ1ZSkpO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4kLm5leHQodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4kLm5leHQoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiQubmV4dCghdGhpcy5pc09wZW4kLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE92ZXJsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQcml6bU92ZXJsYXlSZWxhdGl2ZVBvc2l0aW9uKHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICBhdXRvUmVwb3NpdGlvbjogdGhpcy5hdXRvUmVwb3NpdGlvbixcbiAgICAgIGVsZW1lbnQ6IHRoaXMucHJpem1Ecm9wZG93bkhvc3QgPz8gdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLnByaXptT3ZlcmxheVNlcnZpY2VcbiAgICAgIC5wb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgLmNvbmZpZyh7XG4gICAgICAgIHdyYXBwZXJDbGFzczogdGhpcy53cmFwcGVyX2NsYXNzLFxuICAgICAgfSlcbiAgICAgIC5jb250ZW50KHRoaXMudGVtcClcbiAgICAgIC5jcmVhdGUoe1xuICAgICAgICBwYXJlbnRJbmplY3RvcjogdGhpcy5pbmplY3RvcixcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5pbml0UG9zaXRpb25MaXN0ZW5lcih0aGlzLnBvc2l0aW9uKTtcbiAgfVxuICBwdWJsaWMgcmVDYWxjdWxhdGVQb3NpdGlvbnModGltZW91dCA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lSZUNhbGMkLm5leHQoKTtcbiAgICB0aW1lcih0aW1lb3V0KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLm92ZXJsYXk/LnJlQ2FsY3VsYXRlUG9zaXRpb25zKCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lSZUNhbGMkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UG9zaXRpb25MaXN0ZW5lcihwb3NpdGlvbjogUHJpem1PdmVybGF5UmVsYXRpdmVQb3NpdGlvbik6IHZvaWQge1xuICAgIHBvc2l0aW9uLnBvcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoZGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFkYXRhLmV4dHJhKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblNvdXJjZSQubmV4dChkYXRhLmV4dHJhKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVySXRlbXMoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtRm9yTGlzdGVuZXIuYWRkKGVsKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lckl0ZW1zKGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUZvckxpc3RlbmVyLmRlbGV0ZShlbCk7XG4gIH1cblxuICBwdWJsaWMgb3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrIHx8ICF0aGlzLmlzT3BlbiQudmFsdWUpIHJldHVybjtcbiAgICB0aGlzLmlzT3BlbiQubmV4dChmYWxzZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJibG9ja1wiIFtwcml6bU11dGF0aW9uT2JzZXJ2ZXJIb3N0XT1cImVsLm5hdGl2ZUVsZW1lbnRcIiAocHJpem1NdXRhdGlvbk9ic2VydmVyKT1cInVwZGF0ZVdpZHRoKClcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8bmctdGVtcGxhdGUgI3RlbXA+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJwcml6bS1kcm9wZG93bi1ob3N0LW1vZGFsXCJcbiAgICAgIFtuZ1N0eWxlXT1cImRyb3Bkb3duU3R5bGVzXCJcbiAgICAgIFtuZ0NsYXNzXT1cImRyb3Bkb3duQ2xhc3Nlc1wiXG4gICAgICBbaWRdPVwicHJpem1Ecm9wZG93bkhvc3RJZFwiXG4gICAgICBbYXR0ci5wb3NpdGlvbl09XCJwb3NpdGlvbiQgfCBhc3luY1wiXG4gICAgICBbY2hpbGRyZW5ab25lc109XCJbem9uZUV2ZW50U2VydmljZV1cIlxuICAgICAgKHpvbmVPdXRzaWRlRXZlbnQpPVwib3V0c2lkZUNsaWNrKClcIlxuICAgICAgKHByaXptQWZ0ZXJWaWV3SW5pdCk9XCJhZGRMaXN0ZW5lckl0ZW1zKCRldmVudC5uYXRpdmVFbGVtZW50KTsgcmVDYWxjdWxhdGVQb3NpdGlvbnMoKVwiXG4gICAgICAocHJpem1PbkRlc3Ryb3kpPVwicmVtb3ZlTGlzdGVuZXJJdGVtcygkZXZlbnQubmF0aXZlRWxlbWVudClcIlxuICAgICAgcHJpem1UaGVtZVxuICAgICAgcHJpem1ab25lRXZlbnRcbiAgICAgIHpvbmVFdmVudE5hbWU9XCJjbGlja1wiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqcG9seW1vcnBoT3V0bGV0PVwiY29udGVudDsgY29udGV4dDogeyBjdXN0b206IHByaXptRHJvcGRvd25DdXN0b21Db250ZXh0IH1cIlxuICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG4iXX0=