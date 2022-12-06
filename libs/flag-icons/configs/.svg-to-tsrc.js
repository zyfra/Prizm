const svgToTsConfig = {
  "srcFiles": [
    '../input/svg/**/*.svg'
  ],
  "outputDirectory": '../src/lib/icons',
  "interfaceName": "PrizmIconFlag",
  "typeName": "prizmIconFlag",
  "generateEnum": true,
  "enumName": "PrizmIconFlagEnum",
  "generateType": true,
  "generateTypeObject": true,
  "prefix": "prizmIconFlag",
  "optimizeForLazyLoading": true,
  "modelFileName": "prizm-icon-flag.model",
  "additionalModelFile": "../src/lib",
  svgoConfig: {
    plugins: ['removeDimensions']
  },
  "compileSources": false
};

module.exports = svgToTsConfig;
