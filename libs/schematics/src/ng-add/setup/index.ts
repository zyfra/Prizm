import { chain, Rule } from '@angular-devkit/schematics';
import { Schema } from '../schema';
import { addInstallMainModules } from './modules';
import { addStyles } from './styles';

export default function ngAddSetupProject(options: Schema): Rule {
  return chain([addStyles(options), addInstallMainModules(options)]);
}
