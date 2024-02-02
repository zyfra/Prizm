import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { PrizmOverlayDefaultConfig } from './config';
import { PrizmOverlayInsidePlacement, } from './models';
import { PrizmOverlayGlobalPosition } from './position';
import { EventBus, getContent } from './utils';
import { PrizmOverlayControl } from './overlay-control';
import { PrizmOverlayContentToken } from './token';
import { prizmGenerateId } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
const DEFAULT_PRIZM_OVERLAY_INPUTS = {
    position: null,
    config: PrizmOverlayDefaultConfig,
    content: { type: "s" /* PrizmOverlayContentType.STRING */, data: '', props: {} },
    zid: null,
    parentContainer: undefined,
};
export class PrizmOverlayService {
    static { this.controls = {}; }
    constructor(injector) {
        this.injector = injector;
        this.inputs = { ...DEFAULT_PRIZM_OVERLAY_INPUTS };
        this.clearCache();
    }
    clearCache() {
        this.inputs = {
            ...DEFAULT_PRIZM_OVERLAY_INPUTS,
            position: new PrizmOverlayGlobalPosition({ placement: PrizmOverlayInsidePlacement.TOP }),
        };
        return this;
    }
    position(position) {
        this.inputs.position = position;
        return this;
    }
    config(config) {
        this.inputs.config = { ...PrizmOverlayDefaultConfig, ...config };
        return this;
    }
    content(data, props = {}) {
        this.inputs.content = getContent(data, props);
        return this;
    }
    parentContainer(node) {
        this.inputs.parentContainer = node instanceof HTMLElement ? node : undefined;
        return this;
    }
    create({ key, parentInjector, } = {}) {
        this.zid = this.inputs.zid = key ?? prizmGenerateId();
        const inputsClone = { ...this.inputs };
        const injector = Injector.create({
            providers: [
                {
                    provide: PrizmOverlayContentToken,
                    useFactory: () => inputsClone.content,
                },
                {
                    provide: PrizmOverlayControl,
                    deps: [ApplicationRef, ComponentFactoryResolver, Injector],
                },
            ],
            parent: parentInjector ?? this.injector,
        });
        const tc = injector.get(PrizmOverlayControl);
        if (PrizmOverlayService.controls[this.zid]) {
            this.zid = prizmGenerateId();
        }
        this.inputs.position?.init(this.zid);
        PrizmOverlayService.controls[this.zid] = Object.assign(tc, { ...this.inputs });
        this.clearCache();
        return tc;
    }
    getCtrl(zid) {
        return PrizmOverlayService.controls[zid];
    }
    destroy() {
        for (const key in PrizmOverlayService.controls) {
            PrizmOverlayService.controls[key].close();
        }
        PrizmOverlayService.controls = {};
        EventBus.stop();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmOverlayService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmOverlayService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmOverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvbW9kdWxlcy9vdmVybGF5L292ZXJsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JELE9BQU8sRUFRTCwyQkFBMkIsR0FDNUIsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhELE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXBELE1BQU0sNEJBQTRCLEdBQUc7SUFDbkMsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUseUJBQXlCO0lBQ2pDLE9BQU8sRUFBRSxFQUFFLElBQUksMENBQWdDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0lBQ3RFLEdBQUcsRUFBRSxJQUFJO0lBQ1QsZUFBZSxFQUFFLFNBQVM7Q0FDM0IsQ0FBQztBQUtGLE1BQU0sT0FBTyxtQkFBbUI7YUFDdkIsYUFBUSxHQUEyQyxFQUFFLEFBQTdDLENBQThDO0lBSTdELFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGOUIsV0FBTSxHQUF1QixFQUFFLEdBQUcsNEJBQTRCLEVBQUUsQ0FBQztR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QUFFLENBQUM7U0FDM0M7UUFDRCxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDOzhHQWpGVSxtQkFBbUI7a0hBQW5CLG1CQUFtQixjQUZsQixNQUFNOzsyRkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptT3ZlcmxheURlZmF1bHRDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge1xuICBQcml6bU92ZXJsYXlDb25maWcsXG4gIFByaXptT3ZlcmxheUNvbnRlbnQsXG4gIFByaXptT3ZlcmxheUNvbnRlbnREYXRhLFxuICBQcml6bU92ZXJsYXlDb250ZW50UHJvcHMsXG4gIFByaXptT3ZlcmxheUNvbnRlbnRUeXBlLFxuICBQcml6bU92ZXJsYXlJZCxcbiAgUHJpem1PdmVybGF5SW5wdXRzLFxuICBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQsXG59IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7IFByaXptT3ZlcmxheUdsb2JhbFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbic7XG5pbXBvcnQgeyBQcml6bU92ZXJsYXlBYnN0cmFjdFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi9wb3NpdGlvbic7XG5pbXBvcnQgeyBFdmVudEJ1cywgZ2V0Q29udGVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUHJpem1PdmVybGF5Q29udHJvbCB9IGZyb20gJy4vb3ZlcmxheS1jb250cm9sJztcbmltcG9ydCB7IFByaXptT3ZlcmxheUNvbnRlbnRUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgcHJpem1HZW5lcmF0ZUlkIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuXG5jb25zdCBERUZBVUxUX1BSSVpNX09WRVJMQVlfSU5QVVRTID0ge1xuICBwb3NpdGlvbjogbnVsbCxcbiAgY29uZmlnOiBQcml6bU92ZXJsYXlEZWZhdWx0Q29uZmlnLFxuICBjb250ZW50OiB7IHR5cGU6IFByaXptT3ZlcmxheUNvbnRlbnRUeXBlLlNUUklORywgZGF0YTogJycsIHByb3BzOiB7fSB9LFxuICB6aWQ6IG51bGwsXG4gIHBhcmVudENvbnRhaW5lcjogdW5kZWZpbmVkLFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptT3ZlcmxheVNlcnZpY2Uge1xuICBzdGF0aWMgY29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogUHJpem1PdmVybGF5Q29udHJvbCB9ID0ge307XG4gIHByaXZhdGUgemlkITogUHJpem1PdmVybGF5SWQ7XG4gIHByaXZhdGUgaW5wdXRzOiBQcml6bU92ZXJsYXlJbnB1dHMgPSB7IC4uLkRFRkFVTFRfUFJJWk1fT1ZFUkxBWV9JTlBVVFMgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ2FjaGUoKTogUHJpem1PdmVybGF5U2VydmljZSB7XG4gICAgdGhpcy5pbnB1dHMgPSB7XG4gICAgICAuLi5ERUZBVUxUX1BSSVpNX09WRVJMQVlfSU5QVVRTLFxuICAgICAgcG9zaXRpb246IG5ldyBQcml6bU92ZXJsYXlHbG9iYWxQb3NpdGlvbih7IHBsYWNlbWVudDogUHJpem1PdmVybGF5SW5zaWRlUGxhY2VtZW50LlRPUCB9KSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHBvc2l0aW9uPFQgZXh0ZW5kcyBQcml6bU92ZXJsYXlBYnN0cmFjdFBvc2l0aW9uPGFueT4+KHBvc2l0aW9uOiBUKTogUHJpem1PdmVybGF5U2VydmljZSB7XG4gICAgdGhpcy5pbnB1dHMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBjb25maWcoY29uZmlnOiBQYXJ0aWFsPFByaXptT3ZlcmxheUNvbmZpZz4pOiBQcml6bU92ZXJsYXlTZXJ2aWNlIHtcbiAgICB0aGlzLmlucHV0cy5jb25maWcgPSB7IC4uLlByaXptT3ZlcmxheURlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNvbnRlbnQoZGF0YTogUHJpem1PdmVybGF5Q29udGVudERhdGEsIHByb3BzOiBQcml6bU92ZXJsYXlDb250ZW50UHJvcHMgPSB7fSk6IFByaXptT3ZlcmxheVNlcnZpY2Uge1xuICAgIHRoaXMuaW5wdXRzLmNvbnRlbnQgPSBnZXRDb250ZW50KGRhdGEsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBwYXJlbnRDb250YWluZXIobm9kZTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQpOiBQcml6bU92ZXJsYXlTZXJ2aWNlIHtcbiAgICB0aGlzLmlucHV0cy5wYXJlbnRDb250YWluZXIgPSBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBub2RlIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSh7XG4gICAga2V5LFxuICAgIHBhcmVudEluamVjdG9yLFxuICB9OiB7XG4gICAga2V5Pzogc3RyaW5nO1xuICAgIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3I7XG4gIH0gPSB7fSk6IFByaXptT3ZlcmxheUNvbnRyb2wge1xuICAgIHRoaXMuemlkID0gdGhpcy5pbnB1dHMuemlkID0ga2V5ID8/IHByaXptR2VuZXJhdGVJZCgpO1xuICAgIGNvbnN0IGlucHV0c0Nsb25lID0geyAuLi50aGlzLmlucHV0cyB9O1xuXG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQcml6bU92ZXJsYXlDb250ZW50VG9rZW4sXG4gICAgICAgICAgdXNlRmFjdG9yeTogKCk6IFByaXptT3ZlcmxheUNvbnRlbnQgPT4gaW5wdXRzQ2xvbmUuY29udGVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFByaXptT3ZlcmxheUNvbnRyb2wsXG4gICAgICAgICAgZGVwczogW0FwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHBhcmVudEluamVjdG9yID8/IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0YyA9IGluamVjdG9yLmdldChQcml6bU92ZXJsYXlDb250cm9sKTtcbiAgICBpZiAoUHJpem1PdmVybGF5U2VydmljZS5jb250cm9sc1t0aGlzLnppZF0pIHtcbiAgICAgIHRoaXMuemlkID0gcHJpem1HZW5lcmF0ZUlkKCk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRzLnBvc2l0aW9uPy5pbml0KHRoaXMuemlkKTtcbiAgICBQcml6bU92ZXJsYXlTZXJ2aWNlLmNvbnRyb2xzW3RoaXMuemlkXSA9IE9iamVjdC5hc3NpZ24odGMsIHsgLi4udGhpcy5pbnB1dHMgfSk7XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgcmV0dXJuIHRjO1xuICB9XG5cbiAgcHVibGljIGdldEN0cmwoemlkOiBQcml6bU92ZXJsYXlJZCk6IFByaXptT3ZlcmxheUNvbnRyb2wge1xuICAgIHJldHVybiBQcml6bU92ZXJsYXlTZXJ2aWNlLmNvbnRyb2xzW3ppZF07XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBQcml6bU92ZXJsYXlTZXJ2aWNlLmNvbnRyb2xzKSB7XG4gICAgICBQcml6bU92ZXJsYXlTZXJ2aWNlLmNvbnRyb2xzW2tleV0uY2xvc2UoKTtcbiAgICB9XG4gICAgUHJpem1PdmVybGF5U2VydmljZS5jb250cm9scyA9IHt9O1xuICAgIEV2ZW50QnVzLnN0b3AoKTtcbiAgfVxufVxuIl19