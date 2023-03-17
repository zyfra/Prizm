import { Component, ChangeDetectionStrategy } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'prizm-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent {
  public storybookBaseUrl = environment.storybookBaseUrl;
  public readonly featuresForZIIoT = `
  @font-face {
    font-family: 'PrizmIcons';
    src: local('Prizm Icons'),url('/hostDtdrto/Prizm.woff2') format('woff2'),url('/hostDtdrto/Prizm.woff') format('woff'),url('/hostDtdrto/Prizm.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  - добавляют дополнительно baseHref где лежит ресурс:
  /hostDtdrto
  `;
  public readonly themization = `
  private readonly themeService: PrizmThemeService,
  
  this.shellPropertiesCore
    .getProperty(ShellProperty.Theme)
    .pipe(takeUntil(this.destroy$))
    .subscribe((theme) => {
      if(theme) {
        if (theme.className === 'light-theme') {
          this.themeService.update('light');
        }
        if (theme.className === 'dark-theme') {
          this.themeService.update('dark');
        }
      }
    });
  `;
}
