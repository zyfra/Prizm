import { ProjectConfiguration, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { prizmAstUpdateProjectVersions } from './util';

jest.mock('@nrwl/devkit', () => ({
  ...jest.requireActual('@nrwl/devkit'),
  updateJson: jest.fn((tree, path, callback) => {
    const data = JSON.parse(tree.read(path).toString());
    const updatedData = callback(data);
    tree.write(path, JSON.stringify(updatedData));
  }),
}));

describe('prizmAstUpdateProjectVersions', () => {
  let tree: Tree;
  let projects: ProjectConfiguration[];

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    tree.write(
      '/projects/project1/package.json',
      JSON.stringify({
        name: 'some-test-library-1',
        version: '1.2.0',
      })
    );
    tree.write(
      '/projects/project2/package.json',
      JSON.stringify({
        name: 'some-test-library-2',
        version: '2.0.0',
      })
    );
    tree.write(
      '/projects/project3/package.json',
      JSON.stringify({
        name: 'some-test-library-3',
        version: '2.0.0',
        peerDependencies: {
          'some-test-library-1': '^1.2.0',
          'some-test-library-2': '~2.0.0, ^2.0.0, 2.0.0 | 12.0.0, 2.0.0 - 3.0.0, 2.0.5 | 4.0.0',
        },
        devDependencies: {
          'some-test-library-2': '~2.0.0',
          'some-test-library-1': '~10.0.0',
        },
        dependencies: {
          'some-test-library-1': '1.2.0',
          'some-test-library-2': '2.0.0 - 3.0.5',
        },
      })
    );

    projects = [
      { root: '/projects/project1' } as ProjectConfiguration,
      { root: '/projects/project2' } as ProjectConfiguration,
      { root: '/projects/project3' } as ProjectConfiguration,
    ];
  });

  it('should update version in package.json for each project', () => {
    const newVersion = '3.0.0';
    prizmAstUpdateProjectVersions(tree, projects, newVersion);

    projects.forEach(project => {
      const packageJsonPath = `${project.root}/package.json`;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const packageJson = JSON.parse(tree.read(packageJsonPath).toString());
      expect(packageJson.version).toBe(newVersion);
    });
  });

  it('should update version in package.json for each project with dependencies', () => {
    const newVersion = '3.0.0';
    prizmAstUpdateProjectVersions(tree, projects, newVersion, undefined, true);

    expect(!!projects.find(i => i.root === '/projects/project3')).toBeTruthy();
    projects.forEach(project => {
      const packageJsonPath = `${project.root}/package.json`;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const packageJson = JSON.parse(tree.read(packageJsonPath).toString());
      expect(packageJson.version).toBe(newVersion);
      if (project.root === '/projects/project3') {
        expect(packageJson.peerDependencies['some-test-library-1']).toEqual(`^${newVersion}`);
        expect(packageJson.peerDependencies['some-test-library-2']).toEqual(
          `~${newVersion}, ^${newVersion}, ${newVersion} | 12.0.0, ${newVersion} - 3.0.0, 2.0.5 | 4.0.0`
        );
        expect(packageJson.devDependencies['some-test-library-2']).toEqual(`~${newVersion}`);
        expect(packageJson.devDependencies['some-test-library-1']).toEqual(`~10.0.0`);
        expect(packageJson.dependencies['some-test-library-1']).toEqual(`${newVersion}`);
        expect(packageJson.dependencies['some-test-library-2']).toEqual(`${newVersion} - 3.0.5`);
      }
    });
  });
});
