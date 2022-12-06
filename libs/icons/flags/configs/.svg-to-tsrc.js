const svgToTsConfig = {
  srcFiles: ['../assets/flags/**/*.svg'],
  outputDirectory: '../src/lib/icons',
  interfaceName: 'PrizmIconSvgFlagSvg',
  typeName: 'prizmIconFlagSvg',
  generateEnum: true,
  enumName: 'PrizmIconSvgFlagSvgEnum',
  generateType: true,
  generateTypeObject: true,
  prefix: 'prizmIconFlagSvg',
  optimizeForLazyLoading: true,
  modelFileName: 'prizm-icon-flag-svg.model',
  additionalModelFile: '../src/lib',
  svgoConfig: {
    plugins: ['removeDimensions'],
  },
  compileSources: false,
};

module.exports = svgToTsConfig;
