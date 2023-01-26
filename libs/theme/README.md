# Prizm theme

![prizm workflow](https://github.com/zyfra/Prizm/actions/workflows/ci.yml/badge.svg)

- About: [prizm.zyfra.com](http://prizm.zyfra.com/)
- Documentation: [prizm.site](http://prizm.site/)
- Git: [github.com/zyfra/Prizm](https://github.com/zyfra/Prizm)

## Libraries

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
