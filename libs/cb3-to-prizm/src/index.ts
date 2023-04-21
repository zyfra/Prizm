import { Tree, formatFiles, readProjectConfiguration } from '@nrwl/devkit';

export interface MySchematicSchema {
  projectName: string;
}

export default async function (tree: Tree, schema: MySchematicSchema): Promise<any> {
  const projectConfig = readProjectConfiguration(tree, schema.projectName);

  // Получение пути к корневому файлу проекта (обычно это `index.ts` или `main.ts`)
  const entryFilePath = projectConfig.targets.build.options.main;

  // Здесь вы можете работать с файлом проекта, используя путь `entryFilePath` и API `tree`
  // Например, вставьте строку в начале файла:
  const content = tree.read(entryFilePath, 'utf-8');
  const updatedContent = `// Добавлено схематикой\n${content}`;
  tree.write(entryFilePath, updatedContent);

  await formatFiles(tree);
}

export * from './task';
