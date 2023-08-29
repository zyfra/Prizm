import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
  Renderer2,
  Self,
  SkipSelf,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmThemeService } from '../../services/theme.service';
import { PrizmTheme } from '../../types/theme';
import { prizmObservable } from '@prizm-ui/core';
import { combineLatest, of, ReplaySubject } from 'rxjs';
import { PrizmLocalThemeService } from './local-theme.service';

@Directive({
  selector: '[prizmTheme]',
  providers: [PrizmDestroyService, PrizmLocalThemeService],
})
export class PrizmThemeDirective implements OnInit {
  @Output()
  public readonly prizmThemeChange = new EventEmitter<PrizmTheme>();

  @Input()
  @prizmObservable({
    name: 'theme$$',
  })
  public prizmTheme!: PrizmTheme;

  private readonly theme$$: ReplaySubject<PrizmTheme> = new ReplaySubject(1);

  constructor(
    @Inject(ElementRef)
    private readonly element: ElementRef<HTMLInputElement>,
    private readonly themeService: PrizmThemeService,
    @Self() private readonly localThemeService: PrizmLocalThemeService,
    @Optional() @SkipSelf() private readonly parentLocalThemeService: PrizmLocalThemeService,
    private readonly destroy$: PrizmDestroyService,
    private readonly renderer2: Renderer2
  ) {}

  public ngOnInit(): void {
    const themeArr = [
      this.theme$$,
      this.parentLocalThemeService?.theme$ ?? of(null),
      this.themeService.getLastThemeForElement$(this.themeService.rootElement),
    ];
    combineLatest(themeArr)
      .pipe(
        map(([theme, localTheme, themeFromService]) => theme || localTheme || themeFromService),
        distinctUntilChanged(),
        tap(theme => {
          this.localThemeService.setTheme(theme);
          this.renderer2.setAttribute(
            this.element.nativeElement,
            this.themeService.attThemeKey,
            theme as PrizmTheme
          );
        }),
        tap(theme => this.prizmThemeChange.next((this.prizmTheme = theme as PrizmTheme))),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
