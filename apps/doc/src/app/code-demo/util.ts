import { PrizmDocDemoMainVersion } from '@prizm-ui/doc';

export function getPrizmDeps(version: string) {
  let prizmVersion = '3.x.x';

  switch (version) {
    case '1':
      prizmVersion = '1.x.x';
      break;

    case '2':
      prizmVersion = '2.x.x';
      break;

    case '3':
      prizmVersion = '3.x.x';
      break;
  }

  return {
    '@prizm-ui/components': prizmVersion,
    '@prizm-ui/charts': prizmVersion,
    '@prizm-ui/core': prizmVersion,
    '@prizm-ui/helpers': prizmVersion,
    '@prizm-ui/i18n': prizmVersion,
    '@prizm-ui/icons': prizmVersion,
    '@prizm-ui/flag-icons': prizmVersion,
    '@prizm-ui/theme': prizmVersion,
    '@prizm-ui/nx-plugin': prizmVersion,
    '@prizm-ui/ast': prizmVersion,
    '@prizm-ui/nx-mv': prizmVersion,
  };
}
export function getPrizmOtherDeps(version: PrizmDocDemoMainVersion) {
  if (version === '1') {
    return {
      '@ng-web-apis/common': '^2.0.0',
      '@ng-web-apis/intersection-observer': '^3.0.0',
      '@ng-web-apis/resize-observer': '^2.0.0',
      'ngx-mask': '14.2.4',
      primeicons: '^6.0.1',
      primeng: '^14.2.3',
      lodash: '^4.17.15',
      '@antv/g2plot': '^2.4.22',
      uuid: '^8.3.2',

      marked: '4.0.0',
      clipboard: '^2.0.11',
      prismjs: '1.29.0',
    };
  } else if (version === '2') {
    return {
      '@ng-web-apis/common': '^2.0.0',
      '@ng-web-apis/intersection-observer': '^3.0.0',
      '@ng-web-apis/resize-observer': '^2.0.0',
      'ngx-mask': '15.1.5',
      primeicons: '^6.0.1',
      primeng: '^15.4.5-lts',
      lodash: '^4.17.15',
      '@antv/g2plot': '^2.4.22',
      uuid: '^8.3.2',

      marked: '^4.0.17',
      clipboard: '^2.0.11',
      prismjs: '1.29.0',
    };
  } else {
    return {
      '@ng-web-apis/common': '^3.0.0',
      '@ng-web-apis/intersection-observer': '^3.0.0',
      '@ng-web-apis/mutation-observer': '^3.0.1',
      '@ng-web-apis/resize-observer': '^3.0.1',
      'ngx-mask': '16.2.6',
      lodash: '^4.17.15',
      '@antv/g2plot': '^2.4.22',
      uuid: '^8.3.2',

      marked: '^4.0.17',
      clipboard: '^2.0.11',
      prismjs: '1.29.0',
    };
  }
}

export function getAllDeps(version: PrizmDocDemoMainVersion): Record<string, unknown> {
  return {
    ...getPrizmOtherDeps(version),
    ...getPrizmNgDeps(version),
    ...getPrizmDeps(version),
  };
}

export function getPrizmNgDeps(version: PrizmDocDemoMainVersion) {
  let ngVersion = '16.x.x';

  switch (version) {
    case '1':
      ngVersion = '14.x.x';
      break;

    case '2':
      ngVersion = '15.x.x';
      break;

    case '3':
      ngVersion = '16.x.x';
      break;
  }

  return {
    ...{
      '@angular/cdk': ngVersion,
      '@angular/core': ngVersion,
      '@angular/common': ngVersion,
      '@angular/compiler': ngVersion,
      '@angular/forms': ngVersion,
      '@angular/localize': ngVersion,
      '@angular/platform-browser': ngVersion,
      '@angular/platform-browser-dynamic': ngVersion,
      '@angular/animations': ngVersion,
      '@angular/router': ngVersion,
    },
  };
}
