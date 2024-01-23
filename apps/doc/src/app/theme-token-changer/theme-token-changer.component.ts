import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {
  PRIZM_THEME_TOKEN_BASE_VARIABLES,
  PRIZM_THEME_TOKEN_PALETTE_VARIABLES,
  PrizmThemeModule,
  PrizmThemeService,
} from '@prizm-ui/theme';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import {
  PrizmIconsSvgRegistry,
  prizmIconSvgOtherGitHub,
  prizmIconSvgShapeGeometrySquareCirclePlusTriangleFill,
} from '@prizm-ui/icons';
import { PrizmLanguageSwitcher } from '@prizm-ui/i18n';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { DOCUMENT, NgFor } from '@angular/common';

@Component({
  selector: 'prizm-doc-theme-token-changer',
  templateUrl: './theme-token-changer.component.html',
  styleUrls: ['./theme-token-changer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PrizmAddonDocModule, NgFor, PrizmThemeModule],
})
export class ThemeTokenChanger implements OnInit {
  @ViewChild('prizmTheme') prizmThemeElement!: ElementRef<HTMLElement>;
  readonly PRIZM_THEME_TOKEN_PALETTE_VARIABLES = PRIZM_THEME_TOKEN_PALETTE_VARIABLES;
  readonly PRIZM_THEME_TOKEN_BASE_VARIABLES = PRIZM_THEME_TOKEN_BASE_VARIABLES;
  readonly mapValue = new Map<string, string>();

  constructor(
    public readonly themeService: PrizmThemeService,
    @Inject(DOCUMENT) public readonly document: Document,
    private readonly svgRegistry: PrizmIconsSvgRegistry
  ) {
    this.svgRegistry.registerIcons([
      prizmIconSvgOtherGitHub,
      prizmIconSvgShapeGeometrySquareCirclePlusTriangleFill,
    ]);
  }

  ngOnInit(): void {
    this.init();
  }

  public getTokenValue(token: string): string {
    return this.mapValue.get(token) ?? '';
  }

  private init() {
    this.addTokenValueToMap(PRIZM_THEME_TOKEN_PALETTE_VARIABLES);
    this.addTokenValueToMap(PRIZM_THEME_TOKEN_BASE_VARIABLES);
  }

  private addTokenValueToMap(tokens: string[]) {
    tokens.forEach((token: string) => {
      this.mapValue.set(token, this.themeService.getTokenValue(token) ?? '');
    });
  }
}
