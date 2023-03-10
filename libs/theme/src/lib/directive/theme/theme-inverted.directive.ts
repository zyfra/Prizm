import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmThemeService } from '../../services/theme.service';
import { PrizmTheme } from '../../types/theme';
import { prizmObservable } from '@prizm-ui/core';
import { combineLatest, Observable } from 'rxjs';

@Directive({
  selector: '[prizmThemeInverted]',
  providers: [PrizmDestroyService],
})
export class PrizmThemeInvertedDirective implements OnInit {
  @Output()
  public readonly prizmThemeChange = new EventEmitter<PrizmTheme>();

  @Input()
  @prizmObservable({
    name: 'invertedValues$$',
  })
  public invertedValues = {
    dark: 'light',
    light: 'dark',
  };

  @Input()
  @prizmObservable({
    name: 'themeElement$$',
  })
  public themeElement = this.themeService.rootElement;

  private readonly invertedValues$$!: Observable<Record<string, string>>;
  private readonly themeElement$$: Observable<HTMLElement>;

  constructor(
    private readonly themeService: PrizmThemeService,
    private readonly elementRef: ElementRef,
    private readonly destroy$: PrizmDestroyService
  ) {}

  public ngOnInit(): void {
    combineLatest([this.invertedValues$$, this.themeElement$$])
      .pipe(
        switchMap(([invertedValues, themeElement]) =>
          this.themeService.getInvertedThemeByElement$(themeElement, invertedValues)
        ),
        tap(newTheme => this.themeService.update(newTheme, this.elementRef.nativeElement)),
        tap(newTheme => this.prizmThemeChange.next(newTheme)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
