import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  inject,
  Inject,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { LOCAL_STORAGE, WINDOW } from '@ng-web-apis/common';
import { TuiSwipeService } from '@taiga-ui/cdk';
import { TuiBrightness, TuiModeDirective } from '@taiga-ui/core';
import { skip, Subject } from 'rxjs';
import { PrizmThemeService } from '@prizm-ui/theme';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: `prizm-doc-main`,
  templateUrl: `./main.template.html`,
  styleUrls: [`./main.style.less`],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: TuiModeDirective,
      useExisting: forwardRef(() => PrizmDocMainComponent),
    },
    TuiSwipeService,
    PrizmDestroyService,
  ],
})
export class PrizmDocMainComponent implements OnInit {
  night =
    this.storage.getItem(`night`) === `true` ||
    (this.storage.getItem(`night`) === null &&
      this.windowRef.matchMedia(`(prefers-color-scheme: dark)`).matches);

  readonly change$ = new Subject<void>();

  @Output() contentReady: EventEmitter<HTMLElement> = new EventEmitter();

  readonly themeSwitcher = inject(PrizmThemeService);
  readonly destroy$ = inject(PrizmDestroyService);

  constructor(
    @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    @Inject(WINDOW) private readonly windowRef: Window,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // fist sync theme with taiga
    this.themeSwitcher.update(this.night ? 'dark' : 'light');

    // update taiga theme on change prizm theme
    this.themeSwitcher.change$
      .pipe(
        skip(1),
        tap(theme => {
          this.onMode(theme.theme === 'dark');
          this.cdRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  @HostBinding(`attr.data-mode`)
  get mode(): TuiBrightness | null {
    return this.night ? `onDark` : null;
  }

  public onMode(night: boolean): void {
    this.night = night;
    this.change$.next();
    this.storage.setItem(`night`, String(night));
  }
}
