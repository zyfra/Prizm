import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class PrizmSliderCnobComponent {
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    pointerdown(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.el.nativeElement.setPointerCapture(event.pointerId);
        const bcr = this.el.nativeElement.getBoundingClientRect();
        const shiftX = event.clientX - bcr.left;
        const shiftY = event.clientY - bcr.bottom;
        this.dragStart.next({
            index: this.index,
            shiftX,
            shiftY,
        });
    }
    nativeDragStart(event) {
        event.preventDefault();
    }
    constructor(el) {
        this.el = el;
        this._disabled = false;
        this.dragStart = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSliderCnobComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmSliderCnobComponent, isStandalone: true, selector: "prizm-slider-cnob", inputs: { index: "index", value: "value", showValueOn: "showValueOn", disabled: "disabled" }, outputs: { dragStart: "dragStart" }, host: { listeners: { "pointerdown": "pointerdown($event)", "dragstart": "nativeDragStart($event)" }, properties: { "attr.tabindex": "disabled ? null : '0'", "attr.disabled": "disabled ? '' : null", "attr.index": "this.index" } }, ngImport: i0, template: `<span class="value value--{{ showValueOn }}" *ngIf="value !== null">
    {{ value }}
  </span>`, isInline: true, styles: [":host{display:block;outline:none;border-radius:100%;width:20px;height:20px;border:2px solid var(--prizm-v3-background-fill-primary);background-color:var(--prizm-v3-button-primary-solid-default);position:relative}:host:before{content:\"\";display:block;position:absolute;inset:0;border-radius:100%;outline-offset:2px;outline:2px solid var(--prizm-v3-background-stroke-focus);visibility:hidden}:host:hover{background-color:var(--prizm-v3-button-primary-solid-hover)}:host:focus{z-index:1000}:host:focus:before{visibility:visible}:host:focus .value{background-color:var(--focused-cnob-value-bg-color, transparent)}:host:active{background-color:var(--prizm-v3-button-primary-solid-active)}:host:active:before{visibility:hidden}:host[disabled]{background-color:var(--prizm-v3-text-icon-disable)}:host[disabled]:hover{cursor:not-allowed}.value{display:block;position:absolute;line-height:1;background-color:var(--cnob-value-bg-color, transparent);padding:var(--cnob-value-padding, 0)}.value--top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:4px}.value--bottom{top:100%;left:50%;transform:translate(-50%);margin-top:4px}.value--left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.value--right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSliderCnobComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-slider-cnob', template: `<span class="value value--{{ showValueOn }}" *ngIf="value !== null">
    {{ value }}
  </span>`, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.tabindex]': "disabled ? null : '0'",
                        '[attr.disabled]': "disabled ? '' : null",
                    }, standalone: true, imports: [NgIf], styles: [":host{display:block;outline:none;border-radius:100%;width:20px;height:20px;border:2px solid var(--prizm-v3-background-fill-primary);background-color:var(--prizm-v3-button-primary-solid-default);position:relative}:host:before{content:\"\";display:block;position:absolute;inset:0;border-radius:100%;outline-offset:2px;outline:2px solid var(--prizm-v3-background-stroke-focus);visibility:hidden}:host:hover{background-color:var(--prizm-v3-button-primary-solid-hover)}:host:focus{z-index:1000}:host:focus:before{visibility:visible}:host:focus .value{background-color:var(--focused-cnob-value-bg-color, transparent)}:host:active{background-color:var(--prizm-v3-button-primary-solid-active)}:host:active:before{visibility:hidden}:host[disabled]{background-color:var(--prizm-v3-text-icon-disable)}:host[disabled]:hover{cursor:not-allowed}.value{display:block;position:absolute;line-height:1;background-color:var(--cnob-value-bg-color, transparent);padding:var(--cnob-value-padding, 0)}.value--top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:4px}.value--bottom{top:100%;left:50%;transform:translate(-50%);margin-top:4px}.value--left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.value--right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { index: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.index']
            }], value: [{
                type: Input
            }], showValueOn: [{
                type: Input
            }], disabled: [{
                type: Input
            }], dragStart: [{
                type: Output
            }], pointerdown: [{
                type: HostListener,
                args: ['pointerdown', ['$event']]
            }], nativeDragStart: [{
                type: HostListener,
                args: ['dragstart', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNub2IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLWNub2IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBa0J2QyxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBVStDLFdBQVcsQ0FBQyxLQUFtQjtRQUM3RSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzFELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN4QyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU07WUFDTixNQUFNO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUU4QyxlQUFlLENBQUMsS0FBWTtRQUN6RSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQW9CLEVBQTJCO1FBQTNCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBaEN2QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRzFCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFJeEIsQ0FBQztJQXlCNkMsQ0FBQzs4R0EzQ3hDLHdCQUF3QjtrR0FBeEIsd0JBQXdCLHNiQWR6Qjs7VUFFRiw0MENBVUUsSUFBSTs7MkZBRUgsd0JBQXdCO2tCQWhCcEMsU0FBUzsrQkFDRSxtQkFBbUIsWUFDbkI7O1VBRUYsbUJBR1MsdUJBQXVCLENBQUMsTUFBTSxRQUV6Qzt3QkFDSixpQkFBaUIsRUFBRSx1QkFBdUI7d0JBQzFDLGlCQUFpQixFQUFFLHNCQUFzQjtxQkFDMUMsY0FDVyxJQUFJLFdBQ1AsQ0FBQyxJQUFJLENBQUM7aUdBR3FCLEtBQUs7c0JBQXhDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsWUFBWTtnQkFDekIsS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUYsUUFBUTtzQkFEWCxLQUFLO2dCQVVOLFNBQVM7c0JBRFIsTUFBTTtnQkFPeUMsV0FBVztzQkFBMUQsWUFBWTt1QkFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBbUJRLGVBQWU7c0JBQTdELFlBQVk7dUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptU2xpZGVyQ25vYlZhbHVlUG9zaXRpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1zbGlkZXItY25vYicsXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJ2YWx1ZSB2YWx1ZS0te3sgc2hvd1ZhbHVlT24gfX1cIiAqbmdJZj1cInZhbHVlICE9PSBudWxsXCI+XG4gICAge3sgdmFsdWUgfX1cbiAgPC9zcGFuPmAsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlci1jbm9iLmNvbXBvbmVudC5sZXNzJ10sXG5cbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRhYmluZGV4XSc6IFwiZGlzYWJsZWQgPyBudWxsIDogJzAnXCIsXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6IFwiZGlzYWJsZWQgPyAnJyA6IG51bGxcIixcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWZdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNsaWRlckNub2JDb21wb25lbnQge1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuaW5kZXgnKSBpbmRleCE6IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWUhOiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBzaG93VmFsdWVPbiE6IFByaXptU2xpZGVyQ25vYlZhbHVlUG9zaXRpb247XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBzaGlmdFg6IG51bWJlcjtcbiAgICBzaGlmdFk6IG51bWJlcjtcbiAgfT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdwb2ludGVyZG93bicsIFsnJGV2ZW50J10pIHB1YmxpYyBwb2ludGVyZG93bihldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG5cbiAgICBjb25zdCBiY3IgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgc2hpZnRYID0gZXZlbnQuY2xpZW50WCAtIGJjci5sZWZ0O1xuICAgIGNvbnN0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSBiY3IuYm90dG9tO1xuXG4gICAgdGhpcy5kcmFnU3RhcnQubmV4dCh7XG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIHNoaWZ0WCxcbiAgICAgIHNoaWZ0WSxcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pIHByaXZhdGUgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cbn1cbiJdfQ==