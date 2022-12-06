const svgToTsConfig = {
  "srcFiles": [
    '../assets/svg/**/*.svg'
  ],
  "outputDirectory": '../src/lib/svg',
  "interfaceName": "PrizmIcon",
  "typeName": "prizmIcon",
  "generateEnum": true,
  "enumName": "PrizmIconEnum",
  "generateType": true,
  "generateTypeObject": true,
  "prefix": "prizmIcon",
  "optimizeForLazyLoading": true,
  "modelFileName": "prizm-icon.model",
  "additionalModelFile": "../src/lib",
  svgoConfig: {
    plugins: ['removeDimensions']
  },
  "compileSources": false
};

module.exports = svgToTsConfig;
