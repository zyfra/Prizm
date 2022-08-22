import { formatFiles, generateFiles, joinPathFragments, names, Tree } from '@nrwl/devkit';
import { ZuiDocExampleGeneratorSchema } from './models';
import { capitalizeFirstLetter, updatePages, updateRoutes } from './util';
import { chain } from '@angular-devkit/schematics';

export default async function (tree: Tree, schema: ZuiDocExampleGeneratorSchema) {
  const moduleName = schema.name
  const normalizedClassName= names(moduleName).className;
  const normalizedExampleSelectorName= names(`zui-doc-${moduleName}-base-example`).fileName;
  const normalizedExampleClassName = names(`${moduleName}BaseExample`).className;
  const variables = {
    title: capitalizeFirstLetter(schema.title ?? schema.name),
    normalizedClassName,
    normalizedSelectorName: names(moduleName).fileName,
    normalizedFileName: names(schema.name).fileName,
    normalizedExampleClassName,
    normalizedExampleSelectorName,
    normalizedModuleImportModuleName: names(`Zui${normalizedClassName}Module`).className,
    creationDate: new Date().toISOString(),
  };
  const relativePathToFile = `components/${variables.normalizedFileName}`;
  const pathToFile = `apps/doc/src/app/${relativePathToFile}`;
  generateFiles(
    tree as any,
    joinPathFragments(__dirname, './module'),
    pathToFile,
    variables
  )
  await formatFiles(tree);
  await updateRoutes(tree, 'apps/doc/src/app/app.routes.ts', {
    componentRoutePath: relativePathToFile,
    moduleImportPath: `./${relativePathToFile}/${variables.normalizedFileName}.module`,
    moduleClassName: `${normalizedClassName}Module`,
    data: {
      title: variables.title
    }
  });
  await updatePages(tree, 'apps/doc/src/app/pages.ts', {
    title: variables.title,
    route: relativePathToFile,
    keywords: schema.keywords
  });
}
