interface Package {
  name: string;
  version: string;
}

interface ImportingModule {
  name: string;
  packageName: string;
}

export const MAIN_PACKAGES: ReadonlyArray<Package> = [
  {
    name: '@prizm-ui/core',
    version: '2.1.7',
  },
  {
    name: '@prizm-ui/components',
    version: '2.1.7',
  },
  {
    name: '@prizm-ui/helpers',
    version: '2.1.7',
  },
];

export const INSTALL_PACKAGE: Readonly<Package> = {
  name: '@prizm-ui/install',
  version: '2.1.7',
};

export const MAIN_MODULES: ReadonlyArray<ImportingModule> = [
  {
    name: 'PrizmUiRootModule',
    packageName: '@prizm-ui/components',
  },
];
