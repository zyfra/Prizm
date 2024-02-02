"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91166],{91166:n=>{n.exports="import { Component, ChangeDetectionStrategy, Input } from '@angular/core';\nimport { INavigationTree } from '@prizm-ui/components';\nimport { NAVIGATION_EXAMPLE } from '../../navigation-example.const';\nimport { map } from 'rxjs/operators';\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\n@Component({\n  selector: 'prizm-navigation-basic-example',\n  templateUrl: './navigation-basic-example.component.html',\n  styleUrls: ['./navigation-basic-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class NavigationBasicExampleComponent {\n  @Input() public isNavigationAbsolute = false;\n\n  public data: INavigationTree[] = NAVIGATION_EXAMPLE;\n  public openDropdown = false;\n  public openNavigation = true;\n  public parentActiveIdx = 0;\n  public activeElement!: INavigationTree | null;\n\n  public readonly logo = 'assets/example/logo-dark.png';\n\n  constructor(private readonly themeSwitcher: PrizmThemeService) {}\n\n  public toggleNavigation(): void {\n    this.openNavigation = !this.openNavigation;\n  }\n\n  public changeNavElement(idx: number): void {\n    this.parentActiveIdx = idx;\n  }\n\n  public saveActiveIdx(item: INavigationTree): void {\n    this.activeElement = null;\n    // TODO create recursive func\n    const idx = this.data.findIndex(dataItem => {\n      return (\n        dataItem === item ||\n        dataItem.children?.includes(item) ||\n        dataItem.children?.find(subChild => subChild?.children?.includes(item))\n      );\n    });\n    if (idx === -1) return;\n    if (this.data.indexOf(item) === -1) {\n      this.activeElement = item;\n    }\n    this.parentActiveIdx = idx;\n  }\n}\n"}}]);