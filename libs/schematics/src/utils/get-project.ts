import { JsonArray, JsonObject, workspaces } from '@angular-devkit/core';
import { SchematicsException } from '@angular-devkit/schematics';
import { Schema } from '../ng-add/schema';

export function getProject(
  options: Schema,
  workspace: workspaces.WorkspaceDefinition
): workspaces.ProjectDefinition {
  const projectName: string = options.project || (workspace.extensions.defaultProject?.toString() as string);
  const project = workspace.projects.get(projectName);

  if (!project) {
    throw new SchematicsException(`Unable to find project '${projectName}' in the workspace`);
  }

  return project;
}

export function getProjectTargetOptions(
  project: workspaces.ProjectDefinition,
  buildTarget: string
): Record<string, string | number | boolean | JsonArray | JsonObject | undefined | null> {
  const buildTargetObject = project.targets?.get(buildTarget);

  if (buildTargetObject && buildTargetObject.options) {
    return buildTargetObject.options;
  }

  throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}
