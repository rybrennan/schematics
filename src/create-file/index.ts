import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { CreateFileOptions } from './schema';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createFile(options: CreateFileOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // console.log(tree.create);
    console.log(options);
    tree.create(options.path, 'File Created from create-file schematic');
    return tree;
  };
}
