import { AfterViewInit, Component, HostBinding, Inject, ViewChild } from '@angular/core';
import { PrizmToastService } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';
import { debounce, debounceTime, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { TuiBrightness } from '@taiga-ui/core';
import { PRIZM_DOC_TITLE, PrizmDocHostElementListenerService } from '@prizm-ui/doc';
import { filterTruthy, PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_LOG_LEVEL, prizmAssert } from '@prizm-ui/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { RouterEvent } from '@angular/router';
import { DOCUMENT } from '@angular/common';

/**
 * Show all assert logg as warning
 * */
prizmAssert.defaultLevel = PRIZM_LOG_LEVEL.warn;
prizmAssert.enabled = [PRIZM_LOG_LEVEL.error, PRIZM_LOG_LEVEL.log, PRIZM_LOG_LEVEL.warn];

@Component({
  selector: 'prizm-doc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [PrizmDestroyService],
})
export class AppComponent implements AfterViewInit {
  public title = 'doc';
  public element: HTMLElement;
  @ViewChild('docRef') docEl: { night: boolean; onMode: (isNight: boolean) => void };

  readonly isNight$ = this.themeSwitcher.change$.pipe(map(i => i.theme === 'dark'));

  @HostBinding('attr.data-mode')
  get mode(): TuiBrightness | null {
    return this.themeSwitcher.getByElement() === 'dark' ? 'onDark' : null;
  }

  constructor(
    private readonly themeSwitcher: PrizmThemeService,
    private readonly prizmDocHostElementListenerService: PrizmDocHostElementListenerService,
    private readonly destroy$: PrizmDestroyService,
    public readonly router: Router,
    private readonly toastService: PrizmToastService,
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(PRIZM_DOC_TITLE) private readonly docTitle: string
  ) {
    this.themeSwitcher.rootElement = null;
    this.initPageTitleSetter();
  }

  private initPageTitleSetter(): void {
    this.router.events
      .pipe(
        filter((e): e is ActivationEnd => {
          return e instanceof ActivationEnd;
        }),
        map(i => i.snapshot?.data.title),
        filterTruthy(),
        distinctUntilChanged(),
        debounceTime(0),
        tap(title => {
          const pageTitle = [this.docTitle, title].join(' ');
          this.documentRef.title = pageTitle;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngAfterViewInit(): void {
    this.onMode(this.docEl.night);

    this.prizmDocHostElementListenerService.event$
      .pipe(
        tap(event => {
          this.toastService.create(
            `
            ${event.hasNotListener ? 'Please add event listener to api' : ''}
            Event: ${event.event}\n,
            Type: ${event.type}\n,
            Data: ${JSON.stringify(event.data)}
          `,
            {
              appearance: event.hasNotListener ? 'warning' : 'success',
              timer: 5000,
              title: `Element: ${event.key} Selector:${event.page.header}`,
            }
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.prizmDocHostElementListenerService.checkInfo$
      .pipe(
        takeUntil(this.destroy$),
        tap(event => {
          if (
            !event.notListenerInputs?.length &&
            !event.notListenerOutputs?.length &&
            !event.unnecessaryInputs?.length &&
            !event.unnecessaryOutputs?.length
          )
            return;
          this.toastService.create(
            [
              event.notListenerInputs?.length && `Inputs: ${event.notListenerInputs.join(', ')}`,
              event.notListenerOutputs?.length && `Outputs: ${event.notListenerOutputs.join(', ')}`,
              event.unnecessaryInputs?.length && `UnnecessaryInputs: ${event.unnecessaryInputs.join(', ')}`,
              event.unnecessaryOutputs?.length &&
                `UnnecessaryOutputs: ${event.unnecessaryOutputs.join(', ')}`,
            ]
              .filter(Boolean)
              .join('\n'),
            {
              appearance: 'warning',
              timer: 0,
              title: `Element: ${event.key} Selector:${event.selector} has not api for inputs or outputs`,
            }
          );
        })
      )
      .subscribe();
  }

  public onMode(isNight: boolean): void {
    this.themeSwitcher.update(isNight ? 'dark' : 'light', this.element);
    console.log(this.docEl);
    /* update taiga doc theme */
    this.docEl.onMode(isNight);
  }

  public contentReady(el: HTMLElement): void {
    this.themeSwitcher.rootElement = el;
  }
}
