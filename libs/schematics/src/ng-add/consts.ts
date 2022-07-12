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
    version: '0.12.0',
  },
  {
    name: '@digital-plant/zyfra-helpers',
    version: '0.12.0',
  },
];

export const INSTALL_PACKAGE: Readonly<Package> = {
  name: '@digital-plant/zyfra-ui',
  version: '0.12.0',
};

export const MAIN_MODULES: ReadonlyArray<ImportingModule> = [
  {
    name: 'ZyfraUiRootModule',
    packageName: '@digital-plant/zyfra-components',
  },
];
