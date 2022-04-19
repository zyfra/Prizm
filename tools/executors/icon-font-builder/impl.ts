import { ExecutorContext } from '@nrwl/devkit';
import * as path from 'path';
import * as fs from 'fs';
import IconFontBuildr from 'icon-font-buildr';

/**
 * Defaults
 *
 * fontFileName = ZyfraIcons
 * fontName = Zyfra Icons
 * iconClassName = .zyfra-icon
 * inputPath = ./libs/components/assets/icons
 * outputPath = ./libs/components/src/styles/icons
 * outputStyleFile = icons.less
 * outputDefinitionsTs = ./libs/components/src/lib/story/icon-definitions.ts
 */
export interface IconFontExecutorOptions {
  fontName: string;
  fontFileName: string;
  iconClassName: string;
  inputPath: string;
  outputPath: string;
  outputStyleFile: string;
  outputDefinitionsTs: string;
}

interface IconDefinition {
  dir: string;
  data: string[];
}

export default async function builderExecutor(options: IconFontExecutorOptions, context: ExecutorContext) {
  const sources = [];
  const icons = [];
  const dirs = fs.readdirSync(path.join(options.inputPath));

  const definitions: IconDefinition[] = [];

  dirs.forEach((dir, dirIndex) => {
    const definition: IconDefinition = {dir, data:[]};

    // Read files in dir
    const iconFiles = fs.readdirSync(path.join(options.inputPath, dir));
    sources.push(path.join(options.inputPath, dir, '[icon].svg'));

    iconFiles.forEach((iconFile, iconIndex) => {
      const iconName = iconFile.replace('.svg', '');

      definition.data.push(iconName);

      icons.push({
        icon: iconName,
        ligatures: [`${iconName}-icon`],
      });
    });

    definitions.push(definition);


  });

  // Write defs ts
  writeToFileDefs(definitions, options);

  // Write fonts
  const builder = new IconFontBuildr({
    sources: sources,
    icons: icons,
    output: {
      codepoints: true,
      ligatures: true,
      fonts: path.join(options.outputPath),
      fontName: options.fontFileName,
      formats: ['ttf', 'woff', 'woff2'],
    },
  });

  await builder.build();

  // Write styles
  const ligatures = builder.getIconsLigatures();
  const codepoints = builder.getIconsCodepoints();
  generateLessFromLigatures(ligatures, codepoints, options);

  return { success: true };
}

function generateLessFromLigatures(ligatures, codepoints, options: IconFontExecutorOptions): void {
  const fontRules = `@icon-font-family: ${options.fontFileName};
@font-face {
  font-family: @icon-font-family;
  src: local('${options.fontName}'),url('${options.fontFileName}.woff2') format('woff2'),url('${options.fontFileName}.woff') format('woff'),url('${options.fontFileName}.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
${options.iconClassName} {
  font-family: @icon-font-family;
  font-style: normal;
`;

  const iconRules = Object.entries(codepoints)
    .map(([key, value]) => `  &.${key}:before { content: '${value[0]}' }`)
    .join('\n');
  const filename = path.join(options.outputPath, options.outputStyleFile);
  fs.writeFileSync(filename, `${fontRules}\n${iconRules}\n}`);
}

function writeToFileDefs(defs: IconDefinition[], options: IconFontExecutorOptions) {
  const data = JSON.stringify(defs, null, 4);
  const defFileText = `export const IconDefs = ${data};\n`

  fs.writeFileSync(path.join(options.outputDefinitionsTs), defFileText);
}
