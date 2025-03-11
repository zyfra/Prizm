# Prizm UI

<div id="header" align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExand3eG8wMmVidjNrZmNoeWpwcDJlcmlkNW5hMTN4YTlpODc0bjc2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9tUN2jZS0mQkdR0AEl/giphy.gif" width="256"/>
</div>

- About: [prizm.zyfra.com](http://prizm.zyfra.com/)
- Documentation&Descriptions: [prizm.site](http://prizm.site/) & [GitBook](https://prizmds.gitbook.io/documentation)
- Figma: [Community](https://www.figma.com/community/file/1156311020501452261/prizm-omponent-base-5-0)
- Git: [github.com/zyfra/Prizm](https://github.com/zyfra/Prizm)

## Community

- Your ideas are very welcome in Github issues or discussions

- Join [PRIZM News](https://t.me/prizmdesign) Telegram chanel 

- Chat join [Prizm Community](https://t.me/prizmcom) Telegram group

# Libraries

```
@prizm-ui/core

@prizm-ui/components

@prizm-ui/helpers

@prizm-ui/icons

@prizm-ui/flag-icons
```

### Default install:

You can easily install Prizm UI using Angular CLI by running the following command:

`ng add @prizm-ui/install`

### Manual install:

**Required** > Install theme and core:

```
npm i @prizm-ui/core
npm i @prizm-ui/theme
```

**Optional** > Install helpers:

```
npm i @prizm-ui/helpers
```

**Optional** > Install components:

```
npm i @prizm-ui/components
```

**Optional** > Install charts library:

```
npm i @prizm-ui/charts
```

**How setup global styles from @prizm-ui/styles ?**

Add our styles to angular config:

```json
"assets": [
// ....
{
"glob": "**/*",
"input": "node_modules/@prizm-ui/components/src/styles/fonts",
"output": "assets/prizm-ui/fonts"
},
],
"styles": [
// (Required) Add for use our theme
"node_modules/@prizm-ui/theme/src/styles/styles.less",
// (Optional) Add for use our components
"node_modules/@prizm-ui/components/src/styles/styles.less",
// (Optional) Add only for use our old icon set (deprecated)
"node_modules/@prizm-ui/components/src/styles/icons/icons.less",
"node_modules/@prizm-ui/components/src/styles/icons-16/icons-16.less"
],
```

Or you can add to your root styles.less

```css
// (Required) Add for use our theme
@import '~@prizm-ui/theme/src/styles/styles.less';
// (Optional) Add only for use our components library
@import '~@prizm-ui/components/src/styles/styles.less';

// (Optional) Add only for use our old icon set (deprecated)
@import '~@prizm-ui/components/src/styles/icons/icons.less';
@import '~@prizm-ui/components/src/styles/icons-16/icons-16.less';
```

How can you use our icons?

To use our icons as svg, please install our library

```
npm i @prizm-ui/icons
```

But if you want to use fonts not only as svg, and also as font, please add to your angular config

```json
"styles": [
...
"@prizm-ui/icons/base/src/styles/styles.less"
],";
```

or you can only import to your root styles.less

```css
@import '~@prizm-ui/icons/base/src/styles/styles.less';
```

# Thanks to

🔹 This is a library for one of the best Angular frameworks. Thanks to [Angular team](https://github.com/angular)

🔹 Our **docs** are based on [Taiga UI](https://github.com/taiga-family/taiga-ui/blob/main/projects/addon-doc/README.md). All Taiga UI packages are covered by Apache 2.0 (read more [here](https://github.com/taiga-family/taiga-ui/blob/main/LICENSE)). Thanks to [Taiga UI](https://github.com/taiga-family/taiga-ui)

🔹 We use nrwl nx as monorepo. Thanks to [Nrwl team](https://github.com/nrwl)

🔹 Our charts library are base on AntV G2Plot. Thanks to [AntV G2Plot](https://github.com/antvis/G2Plot)

🔹 Also we want to give thanks to all the following

- [husky](https://github.com/typicode/husky)
- [ngx-markdown](https://github.com/jfcere/ngx-markdown)
- [ngx-mask](https://github.com/JsDaddy/ngx-mask)
- [primeng](https://github.com/primefaces/primeng)
- [ng-web-apis](https://www.npmjs.com/package/@ng-web-apis/common)
- [fantasticon](https://github.com/tancredi/fantasticon)
- [clibpboar.js](https://github.com/zenorocha/clipboard.js)
- [date-fns](https://github.com/date-fns/date-fns)
- [rxjs](https://github.com/ReactiveX/rxjs)
- [svg-icons-builder](https://github.com/angular-extensions/svg-icons-builder)
- [jest](https://github.com/facebook/jest)
- [lodash](https://github.com/lodash/lodash)
- [cypress](https://github.com/cypress-io/cypress)
- [playwright](https://github.com/microsoft/playwright)
- [highlight](https://github.com/highlightjs/highlight.js/)
- [highlightjs-line-numbers](https://github.com/wcoder/highlightjs-line-numbers.js/)
- [postcss](https://github.com/postcss/postcss)
- [prettier](https://github.com/prettier/prettier)
- [webpack](https://github.com/webpack/webpack)
- [pretty-quick](https://github.com/azz/pretty-quick)
- [eslint](https://github.com/eslint/eslint)
- [svg-to-ts](https://github.com/kreuzerk/svg-to-ts)
- [typescript](https://github.com/microsoft/TypeScript)
- [commitlint](https://github.com/conventional-changelog/commitlint)


# Contributors

See our [CONTRIBUTING.md](/CONTRIBUTING.md) guide.

<a href="https://github.com/zyfra/Prizm/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zyfra/Prizm" />
</a>


# License

- You are welcome to utilize our library in both commercial and personal projects.

- The Prizm UI packages are licensed under the MIT [License](https://github.com/zyfra/Prizm/blob/main/LICENSE).

- Read more about this license [here](https://opensource.org/license/mit/)
