import { Directive, ElementRef, EventEmitter, Inject, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmThemeService } from '../../services/theme.service';
import { PrizmTheme } from '../../types/theme';
import { prizmObservable } from '@prizm-ui/core';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';

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

  private readonly theme$$: ReplaySubject<PrizmTheme> = new ReplaySubject(1);

  constructor(
    @Inject(ElementRef)
    private readonly element: ElementRef<HTMLInputElement>,
    private readonly themeService: PrizmThemeService,
    private readonly destroy$: PrizmDestroyService,
    private readonly renderer2: Renderer2
  ) {}

  public ngOnInit(): void {
    combineLatest([this.theme$$, this.themeService.getLastThemeForElement$(this.themeService.rootElement)])
      .pipe(
        map(([theme, themeFromService]) => theme || themeFromService),
        distinctUntilChanged(),
        tap(theme => {
          this.renderer2.setAttribute(this.element.nativeElement, this.themeService.attThemeKey, theme);
        }),
        tap(theme => this.prizmThemeChange.next((this.prizmTheme = theme))),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
