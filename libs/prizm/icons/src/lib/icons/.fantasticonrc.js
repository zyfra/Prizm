module.exports = {
  name: 'prizm-icons',
  prefix: 'prizm-icons',
  inputDir: './svg', // (required)
  outputDir: '../../styles/icons-24/font', // (required)
  fontTypes: ['ttf', 'woff', 'eot', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  fontsUrl: '.',
  formatOptions: {
    // Pass options directly to `svgicons2svgfont`
    // woff: {
    //   // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
    //   metadata: '...'
    // },
    json: {
      // render the JSON human readable with two spaces indentation (default is none, so minified)
      indent: 2
    },
    ts: {
      // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
      // types: ['constant', 'literalId'],
      // render the types with `'` instead of `"` (default is `"`)
      singleQuotes: true,
      // customise names used for the generated types and constants
      enumName: 'PrizmIconsType',
      constantName: 'PRIZM_ICONS_CODEPOINTS'
      // literalIdName: 'IconId',
      // literalKeyName: 'IconKey'
    }
  },
  // Use a custom Handlebars template
  // templates: {
  //   css: './my-custom-tp.css.hbs'
  // },
  // pathOptions: {
  //   ts: './src/types/icon-types.ts',
  //   json: './misc/icon-codepoints.json'
  // },
  // codepoints: {
  //   'chevron-left': 57344, // decimal representation of 0xe000
  //   'chevron-right': 57345,
  //   'thumbs-up': 57358,
  //   'thumbs-down': 57359
  // },
  // Customize generated icon IDs (unavailable with `.json` config file)
  getIconId: ({
    basename, // `string` - Example: 'foo';
    relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
    absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
    relativeFilePath, // `string` - Example: 'foo.svg'
    index // `number` - Example: `0`
  }) => {
    const parent_dir = relativeDirPath.split('/').pop();
    return [parent_dir, basename].join('_').replace(/[ ]+/g, '_').replace(
      /_-_/g,
      '_'
    ).toLowerCase();
  } // '0_foo'
};
