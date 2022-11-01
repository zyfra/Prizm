import { Directive, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { PzmThemeService } from '../../services/theme.service';
import { PzmTheme } from '../../types/theme';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
    selector: '[pzmTheme]',
    providers: [PzmDestroyService]
})
export class PzmThemeDirective implements OnInit {
    @Output()
    public readonly pzmTheme = new EventEmitter<PzmTheme>();

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
        private readonly themeService: PzmThemeService,
        private readonly destroy$: PzmDestroyService,
        private readonly renderer2: Renderer2,
    ) {}

    public ngOnInit(): void {
      this.themeService.theme$.pipe(
        tap((theme) => this.renderer2.setAttribute(this.element.nativeElement, this.themeService.attThemeKey, theme)),
        tap((theme) => this.pzmTheme.next(theme)),
        takeUntil(this.destroy$)
      ).subscribe()
    }
}
