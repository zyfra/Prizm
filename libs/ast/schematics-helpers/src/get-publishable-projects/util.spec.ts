import * as mockFs from 'mock-fs';
import { Tree, readProjectConfiguration, getProjects } from '@nrwl/devkit';
import { prizmAstGetPublishableProjects } from './util';

jest.mock('@nrwl/devkit');

describe('prizmFindVersionsOfPublishableProjects', () => {
  beforeEach(() => {
    // Mock file system
    mockFs({
      '/project-with-package-json': {
        'package.json': '{}', // Создаем пустой package.json в проекте с пакетом
      },
      '/project-without-package-json': {}, // Проект без package.json
    });
  });

  afterEach(() => {
    // Восстанавливаем реальную файловую систему после каждого теста
    mockFs.restore();
  });

  it('should return project names with package.json', async () => {
    // Mock tree
    const tree: Tree = {
      read: (path: string) => (path.includes('project-with-package-json') ? '{}' : null),
      exists: (path: string) => path.includes('project-with-package-json'),
    } as any;

    // Mock getProjects
    (getProjects as jest.Mock).mockReturnValue(
      new Map([
        [
          'project-with-package-json',
          {
            root: 'project-with-package-json',
          },
        ],
        [
          'project-without-package-json',
          {
            root: 'project-without-package-json',
          },
        ],
      ])
    );

    // Mock readProjectConfiguration
    (readProjectConfiguration as jest.Mock).mockImplementation((_, name: string) => ({
      root: `/${name}`,
    }));

    // Run the function
    const result = prizmAstGetPublishableProjects(tree);

    // Check the result
    expect(result.map(i => i.root)).toEqual(['project-with-package-json']);
  });
});
