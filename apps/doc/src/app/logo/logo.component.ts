import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { debounceTime, filter, map } from 'rxjs/operators';
import { PrizmThemeService } from '@prizm-ui/theme';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { PrizmIconsSvgRegistry, PrizmIconSvgEnum, prizmIconSvgOtherGitHub } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-doc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
  readonly githubSvgName = PrizmIconSvgEnum.OTHER_GIT_HUB;
  readonly themeSwitcher = inject(PrizmThemeService);
  readonly svgRegistry = inject(PrizmIconsSvgRegistry);
  readonly storage = inject(LOCAL_STORAGE);
  readonly isNight$ = this.themeSwitcher.change$.pipe(
    filter(i => i.el === this.themeSwitcher.rootElement),
    map(i => i.theme === 'dark'),
    debounceTime(0)
  );

  ngOnInit(): void {
    this.svgRegistry.registerIcons([prizmIconSvgOtherGitHub]);
  }

  public onMode(isNight: boolean): void {
    this.storage.setItem(`night`, isNight ? 'true' : 'false');
    this.themeSwitcher.update(isNight ? 'dark' : 'light');
  }
}

export const LOGO_CONTENT = 'assets/images/logo.svg';
