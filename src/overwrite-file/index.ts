import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { OverwriteFileOptions } from './schema';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function overwriteFile(options: OverwriteFileOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const buffer = tree.read(options.path);

    console.log('heee', buffer);
    const content = buffer ? buffer.toString() : '';

    console.log(content);
    const comment = `// ¯\_(ツ)_/¯\n`;
    if (!content.includes(comment)) {
      tree.overwrite(options.path, comment + content);
    }
    return tree;
  };
}
