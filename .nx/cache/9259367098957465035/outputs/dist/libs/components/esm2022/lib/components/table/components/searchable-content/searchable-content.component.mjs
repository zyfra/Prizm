import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * @deprecated since 3.8.0
 */
export class SearchableContentComponent {
    constructor() {
        this.searchString = null;
        this.contentString = null;
        this.focused = false;
    }
    get content() {
        const markedString = [];
        if (this.searchString && this.contentString) {
            let pos = 0;
            const contentStringLower = this.contentString.toLowerCase();
            const searchStringLower = this.searchString.toLowerCase();
            let prevFoundPosEnd = 0;
            let foundPos = -2;
            while (foundPos !== -1) {
                foundPos = contentStringLower.indexOf(searchStringLower, pos);
                if (foundPos == -1) {
                    const sliceStartIdx = pos > prevFoundPosEnd ? pos : prevFoundPosEnd;
                    markedString.push({ substr: this.contentString.slice(sliceStartIdx), marked: false });
                    break;
                }
                else {
                    if (prevFoundPosEnd === foundPos) {
                        const slice = this.contentString.slice(pos, pos + this.searchString.length);
                        markedString.push({ substr: slice, marked: true });
                    }
                    else {
                        const slice1 = this.contentString.slice(prevFoundPosEnd, foundPos);
                        const slice2 = this.contentString.slice(foundPos, foundPos + this.searchString.length);
                        markedString.push({ substr: slice1, marked: false }, { substr: slice2, marked: true });
                    }
                    prevFoundPosEnd = foundPos + this.searchString.length;
                }
                pos = foundPos + 1;
            }
        }
        return markedString.length > 0 ? markedString : [{ substr: this.contentString, marked: false }];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: SearchableContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: SearchableContentComponent, selector: "prizm-searchable-content", inputs: { searchString: "searchString", contentString: "contentString", focused: "focused" }, host: { properties: { "attr.focused": "this.focused" } }, ngImport: i0, template: "<span *ngFor=\"let item of content\" [class.marked]=\"item?.marked\">{{ item.substr }}</span>\n", styles: [":host{display:inline-flex}:host span{white-space:pre}:host .marked{font-weight:700}:host[focused=true] .marked{background:var(--prizm-text-contrast);color:var(--prizm-bg)}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: SearchableContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-searchable-content', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span *ngFor=\"let item of content\" [class.marked]=\"item?.marked\">{{ item.substr }}</span>\n", styles: [":host{display:inline-flex}:host span{white-space:pre}:host .marked{font-weight:700}:host[focused=true] .marked{background:var(--prizm-text-contrast);color:var(--prizm-bg)}\n"] }]
        }], propDecorators: { searchString: [{
                type: Input
            }], contentString: [{
                type: Input
            }], focused: [{
                type: HostBinding,
                args: ['attr.focused']
            }, {
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvY29tcG9uZW50cy9zZWFyY2hhYmxlLWNvbnRlbnQvc2VhcmNoYWJsZS1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvY29tcG9uZW50cy9zZWFyY2hhYmxlLWNvbnRlbnQvc2VhcmNoYWJsZS1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRXZGOztHQUVHO0FBUUgsTUFBTSxPQUFPLDBCQUEwQjtJQU52QztRQU9rQixpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFDbkMsa0JBQWEsR0FBa0IsSUFBSSxDQUFDO1FBQ1AsWUFBTyxHQUFHLEtBQUssQ0FBQztLQW9DOUQ7SUFsQ0MsSUFBSSxPQUFPO1FBQ1QsTUFBTSxZQUFZLEdBQTBDLEVBQUUsQ0FBQztRQUUvRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMzQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDWixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTFELElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVsQixPQUFPLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDdEIsUUFBUSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLE1BQU0sYUFBYSxHQUFHLEdBQUcsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO29CQUNwRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUN0RixNQUFNO2lCQUNQO3FCQUFNO29CQUNMLElBQUksZUFBZSxLQUFLLFFBQVEsRUFBRTt3QkFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM1RSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztxQkFDcEQ7eUJBQU07d0JBQ0wsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBRXZGLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7cUJBQ3hGO29CQUNELGVBQWUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7aUJBQ3ZEO2dCQUNELEdBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7UUFDRCxPQUFPLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQXVCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUcsQ0FBQzs4R0F0Q1UsMEJBQTBCO2tHQUExQiwwQkFBMEIsd05DWnZDLGlHQUNBOzsyRkRXYSwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsMEJBQTBCLG1CQUduQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUcvQixZQUFZO3NCQUEzQixLQUFLO2dCQUNVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBQ3VDLE9BQU87c0JBQW5ELFdBQVc7dUJBQUMsY0FBYzs7c0JBQUcsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIDMuOC4wXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tc2VhcmNoYWJsZS1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaGFibGUtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaGFibGUtY29udGVudC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZUNvbnRlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgc2VhcmNoU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgcHVibGljIGNvbnRlbnRTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZm9jdXNlZCcpIEBJbnB1dCgpIHB1YmxpYyBmb2N1c2VkID0gZmFsc2U7XG5cbiAgZ2V0IGNvbnRlbnQoKTogeyBzdWJzdHI6IHN0cmluZzsgbWFya2VkOiBib29sZWFuIH1bXSB7XG4gICAgY29uc3QgbWFya2VkU3RyaW5nOiB7IHN1YnN0cjogc3RyaW5nOyBtYXJrZWQ6IGJvb2xlYW4gfVtdID0gW107XG5cbiAgICBpZiAodGhpcy5zZWFyY2hTdHJpbmcgJiYgdGhpcy5jb250ZW50U3RyaW5nKSB7XG4gICAgICBsZXQgcG9zID0gMDtcbiAgICAgIGNvbnN0IGNvbnRlbnRTdHJpbmdMb3dlciA9IHRoaXMuY29udGVudFN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3Qgc2VhcmNoU3RyaW5nTG93ZXIgPSB0aGlzLnNlYXJjaFN0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBsZXQgcHJldkZvdW5kUG9zRW5kID0gMDtcbiAgICAgIGxldCBmb3VuZFBvcyA9IC0yO1xuXG4gICAgICB3aGlsZSAoZm91bmRQb3MgIT09IC0xKSB7XG4gICAgICAgIGZvdW5kUG9zID0gY29udGVudFN0cmluZ0xvd2VyLmluZGV4T2Yoc2VhcmNoU3RyaW5nTG93ZXIsIHBvcyk7XG4gICAgICAgIGlmIChmb3VuZFBvcyA9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNsaWNlU3RhcnRJZHggPSBwb3MgPiBwcmV2Rm91bmRQb3NFbmQgPyBwb3MgOiBwcmV2Rm91bmRQb3NFbmQ7XG4gICAgICAgICAgbWFya2VkU3RyaW5nLnB1c2goeyBzdWJzdHI6IHRoaXMuY29udGVudFN0cmluZy5zbGljZShzbGljZVN0YXJ0SWR4KSwgbWFya2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJldkZvdW5kUG9zRW5kID09PSBmb3VuZFBvcykge1xuICAgICAgICAgICAgY29uc3Qgc2xpY2UgPSB0aGlzLmNvbnRlbnRTdHJpbmcuc2xpY2UocG9zLCBwb3MgKyB0aGlzLnNlYXJjaFN0cmluZy5sZW5ndGgpO1xuICAgICAgICAgICAgbWFya2VkU3RyaW5nLnB1c2goeyBzdWJzdHI6IHNsaWNlLCBtYXJrZWQ6IHRydWUgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlMSA9IHRoaXMuY29udGVudFN0cmluZy5zbGljZShwcmV2Rm91bmRQb3NFbmQsIGZvdW5kUG9zKTtcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlMiA9IHRoaXMuY29udGVudFN0cmluZy5zbGljZShmb3VuZFBvcywgZm91bmRQb3MgKyB0aGlzLnNlYXJjaFN0cmluZy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBtYXJrZWRTdHJpbmcucHVzaCh7IHN1YnN0cjogc2xpY2UxLCBtYXJrZWQ6IGZhbHNlIH0sIHsgc3Vic3RyOiBzbGljZTIsIG1hcmtlZDogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJldkZvdW5kUG9zRW5kID0gZm91bmRQb3MgKyB0aGlzLnNlYXJjaFN0cmluZy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcG9zID0gZm91bmRQb3MgKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFya2VkU3RyaW5nLmxlbmd0aCA+IDAgPyBtYXJrZWRTdHJpbmcgOiBbeyBzdWJzdHI6IHRoaXMuY29udGVudFN0cmluZyBhcyBzdHJpbmcsIG1hcmtlZDogZmFsc2UgfV07XG4gIH1cbn1cbiIsIjxzcGFuICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbnRlbnRcIiBbY2xhc3MubWFya2VkXT1cIml0ZW0/Lm1hcmtlZFwiPnt7IGl0ZW0uc3Vic3RyIH19PC9zcGFuPlxuIl19