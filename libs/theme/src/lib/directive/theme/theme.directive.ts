import { Directive, ElementRef, EventEmitter, Inject, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PrizmThemeService } from '../../services/theme.service';
import { PrizmTheme } from '../../types/theme';
import { prizmObservable } from '@prizm-ui/core';
import { combineLatest, Observable } from 'rxjs';

@Directive({
  selector: '[prizmTheme]',
  providers: [PrizmDestroyService],
})
export class PrizmThemeDirective implements OnInit {
  @Output()
  public readonly prizmThemeChange = new EventEmitter<PrizmTheme>();

  @Input()
  @prizmObservable({
    name: 'theme$$',
  })
  public prizmTheme: PrizmTheme;

  private readonly theme$$!: Observable<PrizmTheme>;

  constructor(
    @Inject(ElementRef)
    private readonly element: ElementRef<HTMLInputElement>,
    private readonly themeService: PrizmThemeService,
    private readonly destroy$: PrizmDestroyService,
    private readonly renderer2: Renderer2
  ) {}

  public ngOnInit(): void {
    combineLatest([this.theme$$, this.themeService.change$])
      .pipe(
        map(([theme, themeFromService]) => theme ?? themeFromService.theme),
        tap(theme => {
          this.renderer2.setAttribute(this.element.nativeElement, this.themeService.attThemeKey, theme);
        }),
        tap(theme => this.prizmThemeChange.next(theme)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
