import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, HostListener, Inject, Input, Renderer2, } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmHoveredService } from '../../services';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmHintService } from './hint.service';
import { PrizmOverlayControl } from '../../modules/overlay';
import { animationFrameScheduler, timer } from 'rxjs';
import { PrizmThemeInvertedDirective, PrizmThemeInvertedValuesService } from '@prizm-ui/theme';
import { PolymorphModule } from '../polymorph';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
import * as i2 from "../../modules/overlay";
import * as i3 from "@prizm-ui/theme";
import * as i4 from "../polymorph/directives/outlet";
import * as i5 from "../../components/scrollbar/scrollbar.component";
import * as i6 from "./hint.service";
import * as i7 from "../../services";
export class PrizmHintContainerComponent {
    set hintTheme(theme) {
        this.themeInvertedValuesService.value$$.next({
            ...this.themeInvertedValuesService.value$$.value,
            '*': theme ?? null,
        });
    }
    constructor(destroy$, el, renderer2, prizmOverlayControl, themeInvertedValuesService, hintService, hoveredService) {
        this.destroy$ = destroy$;
        this.el = el;
        this.renderer2 = renderer2;
        this.prizmOverlayControl = prizmOverlayControl;
        this.themeInvertedValuesService = themeInvertedValuesService;
        this.hintService = hintService;
        this.hoveredService = hoveredService;
        this.context = {};
        this.themeInvertedDirective = new PrizmThemeInvertedDirective();
    }
    ngOnInit() {
        this.initPositionListener();
        this.initHoverListener();
        this.themeInvertedDirective.ngOnInit();
    }
    ngAfterViewInit() {
        // re-calc positions after fist get container sizes
        timer(10, animationFrameScheduler)
            .pipe(tap(() => this.prizmOverlayControl.position.calculate()), takeUntil(this.destroy$))
            .subscribe();
    }
    initPositionListener() {
        this.prizmOverlayControl.position.pos$
            .pipe(tap(data => {
            if (!data.extra)
                return;
            this.renderer2.setAttribute(this.el.nativeElement, 'position', data.extra);
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    initHoverListener() {
        this.hoveredService
            .createHovered$(this.el.nativeElement)
            .pipe(tap(state => this.hintService.emit(this.id, state)), takeUntil(this.destroy$))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHintContainerComponent, deps: [{ token: i1.PrizmDestroyService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i2.PrizmOverlayControl }, { token: i3.PrizmThemeInvertedValuesService }, { token: PrizmHintService }, { token: PrizmHoveredService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmHintContainerComponent, isStandalone: true, selector: "prizm-hint-container", inputs: { id: "id", content: "content", context: "context", hintTheme: "hintTheme" }, host: { listeners: { "attr.id": "id()" } }, providers: [PrizmDestroyService], ngImport: i0, template: `
    <div class="prizm-font-main-body-12">
      <prizm-scrollbar visibility="hidden">
        <ng-container *polymorphOutlet="content() as data; context: context">
          <div class="content">{{ data }}</div>
        </ng-container>
      </prizm-scrollbar>
    </div>
  `, isInline: true, styles: [":host{display:inline-block;background-color:var(--prizm-hint-container-background, var(--prizm-v3-background-fill-overlay));padding:var(--prizm-hint-container-padding, 8px);border-radius:var(--prizm-hint-container-border-radius, 2px);color:var(--prizm-hint-container-text, var(--prizm-v3-text-icon-primary));font-size:var(--prizm-hint-container-font-size, 14px);overflow:hidden;text-overflow:ellipsis;white-space:pre-line}:host,:host prizm-scrollbar{max-width:var(--prizm-hint-container-max-width, 288px);max-height:var(--prizm-hint-container-max-height, 60vh)}:host:focus,:host prizm-scrollbar:focus{outline:none}:host prizm-scrollbar{padding:var(--prizm-hint-container-padding, 0px)}:host[position=t],:host[position=tl],:host[position=tr]{margin-bottom:var(--prizm-hint-container-margin, 8px)}:host[position=b],:host[position=bl],:host[position=br]{margin-top:var(--prizm-hint-container-margin, 8px)}:host[position=l],:host[position=lt],:host[position=lb]{margin-right:var(--prizm-hint-container-margin, 8px)}:host[position=r],:host[position=rt],:host[position=rb]{margin-left:var(--prizm-hint-container-margin, 8px)}.content{word-break:break-word;width:100%;height:100%}\n"], dependencies: [{ kind: "ngmodule", type: PolymorphModule }, { kind: "directive", type: i4.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmScrollbarModule }, { kind: "component", type: i5.PrizmScrollbarComponent, selector: "prizm-scrollbar", inputs: ["visibility"] }] }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintContainerComponent.prototype, "context", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHintContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-hint-container', template: `
    <div class="prizm-font-main-body-12">
      <prizm-scrollbar visibility="hidden">
        <ng-container *polymorphOutlet="content() as data; context: context">
          <div class="content">{{ data }}</div>
        </ng-container>
      </prizm-scrollbar>
    </div>
  `, providers: [PrizmDestroyService], standalone: true, imports: [PolymorphModule, PrizmScrollbarModule], styles: [":host{display:inline-block;background-color:var(--prizm-hint-container-background, var(--prizm-v3-background-fill-overlay));padding:var(--prizm-hint-container-padding, 8px);border-radius:var(--prizm-hint-container-border-radius, 2px);color:var(--prizm-hint-container-text, var(--prizm-v3-text-icon-primary));font-size:var(--prizm-hint-container-font-size, 14px);overflow:hidden;text-overflow:ellipsis;white-space:pre-line}:host,:host prizm-scrollbar{max-width:var(--prizm-hint-container-max-width, 288px);max-height:var(--prizm-hint-container-max-height, 60vh)}:host:focus,:host prizm-scrollbar:focus{outline:none}:host prizm-scrollbar{padding:var(--prizm-hint-container-padding, 0px)}:host[position=t],:host[position=tl],:host[position=tr]{margin-bottom:var(--prizm-hint-container-margin, 8px)}:host[position=b],:host[position=bl],:host[position=br]{margin-top:var(--prizm-hint-container-margin, 8px)}:host[position=l],:host[position=lt],:host[position=lb]{margin-right:var(--prizm-hint-container-margin, 8px)}:host[position=r],:host[position=rt],:host[position=rb]{margin-left:var(--prizm-hint-container-margin, 8px)}.content{word-break:break-word;width:100%;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmDestroyService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.PrizmOverlayControl }, { type: i3.PrizmThemeInvertedValuesService }, { type: i6.PrizmHintService, decorators: [{
                    type: Inject,
                    args: [PrizmHintService]
                }] }, { type: i7.PrizmHoveredService, decorators: [{
                    type: Inject,
                    args: [PrizmHoveredService]
                }] }]; }, propDecorators: { id: [{
                type: Input
            }, {
                type: HostListener,
                args: ['attr.id']
            }], content: [{
                type: Input
            }], context: [{
                type: Input
            }], hintTheme: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9oaW50L2hpbnQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0RCxPQUFPLEVBQWMsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7QUFrQmxFLE1BQU0sT0FBTywyQkFBMkI7SUFjdEMsSUFDSSxTQUFTLENBQUMsS0FBaUI7UUFDN0IsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDM0MsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FB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QUtGLFNBQVM7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptSG92ZXJlZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptSGludFNlcnZpY2UgfSBmcm9tICcuL2hpbnQuc2VydmljZSc7XG5pbXBvcnQgeyBQcml6bU92ZXJsYXlDb250cm9sIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9vdmVybGF5JztcbmltcG9ydCB7IGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUG9seW1vcnBoQ29udGVudCB9IGZyb20gJy4uL3BvbHltb3JwaC90eXBlcy9jb250ZW50JztcbmltcG9ydCB7IFByaXptVGhlbWUsIFByaXptVGhlbWVJbnZlcnRlZERpcmVjdGl2ZSwgUHJpem1UaGVtZUludmVydGVkVmFsdWVzU2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS90aGVtZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhNb2R1bGUgfSBmcm9tICcuLi9wb2x5bW9ycGgnO1xuaW1wb3J0IHsgUHJpem1TY3JvbGxiYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Njcm9sbGJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWhpbnQtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicHJpem0tZm9udC1tYWluLWJvZHktMTJcIj5cbiAgICAgIDxwcml6bS1zY3JvbGxiYXIgdmlzaWJpbGl0eT1cImhpZGRlblwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhPdXRsZXQ9XCJjb250ZW50KCkgYXMgZGF0YTsgY29udGV4dDogY29udGV4dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3sgZGF0YSB9fTwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvcHJpem0tc2Nyb2xsYmFyPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9oaW50LWNvbnRhaW5lci5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1BvbHltb3JwaE1vZHVsZSwgUHJpem1TY3JvbGxiYXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUhpbnRDb250YWluZXJDb21wb25lbnQ8Q09OVEVYVCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4+XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0XG57XG4gIEBJbnB1dCgpXG4gIEBIb3N0TGlzdGVuZXIoJ2F0dHIuaWQnKVxuICBpZCE6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjb250ZW50ITogKCkgPT4gUG9seW1vcnBoQ29udGVudDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGNvbnRleHQ6IENPTlRFWFQgPSB7fSBhcyBDT05URVhUO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoaW50VGhlbWUodGhlbWU6IFByaXptVGhlbWUpIHtcbiAgICB0aGlzLnRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlLnZhbHVlJCQubmV4dCh7XG4gICAgICAuLi50aGlzLnRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlLnZhbHVlJCQudmFsdWUsXG4gICAgICAnKic6IHRoZW1lID8/IG51bGwsXG4gICAgfSk7XG4gIH1cblxuICByZWFkb25seSB0aGVtZUludmVydGVkRGlyZWN0aXZlID0gbmV3IFByaXptVGhlbWVJbnZlcnRlZERpcmVjdGl2ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlbmRlcmVyMjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCByZWFkb25seSBwcml6bU92ZXJsYXlDb250cm9sOiBQcml6bU92ZXJsYXlDb250cm9sLFxuICAgIHB1YmxpYyByZWFkb25seSB0aGVtZUludmVydGVkVmFsdWVzU2VydmljZTogUHJpem1UaGVtZUludmVydGVkVmFsdWVzU2VydmljZSxcbiAgICBASW5qZWN0KFByaXptSGludFNlcnZpY2UpIHByaXZhdGUgcmVhZG9ubHkgaGludFNlcnZpY2U6IFByaXptSGludFNlcnZpY2UsXG4gICAgQEluamVjdChQcml6bUhvdmVyZWRTZXJ2aWNlKSBwcml2YXRlIHJlYWRvbmx5IGhvdmVyZWRTZXJ2aWNlOiBQcml6bUhvdmVyZWRTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UG9zaXRpb25MaXN0ZW5lcigpO1xuICAgIHRoaXMuaW5pdEhvdmVyTGlzdGVuZXIoKTtcbiAgICB0aGlzLnRoZW1lSW52ZXJ0ZWREaXJlY3RpdmUubmdPbkluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gcmUtY2FsYyBwb3NpdGlvbnMgYWZ0ZXIgZmlzdCBnZXQgY29udGFpbmVyIHNpemVzXG4gICAgdGltZXIoMTAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLnByaXptT3ZlcmxheUNvbnRyb2wucG9zaXRpb24uY2FsY3VsYXRlKCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFBvc2l0aW9uTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5wcml6bU92ZXJsYXlDb250cm9sLnBvc2l0aW9uLnBvcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoZGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFkYXRhLmV4dHJhKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgZGF0YS5leHRyYSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEhvdmVyTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcmVkU2VydmljZVxuICAgICAgLmNyZWF0ZUhvdmVyZWQkKHRoaXMuZWwubmF0aXZlRWxlbWVudClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoc3RhdGUgPT4gdGhpcy5oaW50U2VydmljZS5lbWl0KHRoaXMuaWQsIHN0YXRlKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=