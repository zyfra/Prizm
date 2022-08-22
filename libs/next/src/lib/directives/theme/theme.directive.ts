import { Directive, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { ZuiThemeService } from '../../services/theme.service';
import { ZuiTheme } from '../../types/theme';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
    selector: '[zuiTheme]',
    providers: [ZuiDestroyService]
})
export class ZuiThemeDirective implements OnInit {
    @Output()
    public readonly zuiTheme = new EventEmitter<ZuiTheme>();

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
        private readonly themeService: ZuiThemeService,
        private readonly destroy$: ZuiDestroyService,
        private readonly renderer2: Renderer2,
    ) {}

    public ngOnInit(): void {
      this.themeService.theme$.pipe(
        tap((theme) => this.renderer2.setAttribute(this.element.nativeElement, this.themeService.attThemeKey, theme)),
        tap((theme) => this.zuiTheme.next(theme)),
        takeUntil(this.destroy$)
      ).subscribe()
    }
}
