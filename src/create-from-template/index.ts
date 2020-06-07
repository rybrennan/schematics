import {
  Rule,
  SchematicContext,
  Tree,
  Source,
  url,
  mergeWith,
  move,
  apply,
} from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
//see options, think interface
import { CreateFromTemplateOptions } from './schema';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createFromTemplate(options: CreateFromTemplateOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const source: Source = url('./files');
    const transformedSource: Source = apply(source, [
      move(normalize(options.folder)),
    ]);
    return mergeWith(transformedSource)(tree, context);
  };
}
