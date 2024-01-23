import { ChangeDetectionStrategy, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {
  PRIZM_DARK_THEME_CSS_VARS,
  PRIZM_LIGHT_THEME_CSS_VARS,
  PrizmThemeModule,
  PrizmThemeService,
} from '@prizm-ui/theme';
import {
  PrizmIconsSvgComponent,
  PrizmIconsSvgRegistry,
  prizmIconSvgEditorDecorCodeDownload,
  PrizmIconSvgEnum,
  prizmIconSvgOtherGitHub,
  prizmIconSvgSettingsToolsBan,
  prizmIconSvgShapeGeometrySquareCirclePlusTriangleFill,
} from '@prizm-ui/icons';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { of, switchMap } from 'rxjs';
import { debounceTime, delay, filter, map, startWith } from 'rxjs/operators';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { PrizmScrollbarComponent, PrizmToggleComponent } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { ThemeTokenChangerService } from './theme-token-changer.service';

@Component({
  selector: 'prizm-doc-theme-token-changer',
  templateUrl: './theme-token-changer.component.html',
  styleUrls: ['./theme-token-changer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PrizmAddonDocModule,
    NgFor,
    NgIf,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    PrizmThemeModule,
    PrizmScrollbarComponent,
    PrizmIconsSvgComponent,
    PrizmToggleComponent,
  ],
  providers: [PrizmDestroyService],
})
export class ThemeTokenChangerComponent {
  @ViewChild('prizmTheme') prizmThemeElement!: ElementRef<HTMLElement>;
  protected readonly PrizmIconSvgEnum = PrizmIconSvgEnum;
  readonly isNight$ = this.themeService.change$.pipe(
    filter(i => i.el === this.themeService.rootElement),
    map(i => i.theme === 'dark'),
    debounceTime(0)
  );

  readonly theme$ = this.themeService.changesTheme$.pipe(
    switchMap(value => of(value).pipe(startWith(null), delay(100)))
  );

  private readonly lightTokens = Object.keys(PRIZM_LIGHT_THEME_CSS_VARS).map(i => i.substring(2));

  private readonly darkTokens = Object.keys(PRIZM_DARK_THEME_CSS_VARS).map(i => i.substring(2));

  get tokens() {
    if (this.themeService.value === 'light') {
      return this.lightTokens;
    }
    return this.darkTokens;
  }

  constructor(
    public readonly tokenChangerService: ThemeTokenChangerService,
    public readonly themeService: PrizmThemeService,
    @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    private readonly svgRegistry: PrizmIconsSvgRegistry
  ) {
    this.svgRegistry.registerIcons([
      prizmIconSvgOtherGitHub,
      prizmIconSvgSettingsToolsBan,
      prizmIconSvgEditorDecorCodeDownload,
      prizmIconSvgShapeGeometrySquareCirclePlusTriangleFill,
    ]);
  }

  public onMode(isNight: boolean): void {
    this.storage.setItem(`night`, isNight ? 'true' : 'false');
    this.themeService.update(isNight ? 'dark' : 'light');
  }
}
