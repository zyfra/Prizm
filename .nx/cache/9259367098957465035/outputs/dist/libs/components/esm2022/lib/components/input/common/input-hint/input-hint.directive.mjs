import { Directive, ElementRef, HostBinding, inject, Input } from '@angular/core';
import { PrizmHintDirective } from '../../../../directives/hint';
import { PrizmOverlayOutsidePlacement } from '../../../../modules/overlay/models';
import { prizmIsTextOverflow } from '../../../../util/dom/is-textoverflow';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { PrizmInputLayoutComponent } from '../input-layout';
import * as i0 from "@angular/core";
export class PrizmInputHintDirective {
    constructor() {
        this.prizmHint_ = new PrizmHintDirective();
        this.prizmHintCanShow_ = true;
        this.layout = inject(PrizmInputLayoutComponent, {
            optional: true,
        });
        this.el = inject((ElementRef));
    }
    get prizmHint() {
        return this.el.nativeElement.value;
    }
    set prizmHintDirection(value) {
        this.prizmHint_.prizmHintDirection = value;
        this.hintSyncChanges();
    }
    get prizmHintDirection() {
        return this.prizmHint_.prizmHintDirection;
    }
    set prizmHintCanShow(value) {
        this.prizmHint_.prizmHintCanShow = this.prizmHintCanShow_ = coerceBooleanProperty(value);
    }
    get prizmHintCanShow() {
        return this.prizmHintCanShow_;
    }
    ngOnInit() {
        this.prizmHint_.ngOnInit();
    }
    ngOnChanges() {
        this.prizmHint_.ngOnChanges();
    }
    hintSyncChanges() {
        this.prizmHint_.ngOnChanges();
    }
    updateHint() {
        if (!this.prizmHintCanShow_) {
            this.prizmHint_.prizmHintCanShow = this.prizmHintCanShow_;
        }
        else {
            this.prizmHint_.prizmHintCanShow = prizmIsTextOverflow(this.el.nativeElement);
            this.prizmHint_.prizmHint = this.el.nativeElement.value;
            this.prizmHint_.prizmHintHost = this.layout?.el?.nativeElement ?? null;
        }
        this.hintSyncChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputHintDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputHintDirective, selector: "input[prizmHintDirection], input[prizmHintCanShow]", inputs: { prizmHintDirection: "prizmHintDirection", prizmHintCanShow: "prizmHintCanShow" }, host: { properties: { "attr.prizmHint": "this.prizmHint" } }, exportAs: ["prizmInputHint"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputHintDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[prizmHintDirection], input[prizmHintCanShow]',
                    exportAs: 'prizmInputHint',
                }]
        }], propDecorators: { prizmHint: [{
                type: HostBinding,
                args: ['attr.prizmHint']
            }], prizmHintDirection: [{
                type: Input
            }], prizmHintCanShow: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2NvbW1vbi9pbnB1dC1oaW50L2lucHV0LWhpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFNNUQsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQUtXLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFldkMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBU3hCLFdBQU0sR0FBRyxNQUFNLENBQUMseUJBQXlCLEVBQUU7WUFDbEQsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFDTSxPQUFFLEdBQUcsTUFBTSxDQUFDLENBQUEsVUFBNEIsQ0FBQSxDQUFDLENBQUM7S0F3QnBEO0lBakRDLElBQW1DLFNBQVM7UUFDMUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELElBQ0ksa0JBQWtCLENBQUMsS0FBbUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDNUMsQ0FBQztJQUdELElBQ0ksZ0JBQWdCLENBQUMsS0FBbUI7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFPTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBWSxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLGFBQWEsSUFBSSxJQUFJLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs4R0FuRFUsdUJBQXVCO2tHQUF2Qix1QkFBdUI7OzJGQUF2Qix1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9EQUFvRDtvQkFDOUQsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OEJBSW9DLFNBQVM7c0JBQTNDLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUt6QixrQkFBa0I7c0JBRHJCLEtBQUs7Z0JBV0YsZ0JBQWdCO3NCQURuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgaW5qZWN0LCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSGludERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RpcmVjdGl2ZXMvaGludCc7XG5pbXBvcnQgeyBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kdWxlcy9vdmVybGF5L21vZGVscyc7XG5pbXBvcnQgeyBwcml6bUlzVGV4dE92ZXJmbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9kb20vaXMtdGV4dG92ZXJmbG93JztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFByaXptSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9pbnB1dC1sYXlvdXQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtwcml6bUhpbnREaXJlY3Rpb25dLCBpbnB1dFtwcml6bUhpbnRDYW5TaG93XScsXG4gIGV4cG9ydEFzOiAncHJpem1JbnB1dEhpbnQnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0SGludERpcmVjdGl2ZSB7XG4gIHJlYWRvbmx5IHByaXptSGludF8gPSBuZXcgUHJpem1IaW50RGlyZWN0aXZlKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnByaXptSGludCcpIGdldCBwcml6bUhpbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHByaXptSGludERpcmVjdGlvbih2YWx1ZTogUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCkge1xuICAgIHRoaXMucHJpem1IaW50Xy5wcml6bUhpbnREaXJlY3Rpb24gPSB2YWx1ZTtcbiAgICB0aGlzLmhpbnRTeW5jQ2hhbmdlcygpO1xuICB9XG4gIGdldCBwcml6bUhpbnREaXJlY3Rpb24oKTogUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucHJpem1IaW50Xy5wcml6bUhpbnREaXJlY3Rpb247XG4gIH1cblxuICBwcml2YXRlIHByaXptSGludENhblNob3dfID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2V0IHByaXptSGludENhblNob3codmFsdWU6IEJvb2xlYW5JbnB1dCkge1xuICAgIHRoaXMucHJpem1IaW50Xy5wcml6bUhpbnRDYW5TaG93ID0gdGhpcy5wcml6bUhpbnRDYW5TaG93XyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHByaXptSGludENhblNob3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJpem1IaW50Q2FuU2hvd187XG4gIH1cblxuICByZWFkb25seSBsYXlvdXQgPSBpbmplY3QoUHJpem1JbnB1dExheW91dENvbXBvbmVudCwge1xuICAgIG9wdGlvbmFsOiB0cnVlLFxuICB9KTtcbiAgcmVhZG9ubHkgZWwgPSBpbmplY3QoRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pik7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1IaW50Xy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1IaW50Xy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBoaW50U3luY0NoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcml6bUhpbnRfLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSGludCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJpem1IaW50Q2FuU2hvd18pIHtcbiAgICAgIHRoaXMucHJpem1IaW50Xy5wcml6bUhpbnRDYW5TaG93ID0gdGhpcy5wcml6bUhpbnRDYW5TaG93XztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcml6bUhpbnRfLnByaXptSGludENhblNob3cgPSBwcml6bUlzVGV4dE92ZXJmbG93KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLnByaXptSGludF8ucHJpem1IaW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlIGFzIGFueTtcbiAgICAgIHRoaXMucHJpem1IaW50Xy5wcml6bUhpbnRIb3N0ID0gdGhpcy5sYXlvdXQ/LmVsPy5uYXRpdmVFbGVtZW50ID8/IG51bGw7XG4gICAgfVxuICAgIHRoaXMuaGludFN5bmNDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==