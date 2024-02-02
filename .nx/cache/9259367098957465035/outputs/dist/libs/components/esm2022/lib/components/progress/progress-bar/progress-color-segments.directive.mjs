import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { USER_AGENT } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmResizeService } from '../../../services/resize.service';
import { prizmIsEdgeOlderThan } from '../../../util/browser/is-edge-older-than';
import { PRIZM_CHROMIUM_EDGE_START_VERSION } from '../../../constants/chromium';
import { prizmPure } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
function calculateColorSegments(colors, progressWidth) {
    const segmentWidth = Math.ceil(progressWidth / colors.length);
    const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`, ``);
    return `linear-gradient(to right ${colorsString})`;
}
export class PrizmProgressColorSegmentsDirective {
    get calcSegments$() {
        return this.resize$.pipe(map(() => this.isOldBrowsers
            ? this.prizmProgressColorSegments[0]
            : calculateColorSegments(this.prizmProgressColorSegments, this.elementRef.nativeElement.offsetWidth)));
    }
    constructor(elementRef, resize$, userAgent) {
        this.elementRef = elementRef;
        this.resize$ = resize$;
        this.userAgent = userAgent;
        // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
        this.isOldBrowsers = prizmIsEdgeOlderThan(PRIZM_CHROMIUM_EDGE_START_VERSION, this.userAgent);
        this.prizmProgressColorSegments = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmProgressColorSegmentsDirective, deps: [{ token: ElementRef }, { token: PrizmResizeService }, { token: USER_AGENT }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmProgressColorSegmentsDirective, isStandalone: true, selector: "progress[prizmProgressBar][prizmProgressColorSegments]", inputs: { prizmProgressColorSegments: "prizmProgressColorSegments" }, host: { listeners: { "$.style.--prizm-progress-color": "0" }, properties: { "$.style.--prizm-progress-color": "calcSegments$" } }, providers: [PrizmDestroyService, PrizmResizeService], ngImport: i0 }); }
}
__decorate([
    prizmPure,
    __metadata("design:type", Observable),
    __metadata("design:paramtypes", [])
], PrizmProgressColorSegmentsDirective.prototype, "calcSegments$", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmProgressColorSegmentsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `progress[prizmProgressBar][prizmProgressColorSegments]`,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[$.style.--prizm-progress-color]': `calcSegments$`,
                        '($.style.--prizm-progress-color)': `0`,
                    },
                    standalone: true,
                    providers: [PrizmDestroyService, PrizmResizeService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PrizmResizeService]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USER_AGENT]
                }] }]; }, propDecorators: { prizmProgressColorSegments: [{
                type: Input
            }], calcSegments$: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY29sb3Itc2VnbWVudHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtY29sb3Itc2VnbWVudHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUzQyxTQUFTLHNCQUFzQixDQUFDLE1BQWdCLEVBQUUsYUFBcUI7SUFDckUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2hDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEdBQUcsWUFBWSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksSUFBSSxFQUN2RixFQUFFLENBQ0gsQ0FBQztJQUVGLE9BQU8sNEJBQTRCLFlBQVksR0FBRyxDQUFDO0FBQ3JELENBQUM7QUFZRCxNQUFNLE9BQU8sbUNBQW1DO0lBTzlDLElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FDUCxJQUFJLENBQUMsYUFBYTtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUN2RyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsWUFDdUMsVUFBMkMsRUFDbkMsT0FBNEIsRUFDcEMsU0FBaUI7UUFGakIsZUFBVSxHQUFWLFVBQVUsQ0FBaUM7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDcEMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQXBCeEQsdURBQXVEO1FBQ3RDLGtCQUFhLEdBQUcsb0JBQW9CLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3pHLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztJQWlCdkMsQ0FBQzs4R0F0Qk8sbUNBQW1DLGtCQW1CcEMsVUFBVSxhQUNWLGtCQUFrQixhQUNsQixVQUFVO2tHQXJCVCxtQ0FBbUMsOFNBRm5DLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7O0FBU3BEO0lBQUMsU0FBUzs4QkFDVyxVQUFVOzt3RUFROUI7MkZBaEJVLG1DQUFtQztrQkFWL0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0RBQXdEO29CQUNsRSxxRUFBcUU7b0JBQ3JFLElBQUksRUFBRTt3QkFDSixrQ0FBa0MsRUFBRSxlQUFlO3dCQUNuRCxrQ0FBa0MsRUFBRSxHQUFHO3FCQUN4QztvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7aUJBQ3JEOzswQkFvQkksTUFBTTsyQkFBQyxVQUFVOzswQkFDakIsTUFBTTsyQkFBQyxrQkFBa0I7OzBCQUN6QixNQUFNOzJCQUFDLFVBQVU7NENBaEJwQiwwQkFBMEI7c0JBRHpCLEtBQUs7Z0JBSUYsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVVNFUl9BR0VOVCB9IGZyb20gJ0BuZy13ZWItYXBpcy9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptUmVzaXplU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Jlc2l6ZS5zZXJ2aWNlJztcbmltcG9ydCB7IHByaXptSXNFZGdlT2xkZXJUaGFuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9icm93c2VyL2lzLWVkZ2Utb2xkZXItdGhhbic7XG5pbXBvcnQgeyBQUklaTV9DSFJPTUlVTV9FREdFX1NUQVJUX1ZFUlNJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY2hyb21pdW0nO1xuaW1wb3J0IHsgcHJpem1QdXJlIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb2xvclNlZ21lbnRzKGNvbG9yczogc3RyaW5nW10sIHByb2dyZXNzV2lkdGg6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNlZ21lbnRXaWR0aCA9IE1hdGguY2VpbChwcm9ncmVzc1dpZHRoIC8gY29sb3JzLmxlbmd0aCk7XG4gIGNvbnN0IGNvbG9yc1N0cmluZyA9IGNvbG9ycy5yZWR1Y2UoXG4gICAgKGFjYywgY29sb3IsIGkpID0+IGAke2FjY30sICR7Y29sb3J9ICR7aSAqIHNlZ21lbnRXaWR0aH1weCAkeyhpICsgMSkgKiBzZWdtZW50V2lkdGh9cHhgLFxuICAgIGBgXG4gICk7XG5cbiAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgJHtjb2xvcnNTdHJpbmd9KWA7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYHByb2dyZXNzW3ByaXptUHJvZ3Jlc3NCYXJdW3ByaXptUHJvZ3Jlc3NDb2xvclNlZ21lbnRzXWAsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJ1skLnN0eWxlLi0tcHJpem0tcHJvZ3Jlc3MtY29sb3JdJzogYGNhbGNTZWdtZW50cyRgLFxuICAgICcoJC5zdHlsZS4tLXByaXptLXByb2dyZXNzLWNvbG9yKSc6IGAwYCxcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbUHJpem1EZXN0cm95U2VydmljZSwgUHJpem1SZXNpemVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Qcm9ncmVzc0NvbG9yU2VnbWVudHNEaXJlY3RpdmUge1xuICAvLyBUT0RPOiBkcm9wIHN1cHBvcnQgb2YgbGVnYWN5IEVkZ2UgKEVkZ2VIVE1MKSBpbiB2NC54XG4gIHByaXZhdGUgcmVhZG9ubHkgaXNPbGRCcm93c2VycyA9IHByaXptSXNFZGdlT2xkZXJUaGFuKFBSSVpNX0NIUk9NSVVNX0VER0VfU1RBUlRfVkVSU0lPTiwgdGhpcy51c2VyQWdlbnQpO1xuXG4gIEBJbnB1dCgpXG4gIHByaXptUHJvZ3Jlc3NDb2xvclNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBwcml6bVB1cmVcbiAgZ2V0IGNhbGNTZWdtZW50cyQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNpemUkLnBpcGUoXG4gICAgICBtYXAoKCkgPT5cbiAgICAgICAgdGhpcy5pc09sZEJyb3dzZXJzXG4gICAgICAgICAgPyB0aGlzLnByaXptUHJvZ3Jlc3NDb2xvclNlZ21lbnRzWzBdXG4gICAgICAgICAgOiBjYWxjdWxhdGVDb2xvclNlZ21lbnRzKHRoaXMucHJpem1Qcm9ncmVzc0NvbG9yU2VnbWVudHMsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MUHJvZ3Jlc3NFbGVtZW50PixcbiAgICBASW5qZWN0KFByaXptUmVzaXplU2VydmljZSkgcHJpdmF0ZSByZWFkb25seSByZXNpemUkOiBPYnNlcnZhYmxlPHVua25vd24+LFxuICAgIEBJbmplY3QoVVNFUl9BR0VOVCkgcHJpdmF0ZSByZWFkb25seSB1c2VyQWdlbnQ6IHN0cmluZ1xuICApIHt9XG59XG4iXX0=