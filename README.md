# @zyfra-ui/components

## Contributing

Getting start:

Install globally `npm i -g nx`

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


------
### Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@zyfra/mylib`.

### Generate publishable library

Run `nx g lib theme --publishable --importPath "@zyfra/ui/zyfra-theme"`

### Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

### Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

