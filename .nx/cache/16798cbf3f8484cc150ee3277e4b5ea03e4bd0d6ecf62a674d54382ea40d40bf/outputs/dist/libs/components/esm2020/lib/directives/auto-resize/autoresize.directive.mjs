import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { timer } from 'rxjs';
import { PrizmDestroyService, prizmFromMutationObserver$ } from '@prizm-ui/helpers';
import { filter, switchMap, takeUntil, tap, throttleTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmAutoResizeDirective {
    get scrollHeight() {
        return this.elementRef.nativeElement.scrollHeight;
    }
    constructor(elementRef, destroy) {
        this.elementRef = elementRef;
        this.destroy = destroy;
        this.prizmAutoResize = true;
        this.autoResizeMode = 'both';
        this.autoResizeOn = 'any';
    }
    onInput() {
        this.resizeIfActive();
    }
    resizeIfActive() {
        if (!this.prizmAutoResize)
            return;
        this.resize();
    }
    ngOnInit() {
        if (!this.prizmAutoResize)
            return;
        if (this.elementRef.nativeElement.scrollHeight) {
            setTimeout(() => this.resize());
        }
    }
    resize() {
        const previousElementHeight = this.elementRef.nativeElement.clientHeight;
        if (this.autoResizeMode === 'both')
            this.elementRef.nativeElement.style.height = '0';
        if (this.autoResizeMode === 'only-increase' && previousElementHeight >= this.scrollHeight)
            return;
        this.elementRef.nativeElement.style.height = this.scrollHeight + 'px';
    }
    ngAfterViewInit() {
        timer(0)
            .pipe(switchMap(() => prizmFromMutationObserver$(this.elementRef.nativeElement, {
            attributes: true,
            characterData: true,
        }).pipe(filter(() => this.autoResizeOn === 'any'), 
        // guard for infinite re invokes
        throttleTime(100), tap(() => {
            this.resizeIfActive();
        }))), takeUntil(this.destroy))
            .subscribe();
    }
}
PrizmAutoResizeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAutoResizeDirective, deps: [{ token: i0.ElementRef }, { token: i1.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive });
PrizmAutoResizeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmAutoResizeDirective, selector: "[prizmAutoResize]", inputs: { prizmAutoResize: "prizmAutoResize", autoResizeMode: "autoResizeMode", autoResizeOn: "autoResizeOn" }, host: { listeners: { ":input": "onInput()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAutoResizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmAutoResize]`,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.PrizmDestroyService }]; }, propDecorators: { prizmAutoResize: [{
                type: Input
            }], autoResizeMode: [{
                type: Input
            }], autoResizeOn: [{
                type: Input
            }], onInput: [{
                type: HostListener,
                args: [':input']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3Jlc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2F1dG8tcmVzaXplL2F1dG9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLG1CQUFtQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTWpGLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDcEQsQ0FBQztJQUNELFlBQW9CLFVBQTJDLEVBQVUsT0FBNEI7UUFBakYsZUFBVSxHQUFWLFVBQVUsQ0FBaUM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQU41RixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixtQkFBYyxHQUF3QixNQUFNLENBQUM7UUFDN0MsaUJBQVksR0FBc0IsS0FBSyxDQUFDO0lBSXVELENBQUM7SUFHakcsT0FBTztRQUNiLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFBRSxPQUFPO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU87UUFDbEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7WUFDOUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVNLE1BQU07UUFDWCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUN6RSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3JGLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxlQUFlLElBQUkscUJBQXFCLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBQ2xHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELGVBQWU7UUFDYixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ0wsSUFBSSxDQUNILFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FDYiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN4RCxVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUMsSUFBSSxDQUNMLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQztRQUN6QyxnQ0FBZ0M7UUFDaEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUNILENBQ0YsRUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUN4QjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7O3FIQXBEVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCO21JQUVVLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQU9FLE9BQU87c0JBRGQsWUFBWTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlLCBwcml6bUZyb21NdXRhdGlvbk9ic2VydmVyJCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHRhcCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1BdXRvUmVzaXplTW9kZSwgUHJpem1BdXRvUmVzaXplT24gfSBmcm9tICcuL21vZGVsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW3ByaXptQXV0b1Jlc2l6ZV1gLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUF1dG9SZXNpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwcml6bUF1dG9SZXNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBhdXRvUmVzaXplTW9kZTogUHJpem1BdXRvUmVzaXplTW9kZSA9ICdib3RoJztcbiAgQElucHV0KCkgYXV0b1Jlc2l6ZU9uOiBQcml6bUF1dG9SZXNpemVPbiA9ICdhbnknO1xuICBnZXQgc2Nyb2xsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4sIHByaXZhdGUgZGVzdHJveTogUHJpem1EZXN0cm95U2VydmljZSkge31cblxuICBASG9zdExpc3RlbmVyKCc6aW5wdXQnKVxuICBwcml2YXRlIG9uSW5wdXQoKSB7XG4gICAgdGhpcy5yZXNpemVJZkFjdGl2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemVJZkFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJpem1BdXRvUmVzaXplKSByZXR1cm47XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJpem1BdXRvUmVzaXplKSByZXR1cm47XG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVzaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzRWxlbWVudEhlaWdodCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBpZiAodGhpcy5hdXRvUmVzaXplTW9kZSA9PT0gJ2JvdGgnKSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZU1vZGUgPT09ICdvbmx5LWluY3JlYXNlJyAmJiBwcmV2aW91c0VsZW1lbnRIZWlnaHQgPj0gdGhpcy5zY3JvbGxIZWlnaHQpIHJldHVybjtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodCArICdweCc7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGltZXIoMClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICBwcml6bUZyb21NdXRhdGlvbk9ic2VydmVyJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVPbiA9PT0gJ2FueScpLFxuICAgICAgICAgICAgLy8gZ3VhcmQgZm9yIGluZmluaXRlIHJlIGludm9rZXNcbiAgICAgICAgICAgIHRocm90dGxlVGltZSgxMDApLFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNpemVJZkFjdGl2ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==