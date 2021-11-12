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
    name: '@ui-platform/components',
    version: 'latest',
  },
];

export const INSTALL_PACKAGE: Readonly<Package> = {
  name: '@ui-platform/zyfra-components',
  version: 'latest',
};

export const MAIN_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'ZyfraUiRootModule',
        packageName: '@ui-platform/components',
    },
];
