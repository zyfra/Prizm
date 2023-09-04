import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';
// '../../../../../package.json'
@Injectable({
  providedIn: 'root',
})
export class PrizmDocCodeDemoService {
  public async open(title: string) {
    const pjson = (await import('./files/package.json.template?raw')).default;
    const pjsonJson = JSON.parse(pjson);
    const deps = {
      ...pjsonJson.dependencies,
      ...pjsonJson.devDependencies,
    };
    sdk.openProject(
      {
        title,
        template: 'angular-cli',
        dependencies: {
          ...pjsonJson.dependencies,
          ...pjsonJson.devDependencies,
        },
        files: {
          'package.json': (await import('./files/package.json.template?raw')).default,
          'tsconfig.json': (await import('./files/tsconfig.json.template?raw')).default,
          'angular.json': (await import('./files/angular.json.template?raw')).default,
          'src/index.html': (await import('./files/src/index.html.template?raw')).default,
          'src/styles.less': (await import('./files/src/styles.less.template?raw')).default,
          'src/polyfills.ts': (await import('./files/src/polyfills.ts.template?raw')).default,
          'src/main.ts': (await import('./files/src/main.ts.template?raw')).default,
          'src/app/app.component.html': (await import('./files/src/app/app.component.html.template?raw'))
            .default,
          'src/app/app.component.less': (await import('./files/src/app/app.component.less.template?raw'))
            .default,
          'src/app/app.component.ts': (await import('./files/src/app/app.component.ts.template?raw')).default,
          'src/app/app.module.ts': (await import('./files/src/app/app.module.ts.template?raw')).default,
          'src/app/app-routing.module.ts': (
            await import('./files/src/app/app-routing.module.ts.template?raw')
          ).default,
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
