import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmHoveredService } from '../../services/hovered.service';

@Directive({
    selector: '[pzmHoveredChange]',
})
export class PrizmHoveredDirective {
    @Output()
    readonly pzmHoveredChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(PrizmHoveredService) hoveredService: PrizmHoveredService,
    ) {
        this.pzmHoveredChange = hoveredService.createHovered$(nativeElement);
    }
}
