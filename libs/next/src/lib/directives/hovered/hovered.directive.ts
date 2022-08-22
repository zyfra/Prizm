import {Directive, ElementRef, Inject, Output} from '@angular/core';
// import {ZuiHoveredService} from 'deleted/cdk/services';
import {Observable} from 'rxjs';
import { ZuiHoveredService } from '../../services/hovered.service';

@Directive({
    selector: '[zuiHoveredChange]',
})
export class ZuiHoveredDirective {
    @Output()
    readonly zuiHoveredChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(ZuiHoveredService) hoveredService: ZuiHoveredService,
    ) {
        this.zuiHoveredChange = hoveredService.createHovered$(nativeElement);
    }
}
