import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ryanCollection(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    console.log('can you see me');
    context.logger.info('Info message');
    context.logger.warn('Warn message');
    context.logger.error('Error message');
    return tree;
  };
}
