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
    name: '@digital-plant/zyfra-components',
    version: '0.13.6',
  },
  {
    name: '@digital-plant/zyfra-helpers',
    version: '1.0.0-beta.8',
  },
];

export const INSTALL_PACKAGE: Readonly<Package> = {
  name: '@digital-plant/zyfra-ui',
  version: '0.13.6',
};

export const MAIN_MODULES: ReadonlyArray<ImportingModule> = [
  {
    name: 'ZyfraUiRootModule',
    packageName: '@digital-plant/zyfra-components',
  },
];
