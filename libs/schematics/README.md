# @prizm-ui/install

This package contains schematics for install and update SDK components.

## Getting starting

### Default install

By default, you can install `@prizm-ui/components` with Angular CLI command:

```
ng add  @prizm-ui/install
```

### Manual install packages

1. **Install components:**

```
npm i @prizm-ui/core
npm i @prizm-ui/helpers
npm i @prizm-ui/components
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
              "node_modules/@prizm-ui/components/src/styles/styles.less",
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
@import '~@prizm-ui/components/src/lib/button/button.component.less';
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
              "node_modules/@prizm-ui/components/src/styles/icons/icons.less"
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
        "input": "node_modules/@prizm-ui/components/src/styles/fonts",
        "output": "assets/prizm-ui/components"
    }
],
```


## Contributing

This package provides schematic `ng-add`

Install dependencies `npm i`

Install globally Nx `npm i -g nx`
