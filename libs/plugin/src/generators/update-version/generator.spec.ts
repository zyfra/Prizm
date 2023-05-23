import { ProjectConfiguration, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import updateVersion from './index';

jest.mock('@nrwl/devkit', () => ({
  ...jest.requireActual('@nrwl/devkit'),
  updateJson: jest.fn((tree, path, callback) => {
    const data = JSON.parse(tree.read(path).toString());
    const updatedData = callback(data);
    tree.write(path, JSON.stringify(updatedData));
  }),
}));

describe('nx-plugin:generator update-version', () => {
  let tree: Tree;
  let projects: ProjectConfiguration[];

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();

    tree.write('/projects/project1/package.json', JSON.stringify({ version: '1.0.0' }));
    tree.write(
      '/projects/project1/project.json',
      JSON.stringify({
        name: 'project1',
        projectType: 'library',
      })
    );
    tree.write('/projects/project2/package.json', JSON.stringify({ version: '1.4.0' }));
    tree.write(
      '/projects/project2/project.json',
      JSON.stringify({
        name: 'project2',
        projectType: 'library',
      })
    );
    projects = [
      { name: 'project1', root: '/projects/project1' } as ProjectConfiguration,
      { name: 'project2', root: '/projects/project2' } as ProjectConfiguration,
    ];
  });

  it('should update version in package.json for all projects', async () => {
    const newVersion = '3.0.0';
    await updateVersion(tree, {
      all: true,
      newVersion: newVersion,
    });

    projects.forEach(project => {
      const packageJsonPath = `${project.root}/package.json`;
      const packageJson = JSON.parse(tree.read(packageJsonPath).toString());
      expect(packageJson.version).toBe(newVersion);
    });
  });

  it('should update version in package.json for specific project', async () => {
    const newVersion = '3.0.0';
    await updateVersion(tree, {
      project: 'project1',
      newVersion: newVersion,
    });

    projects.forEach(project => {
      const packageJsonPath = `${project.root}/package.json`;
      const packageJson = JSON.parse(tree.read(packageJsonPath).toString());
      if (project.name === 'project1') {
        expect(packageJson.version).toBe(newVersion);
      } else {
        expect(packageJson.version).not.toBe(newVersion);
      }
    });
  });

  it('should update version in package.json for specific projects', async () => {
    const newVersion = '3.0.0';
    await updateVersion(tree, {
      projects: ['project2'],
      newVersion: newVersion,
    });

    projects.forEach(project => {
      const packageJsonPath = `${project.root}/package.json`;
      const packageJson = JSON.parse(tree.read(packageJsonPath).toString());
      if (project.name === 'project2') {
        expect(packageJson.version).toBe(newVersion);
      } else {
        expect(packageJson.version).not.toBe(newVersion);
      }
    });
  });
});
