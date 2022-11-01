import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PzmHoveredService } from '../../services/hovered.service';

@Directive({
    selector: '[pzmHoveredChange]',
})
export class PzmHoveredDirective {
    @Output()
    readonly pzmHoveredChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(PzmHoveredService) hoveredService: PzmHoveredService,
    ) {
        this.pzmHoveredChange = hoveredService.createHovered$(nativeElement);
    }
}
