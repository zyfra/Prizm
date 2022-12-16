import { AfterViewInit, Component, HostBinding, Inject, ViewChild } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/components';
import { map } from 'rxjs/operators';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { TuiBrightness } from '@taiga-ui/core';
@Component({
  selector: 'prizm-doc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
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
    @Inject(LOCAL_STORAGE) private readonly storage: Storage,
  ) {
    this.themeSwitcher.rootElement = null;
  }

  public ngAfterViewInit(): void {
    this.onMode(this.docEl.night);
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
