import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { getAllDeps, getPrizmDeps } from './util';
import { TsFileComponentParser } from './classes';
import { PrizmDocDemoMainVersion } from '@prizm-ui/doc';
import { ProjectDependencies } from '@stackblitz/sdk/types/interfaces';

const APP_COMP_META = {
  SELECTOR: `my-app`,
  TEMPLATE_URL: `./app.component.html`,
  STYLE_URLS: [`./app.component.less`],
  CLASS_NAME: `AppComponent`,
} as const;

@Injectable({
  providedIn: 'root',
})
export class PrizmDocCodeDemoService {
  public async open(
    title: string,
    version: PrizmDocDemoMainVersion,
    options: {
      ts: string;
      less?: string;
      html?: string;
    }
  ) {
    const deps = {
      ...getAllDeps(version),
    } as ProjectDependencies;

    const appCompTs = new TsFileComponentParser(options.ts);

    appCompTs.selector = APP_COMP_META.SELECTOR;
    appCompTs.templateUrl = APP_COMP_META.TEMPLATE_URL;
    appCompTs.styleUrls = APP_COMP_META.STYLE_URLS;
    appCompTs.className = APP_COMP_META.CLASS_NAME;

    const component = 'Card';
    sdk.openProject(
      {
        title,
        description: `PRIZM UI example of the component ${component}`,
        template: 'angular-cli',
        dependencies: deps,
        tags: [`Angular`, `PRIZM UI`, `Angular components`, `UI Kit`],
        files: {
          'tsconfig.json': (await import('./files/tsconfig.json.template?raw')).default,
          'angular.json': (await import('./files/angular.json.template?raw')).default,
          'src/index.html': (await import('./files/src/index.html.template?raw')).default,
          'src/styles.less': (await import('./files/src/styles.less.template?raw')).default,
          'src/polyfills.ts': (await import('./files/src/polyfills.ts.template?raw')).default,
          'src/main.ts': (await import('./files/src/main.ts.template?raw')).default,
          'src/app/app.component.html': options.html ?? '',
          'src/app/app.component.less': options.less ?? '',
          'src/app/app.component.ts': appCompTs.toString() ?? '',
          'src/app/app.module.ts': (await import('./files/src/app/app.module.ts.template?raw')).default,
          'src/app/shared.module.ts': (await import('./files/src/app/shared.module.ts.template?raw')).default,
          'src/app/app-routing.module.ts': (
            await import('./files/src/app/app-routing.module.ts.template?raw')
          ).default,
          '.stackblitzrc': `{
            "installDependencies": true,
            "startCommand": "npm install"
          }`,
        },
      },
      {
        clickToLoad: false,
        newWindow: true,
        openFile: ['src/app/app.component.html'],
      }
    );
  }
}
