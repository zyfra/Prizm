import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const example1Html = require('!!raw-loader!./examples/1/template.html').default as string;
declare const require: any;
@Component({
  selector: 'zyfra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'doc';
}
