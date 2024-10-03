import { Type } from '@angular/core';
import { PrizmHostDirective } from '../types';

export type PrizmHostDirectiveOptions = {
  inputs?: Record<string, string>;
  outputs?: Record<string, string>;
};

export function prizmHostDirective<T>(
  directive: Type<T>,
  options?: PrizmHostDirectiveOptions
): PrizmHostDirective {
  const inputs =
    options?.inputs && Object.entries(options.inputs).map(([oldName, newName]) => `${oldName}: ${newName}`);
  const outputs =
    options?.outputs && Object.entries(options.outputs).map(([oldName, newName]) => `${oldName}: ${newName}`);
  return {
    directive,
    inputs,
    outputs,
  };
}
