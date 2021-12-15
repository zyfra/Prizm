# @digital-plant/zyfra-ui

This package contains schematics for install and update SDK components.

## Getting starting

### Default install

By default, you can install `@digital-plant/zyfra-components` with Angular CLI command:

```
ng add  @digital-plant/zyfra-ui
```

### Manual install packages

1. **Install components:**

```
npm i @digital-plant/zyfra-components
```

2. **Install global styles:**

angular.json:
```
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.css",
              "node_modules/primeng/resources/themes/luna-blue/theme.css'",
              "node_modules/primeng/resources/primeng.min.css'",
              "node_modules/primeicons/primeicons.css'",
              "node_modules/@digital-plant/zyfra-components/src/styles/theme/default.css'",
              "node_modules/@digital-plant/zyfra-components/src/styles/styles.less'",
            ]
          }
        }
      }
    }
  }
}
```
You can also use component LESS styles with import:

my-awesome-button.component.less
```
@import '~@digital-plant/zyfra-components/src/lib/button/zyfra-button.component.less';
```

3. **Install icons styles (if you need):**

angular.json:
```
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              ...your styles,
              "node_modules/@digital-plant/zyfra-components/src/styles/icons/icons.less"
            ]
          }
        }
      }
    }
  }
}
```

4. **Install fonts, icons assets:**

angular.json
```
"assets": [
    {
        "glob": "**/*",
        "input": "node_modules/@digital-plant/zyfra-components/src/styles/fonts",
        "output": "assets/ui-platform/components/fonts"
    }
],
```


## Contributing

This package provides schematic `ng-add`

Install dependencies `npm i`

Install globally Nx `npm i -g nx`
