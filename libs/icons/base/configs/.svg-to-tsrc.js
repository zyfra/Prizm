const svgToTsConfig = {
  srcFiles: ['../assets/svg/**/*.svg'],
  outputDirectory: '../src/lib/svg',
  interfaceName: 'PrizmIconSvg',
  typeName: 'prizmIconSvg',
  generateEnum: true,
  enumName: 'PrizmIconSvgEnum',
  generateType: true,
  generateTypeObject: true,
  prefix: 'prizmIconSvg',
  optimizeForLazyLoading: true,
  modelFileName: 'prizm-icon-svg.model',
  additionalModelFile: '../src/lib',
  svgoConfig: {
    plugins: ['removeDimensions'],
  },
  compileSources: false,
};

module.exports = svgToTsConfig;
