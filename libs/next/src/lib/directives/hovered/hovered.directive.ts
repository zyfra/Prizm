import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmHoveredService } from '../../services/hovered.service';

@Directive({
    selector: '[prizmHoveredChange]',
})
export class PrizmHoveredDirective {
    @Output()
    readonly prizmHoveredChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(PrizmHoveredService) hoveredService: PrizmHoveredService,
    ) {
        this.prizmHoveredChange = hoveredService.createHovered$(nativeElement);
    }
}
