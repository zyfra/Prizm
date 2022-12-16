import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { PrizmThemeService } from '@prizm-ui/components';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

@Component({
    selector: 'prizm-doc-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly isNight$ = this.themeSwitcher.theme$.pipe(
    map(i => i.theme === 'dark')
  )

  constructor(
    private readonly themeSwitcher: PrizmThemeService,
    @Inject(LOCAL_STORAGE) private readonly storage: Storage,
  ) {
  }

  public onMode(isNight: boolean): void {
    this.themeSwitcher.update(isNight ? 'dark' : 'light');
    /* update taiga doc theme */
    // this.docEl.onMode(isNight);
  }

  public ngAfterViewInit(): void {
    // this.onMode(this.docEl.night);
  }
}

export const LOGO_CONTENT = 'assets/images/logo.svg';
