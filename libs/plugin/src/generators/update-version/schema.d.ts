export interface PluginUpdateVersionSchema {
  projects?: string[];
  all?: boolean;
  updateInDependencies?: boolean;
  newVersion: string | number;
  currentVersion?: string | number;
  project?: string;
}
