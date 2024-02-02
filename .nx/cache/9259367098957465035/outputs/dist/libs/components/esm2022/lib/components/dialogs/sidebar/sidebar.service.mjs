import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { PrizmOverlayGlobalPosition, PrizmOverlayInsidePlacement, } from '../../../modules/overlay';
import { PrizmSidebarComponent } from './sidebar.component';
import { PrizmSidebarResultDefaultType, } from './sidebar.models';
import { invokeIfCanCloseSidebar } from './util';
import { take } from 'rxjs/operators';
import { Compare } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
const DEFAULT_OPTIONS = {
    position: PrizmOverlayInsidePlacement.CENTER,
    dismissible: true,
    showByVertical: true,
    confirmButton: null,
    supportButton: null,
    cancelButton: null,
};
export class PrizmSidebarService extends AbstractPrizmDialogService {
    constructor() {
        super(...arguments);
        this.component = PrizmSidebarComponent;
        this.defaultOptions = DEFAULT_OPTIONS;
    }
    open(title, options, cb) {
        options = {
            ...options,
            title,
            dismissible: options.dismissible ?? false,
            backdrop: options.backdrop,
            containerClass: options.backdrop || options.parentContainer ? '' : 'no-width no-height',
        };
        this.safeUpdateButtonsWithDefaultStyles(options);
        return super.open(title, options, cb);
    }
    getPosition(dialog) {
        return new PrizmOverlayGlobalPosition({
            placement: dialog.position ?? PrizmOverlayInsidePlacement.LEFT,
            width: (['t', 'b'].includes(dialog.position) && '100%') || dialog.width,
            height: (['l', 'r'].includes(dialog.position) && '100%') || dialog.height,
        });
    }
    // TODO add i18n support for default cases
    safeUpdateButtonsWithDefaultStyles(options) {
        const supportButton = Compare.isNotNullish(options.supportButton) &&
            this.generateButton(options, options.supportButton, 'Продолжить', PrizmSidebarResultDefaultType.confirmed, 'danger', 'ghost');
        const confirmButton = this.generateButton(options, options.confirmButton, 'Подтвердить', PrizmSidebarResultDefaultType.confirmed, 'primary');
        const cancelButton = options.cancelButton !== null &&
            this.generateButton(options, options.cancelButton, 'Отмена', PrizmSidebarResultDefaultType.cancel, 'secondary', 'ghost');
        options.confirmButton = confirmButton;
        options.cancelButton = cancelButton;
        options.supportButton = supportButton;
    }
    generateButton(options, button, defaultText, defaultComplete, defaultAppearance, defaultAppearanceType) {
        const buttonText = (typeof button === 'string' ? button : button?.text) ?? defaultText;
        const btn = ((typeof button === 'string' ? {} : button) ?? {});
        return {
            ...btn,
            text: buttonText,
            size: btn.size ?? options.size,
            action: btn.action ??
                ((c) => {
                    invokeIfCanCloseSidebar(() => c.completeWith(defaultComplete), options.canClose)
                        .pipe(take(1))
                        .subscribe();
                }),
            appearance: btn.appearance ?? defaultAppearance,
            appearanceType: btn.appearanceType ?? defaultAppearanceType,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSidebarService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSidebarService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSidebarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2dzL3NpZGViYXIvc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLDBCQUEwQixFQUMxQiwyQkFBMkIsR0FDNUIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBSUwsNkJBQTZCLEdBQzlCLE1BQU0sa0JBQWtCLENBQUM7QUFJMUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRTVDLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLFFBQVEsRUFBRSwyQkFBMkIsQ0FBQyxNQUFNO0lBQzVDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRSxJQUFJO0NBQ21DLENBQUM7QUFLeEQsTUFBTSxPQUFPLG1CQUVYLFNBQVEsMEJBQWlEO0lBTDNEOztRQU1xQixjQUFTLEdBQUcscUJBQXFCLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxlQUFvQixDQUFDO0tBOEYxRDtJQTVGaUIsSUFBSSxDQUNsQixLQUFpQixFQUNqQixPQUFnRCxFQUNoRCxFQUtVO1FBRVYsT0FBTyxHQUFHO1lBQ1IsR0FBRyxP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LENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQzt5QkFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDYixTQUFTLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDO1lBQ0osVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLElBQUksaUJBQWlCO1lBQy9DLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxJQUFJLHFCQUFxQjtTQUM1RCxDQUFDO0lBQ0osQ0FBQzs4R0FqR1UsbUJBQW1CO2tIQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0UHJpem1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJpem1PdmVybGF5Q29udHJvbCxcbiAgUHJpem1PdmVybGF5R2xvYmFsUG9zaXRpb24sXG4gIFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudCxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9vdmVybGF5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFByaXptU2lkZWJhckJ1dHRvbixcbiAgUHJpem1TaWRlYmFyT3B0aW9ucyxcbiAgUHJpem1TaWRlYmFyUmVzdWx0LFxuICBQcml6bVNpZGViYXJSZXN1bHREZWZhdWx0VHlwZSxcbn0gZnJvbSAnLi9zaWRlYmFyLm1vZGVscyc7XG5pbXBvcnQgeyBQcml6bUJhc2VEaWFsb2dDb250ZXh0IH0gZnJvbSAnLi4vZGlhbG9nL2RpYWxvZy5tb2RlbHMnO1xuaW1wb3J0IHsgUHJpem1BcHBlYXJhbmNlLCBQcml6bUFwcGVhcmFuY2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUHJpem1TaXplIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBpbnZva2VJZkNhbkNsb3NlU2lkZWJhciB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wYXJlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBvc2l0aW9uOiBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQuQ0VOVEVSLFxuICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgc2hvd0J5VmVydGljYWw6IHRydWUsXG4gIGNvbmZpcm1CdXR0b246IG51bGwsXG4gIHN1cHBvcnRCdXR0b246IG51bGwsXG4gIGNhbmNlbEJ1dHRvbjogbnVsbCxcbn0gYXMgdW5rbm93biBhcyBQcml6bVNpZGViYXJPcHRpb25zPFByaXptU2lkZWJhclJlc3VsdD47XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNpZGViYXJTZXJ2aWNlPFxuICBUIGV4dGVuZHMgUHJpem1TaWRlYmFyT3B0aW9uczxQcml6bVNpZGViYXJSZXN1bHQ+ID0gUHJpem1TaWRlYmFyT3B0aW9uczxQcml6bVNpZGViYXJSZXN1bHQ+XG4+IGV4dGVuZHMgQWJzdHJhY3RQcml6bURpYWxvZ1NlcnZpY2U8VCwgUHJpem1TaWRlYmFyUmVzdWx0PiB7XG4gIHByb3RlY3RlZCByZWFkb25seSBjb21wb25lbnQgPSBQcml6bVNpZGViYXJDb21wb25lbnQ7XG4gIHByb3RlY3RlZCByZWFkb25seSBkZWZhdWx0T3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyBhcyBUO1xuXG4gIHB1YmxpYyBvdmVycmlkZSBvcGVuKFxuICAgIHRpdGxlOiBUWyd0aXRsZSddLFxuICAgIG9wdGlvbnM6IE9taXQ8UGFydGlhbDxUPiwgJ3RpdGxlJyB8ICdjbG9zZVdvcmQnPixcbiAgICBjYj86IChkYXRhOiB7XG4gICAgICBjb250cm9sOiBQcml6bU92ZXJsYXlDb250cm9sO1xuICAgICAgZGlhbG9nOiBQcml6bUJhc2VEaWFsb2dDb250ZXh0PFByaXptU2lkZWJhclJlc3VsdCwgUHJpem1TaWRlYmFyT3B0aW9ucz47XG4gICAgICBvYnNlcnZlcjogT2JzZXJ2ZXI8UHJpem1TaWRlYmFyUmVzdWx0PjtcbiAgICAgIGRlc3Ryb3kkOiBPYnNlcnZhYmxlPHZvaWQ+O1xuICAgIH0pID0+IHZvaWRcbiAgKTogT2JzZXJ2YWJsZTxQcml6bVNpZGViYXJSZXN1bHQ+IHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHRpdGxlLFxuICAgICAgZGlzbWlzc2libGU6IG9wdGlvbnMuZGlzbWlzc2libGUgPz8gZmFsc2UsXG4gICAgICBiYWNrZHJvcDogb3B0aW9ucy5iYWNrZHJvcCxcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBvcHRpb25zLmJhY2tkcm9wIHx8IG9wdGlvbnMucGFyZW50Q29udGFpbmVyID8gJycgOiAnbm8td2lkdGggbm8taGVpZ2h0JyxcbiAgICB9O1xuICAgIHRoaXMuc2FmZVVwZGF0ZUJ1dHRvbnNXaXRoRGVmYXVsdFN0eWxlcyhvcHRpb25zIGFzIFBhcnRpYWw8VD4pO1xuICAgIHJldHVybiBzdXBlci5vcGVuPFByaXptU2lkZWJhclJlc3VsdCwgdW5rbm93bj4odGl0bGUsIG9wdGlvbnMgYXMgUGFydGlhbDxUPiwgY2IpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFBvc2l0aW9uKGRpYWxvZzogUHJpem1CYXNlRGlhbG9nQ29udGV4dDxhbnksIGFueT4pOiBQcml6bU92ZXJsYXlHbG9iYWxQb3NpdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBQcml6bU92ZXJsYXlHbG9iYWxQb3NpdGlvbih7XG4gICAgICBwbGFjZW1lbnQ6IGRpYWxvZy5wb3NpdGlvbiA/PyBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQuTEVGVCxcbiAgICAgIHdpZHRoOiAoWyd0JywgJ2InXS5pbmNsdWRlcyhkaWFsb2cucG9zaXRpb24pICYmICcxMDAlJykgfHwgZGlhbG9nLndpZHRoLFxuICAgICAgaGVpZ2h0OiAoWydsJywgJ3InXS5pbmNsdWRlcyhkaWFsb2cucG9zaXRpb24pICYmICcxMDAlJykgfHwgZGlhbG9nLmhlaWdodCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE8gYWRkIGkxOG4gc3VwcG9ydCBmb3IgZGVmYXVsdCBjYXNlc1xuICBwcml2YXRlIHNhZmVVcGRhdGVCdXR0b25zV2l0aERlZmF1bHRTdHlsZXMob3B0aW9uczogUGFydGlhbDxUPik6IHZvaWQge1xuICAgIGNvbnN0IHN1cHBvcnRCdXR0b24gPVxuICAgICAgQ29tcGFyZS5pc05vdE51bGxpc2gob3B0aW9ucy5zdXBwb3J0QnV0dG9uKSAmJlxuICAgICAgdGhpcy5nZW5lcmF0ZUJ1dHRvbihcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0QnV0dG9uIGFzIGFueSxcbiAgICAgICAgJ9Cf0YDQvtC00L7Qu9C20LjRgtGMJyxcbiAgICAgICAgUHJpem1TaWRlYmFyUmVzdWx0RGVmYXVsdFR5cGUuY29uZmlybWVkLFxuICAgICAgICAnZGFuZ2VyJyxcbiAgICAgICAgJ2dob3N0J1xuICAgICAgKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSB0aGlzLmdlbmVyYXRlQnV0dG9uKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIG9wdGlvbnMuY29uZmlybUJ1dHRvbiBhcyBhbnksXG4gICAgICAn0J/QvtC00YLQstC10YDQtNC40YLRjCcsXG4gICAgICBQcml6bVNpZGViYXJSZXN1bHREZWZhdWx0VHlwZS5jb25maXJtZWQsXG4gICAgICAncHJpbWFyeSdcbiAgICApO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID1cbiAgICAgIG9wdGlvbnMuY2FuY2VsQnV0dG9uICE9PSBudWxsICYmXG4gICAgICB0aGlzLmdlbmVyYXRlQnV0dG9uKFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBvcHRpb25zLmNhbmNlbEJ1dHRvbiBhcyBhbnksXG4gICAgICAgICfQntGC0LzQtdC90LAnLFxuICAgICAgICBQcml6bVNpZGViYXJSZXN1bHREZWZhdWx0VHlwZS5jYW5jZWwsXG4gICAgICAgICdzZWNvbmRhcnknLFxuICAgICAgICAnZ2hvc3QnXG4gICAgICApO1xuXG4gICAgb3B0aW9ucy5jb25maXJtQnV0dG9uID0gY29uZmlybUJ1dHRvbjtcbiAgICBvcHRpb25zLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbEJ1dHRvbiBhcyBhbnk7XG4gICAgb3B0aW9ucy5zdXBwb3J0QnV0dG9uID0gc3VwcG9ydEJ1dHRvbiBhcyBhbnk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQnV0dG9uKFxuICAgIG9wdGlvbnM6IFBhcnRpYWw8VD4sXG4gICAgYnV0dG9uOiBQcml6bVNpZGViYXJCdXR0b24gfCBzdHJpbmcsXG4gICAgZGVmYXVsdFRleHQ6IHN0cmluZyxcbiAgICBkZWZhdWx0Q29tcGxldGU6IFByaXptU2lkZWJhclJlc3VsdERlZmF1bHRUeXBlLFxuICAgIGRlZmF1bHRBcHBlYXJhbmNlPzogUHJpem1BcHBlYXJhbmNlLFxuICAgIGRlZmF1bHRBcHBlYXJhbmNlVHlwZT86IFByaXptQXBwZWFyYW5jZVR5cGVcbiAgKTogUHJpem1TaWRlYmFyQnV0dG9uIHtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gKHR5cGVvZiBidXR0b24gPT09ICdzdHJpbmcnID8gYnV0dG9uIDogYnV0dG9uPy50ZXh0KSA/PyBkZWZhdWx0VGV4dDtcbiAgICBjb25zdCBidG4gPSAoKHR5cGVvZiBidXR0b24gPT09ICdzdHJpbmcnID8ge30gOiBidXR0b24pID8/IHt9KSBhcyBQYXJ0aWFsPFByaXptU2lkZWJhckJ1dHRvbj47XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYnRuLFxuICAgICAgdGV4dDogYnV0dG9uVGV4dCxcbiAgICAgIHNpemU6IGJ0bi5zaXplID8/IChvcHRpb25zLnNpemUgYXMgUHJpem1TaXplKSxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgYnRuLmFjdGlvbiA/P1xuICAgICAgICAoKGMpOiB2b2lkID0+IHtcbiAgICAgICAgICBpbnZva2VJZkNhbkNsb3NlU2lkZWJhcigoKSA9PiBjLmNvbXBsZXRlV2l0aChkZWZhdWx0Q29tcGxldGUpLCBvcHRpb25zLmNhbkNsb3NlKVxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSksXG4gICAgICBhcHBlYXJhbmNlOiBidG4uYXBwZWFyYW5jZSA/PyBkZWZhdWx0QXBwZWFyYW5jZSxcbiAgICAgIGFwcGVhcmFuY2VUeXBlOiBidG4uYXBwZWFyYW5jZVR5cGUgPz8gZGVmYXVsdEFwcGVhcmFuY2VUeXBlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==