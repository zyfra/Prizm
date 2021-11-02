# @zyfra-ui/components

## Contributing

Getting start:

Install globally `npm i -g nx`

Start develop, serve dev `npm run start`

### Add component to @zifra-ui/components

For example button component

1. Generate the module, component and add story

```
   > nx generate @nrwl/angular:module button --project=components
   > nx generate @nrwl/angular:component button --project=components
   > nx generate @nrwl/angular:stories components
```
2. Add styles for component (by default ViewEncapsulation.None) to root styles (`libs/components/src/styles.less`)

styles.less:
```less
@import "../lib/button/zyfra-button.component.less";

```

And remove from Component declaration `zyfra-button.component`

```ts
@Component({
  selector: 'zyfra-button',
  templateUrl: './zyfra-button.component.html',
  // styleUrls: ['./zyfra-button.component.less'], remove this
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

3. Add to publish export modules (`libs/components/index.ts`)

```ts
export * from './lib/button';


```

### Commands

- Components: 
  - Rebuild component docs `nx run components:docs`
  - Build prod `nx run components:build`



---------



#### Other info

> For more info [Readme nx guide](README_NX.md)