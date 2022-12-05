import { Directive, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { PrizmThemeService } from '../../services/theme.service';
import { PrizmTheme } from '../../types/theme';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
    selector: '[prizmTheme]',
    providers: [PrizmDestroyService]
})
export class PrizmThemeDirective implements OnInit {
    @Output()
    public readonly prizmTheme = new EventEmitter<PrizmTheme>();

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
        private readonly themeService: PrizmThemeService,
        private readonly destroy$: PrizmDestroyService,
        private readonly renderer2: Renderer2,
    ) {}

    public ngOnInit(): void {
      this.themeService.theme$.pipe(
        tap((theme) => this.renderer2.setAttribute(this.element.nativeElement, this.themeService.attThemeKey, theme)),
        tap((theme) => this.prizmTheme.next(theme)),
        takeUntil(this.destroy$)
      ).subscribe()
    }
}
