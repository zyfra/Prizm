import { AfterViewInit, Component, HostBinding, Inject, ViewChild } from '@angular/core';
import { PrizmThemeService, PrizmToastService } from '@prizm-ui/components';
import { map, takeUntil, tap } from 'rxjs/operators';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { TuiBrightness } from '@taiga-ui/core';
import {
  PrizmDocHostElementListenerService
} from '../../../../libs/doc/base/src/lib/components/host/host-element-listener.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';
@Component({
  selector: 'prizm-doc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [PrizmDestroyService]
})
export class AppComponent implements AfterViewInit {
  public title = 'doc';
  public element: HTMLElement;
  @ViewChild('docRef') docEl: {night: boolean, onMode: (isNight: boolean) => void};

  readonly isNight$ = this.themeSwitcher.theme$.pipe(
    map(i => i.theme === 'dark')
  )

  @HostBinding('attr.data-mode')
  get mode(): TuiBrightness | null {
    return this.themeSwitcher.theme() === 'dark' ? 'onDark' : null;
  }

  constructor(
    private readonly themeSwitcher: PrizmThemeService,
    private readonly prizmDocHostElementListenerService: PrizmDocHostElementListenerService,
    @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    private readonly destroy$: PrizmDestroyService,
    private readonly toastService: PrizmToastService
  ) {
    this.themeSwitcher.rootElement = null;
  }

  public ngAfterViewInit(): void {
    this.onMode(this.docEl.night);

    this.prizmDocHostElementListenerService.event$.pipe(
      takeUntil(this.destroy$),
      tap((event) => {
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
            title: `Component: ${event.page.header}`
          }
        )
      })
    ).subscribe();
  }


  public onMode(isNight: boolean): void {
    this.themeSwitcher.update(
      isNight ? 'dark' : 'light',
      this.element
    );
    /* update taiga doc theme */
    this.docEl.onMode(isNight);
  }

  public contentReady(el: HTMLElement): void {
    this.themeSwitcher.rootElement = el;
  }
}
