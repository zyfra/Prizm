# @prizm-ui/components

## Setup components library

Run command in your Angular project:

```
npm i @prizm-ui/core

npm i @prizm-ui/components

npm i @prizm-ui/helpers

npm i @prizm-ui/icons

npm i @prizm-ui/flag-icons
```

## Contributing

Getting start:

Install globally `npm i -g nx`

Start develop, serve dev `npm run start`

### Add component to @prizm-ui/components

For example button component

1. Generate the module, component and add story

```
   > nx generate @nrwl/angular:module prizm-message --project=components
   > nx generate @nrwl/angular:component prizm-message --project=components
   > nx generate @nrwl/angular:stories components (opt "false" as an answer)
```
2. Add styles for component (by default ViewEncapsulation.None) to root styles (`libs/components/src/styles.less`)

styles.less:
```less
@import "../lib/button/button.component.less";

```

And remove from Component declaration `button.component`

```ts
@Component({
  selector: 'prizm-button',
  templateUrl: './button.component.html',
  // styleUrls: ['./button.component.less'], remove this
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

3. Add to publish export modules (`libs/components/index.ts`)

```ts
export * from './lib/button';


```

### Commands

See nx commands


---------


### Troubleshoot

If copy command `cp` not working in your OS platform, try run manually 

```
   "cp ./libs/schematics/src/collection.json ./dist/libs/schematics/src/collection.json",
   "cp ./libs/schematics/src/ng-add/schema.json ./dist/libs/schematics/src/ng-add/schema.json"
```

### Update package version

Path's for update lib info:

- `libs/components/package.json`
- `libs/schematics/package.json`
- `libs/schematics/src/ng-add/consts.ts`


#### Other info

> For more info [Readme nx guide](README_NX.md)

