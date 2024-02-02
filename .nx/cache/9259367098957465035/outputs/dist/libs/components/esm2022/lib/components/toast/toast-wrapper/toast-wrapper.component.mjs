import { ChangeDetectionStrategy, Component, HostBinding, Injector, Input, ViewEncapsulation, } from '@angular/core';
import { PrizmToastRef } from '../toast-ref';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ToastWrapperComponent extends PrizmAbstractTestId {
    get getRefId() {
        return 'prizm-toast-id' + this.ref.id;
    }
    get component() {
        switch (this.ref.appearance) {
            case 'danger':
                return this.ref.options.templateDanger;
            case 'warning':
                return this.ref.options.templateWarning;
            case 'success':
                return this.ref.options.templateSuccess;
            default:
            case 'info':
                return this.ref.options.templateInfo;
        }
    }
    constructor(injector) {
        super();
        this.injector = injector;
        this.testId_ = 'ui_toast_wrapper';
    }
    ngOnInit() {
        this.createInjectorForChild();
    }
    createInjectorForChild() {
        this.tempInjector = Injector.create({
            providers: [
                {
                    provide: PrizmToastRef,
                    useValue: this.ref,
                },
            ],
            parent: this.injector,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ToastWrapperComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: ToastWrapperComponent, selector: "prizm-toast-wrapper", inputs: { ref: "ref" }, host: { properties: { "attr.id": "this.getRefId" } }, usesInheritance: true, ngImport: i0, template: "<ng-container [ngComponentOutlet]=\"component\" [ngComponentOutletInjector]=\"tempInjector\"> </ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: ToastWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-toast-wrapper', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container [ngComponentOutlet]=\"component\" [ngComponentOutletInjector]=\"tempInjector\"> </ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { ref: [{
                type: Input
            }], getRefId: [{
                type: HostBinding,
                args: ['attr.id']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LXdyYXBwZXIvdG9hc3Qtd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LXdyYXBwZXIvdG9hc3Qtd3JhcHBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFHTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBU3BFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7SUFLNUQsSUFBNEIsUUFBUTtRQUNsQyxPQUFPLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzNCLEtBQUssUUFBUTtnQkFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUN6QyxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDMUMsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBRTFDLFFBQVE7WUFDUixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBR0QsWUFBNkIsUUFBa0I7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXRCN0IsWUFBTyxHQUFHLGtCQUFrQixDQUFDO0lBd0IvQyxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHO2lCQUNuQjthQUNGO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBM0NVLHFCQUFxQjtrR0FBckIscUJBQXFCLGdLQ3BCbEMsaUhBQ0E7OzJGRG1CYSxxQkFBcUI7a0JBUGpDLFNBQVM7K0JBQ0UscUJBQXFCLG1CQUdkLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7K0ZBRzVCLEdBQUc7c0JBQVgsS0FBSztnQkFJc0IsUUFBUTtzQkFBbkMsV0FBVzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUeXBlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bVRvYXN0UmVmIH0gZnJvbSAnLi4vdG9hc3QtcmVmJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLXRvYXN0LXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3Qtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LXdyYXBwZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0V3JhcHBlckNvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZWYhOiBQcml6bVRvYXN0UmVmO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfdG9hc3Rfd3JhcHBlcic7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJykgZ2V0IGdldFJlZklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdwcml6bS10b2FzdC1pZCcgKyB0aGlzLnJlZi5pZDtcbiAgfVxuXG4gIGdldCBjb21wb25lbnQoKTogVHlwZTx1bmtub3duPiB7XG4gICAgc3dpdGNoICh0aGlzLnJlZi5hcHBlYXJhbmNlKSB7XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5yZWYub3B0aW9ucy50ZW1wbGF0ZURhbmdlcjtcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gdGhpcy5yZWYub3B0aW9ucy50ZW1wbGF0ZVdhcm5pbmc7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmLm9wdGlvbnMudGVtcGxhdGVTdWNjZXNzO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIHJldHVybiB0aGlzLnJlZi5vcHRpb25zLnRlbXBsYXRlSW5mbztcbiAgICB9XG4gIH1cbiAgdGVtcEluamVjdG9yITogSW5qZWN0b3I7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlSW5qZWN0b3JGb3JDaGlsZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3RvckZvckNoaWxkKCk6IHZvaWQge1xuICAgIHRoaXMudGVtcEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUHJpem1Ub2FzdFJlZixcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5yZWYsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyIFtuZ0NvbXBvbmVudE91dGxldF09XCJjb21wb25lbnRcIiBbbmdDb21wb25lbnRPdXRsZXRJbmplY3Rvcl09XCJ0ZW1wSW5qZWN0b3JcIj4gPC9uZy1jb250YWluZXI+XG4iXX0=