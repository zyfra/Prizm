import { isStandaloneComponent } from './util';

describe('isStandaloneComponent', () => {
  it('should return true when standalone: true is present', () => {
    const code = `
      @Component({
        selector: 'example-component',
        templateUrl: './example.component.html',
        standalone: true,
        styleUrls: ['./example.component.css']
      })
      export class ExampleComponent {}
    `;
    expect(isStandaloneComponent(code)).toBe(true);
  });

  it('should return false when standalone: true is absent', () => {
    const code = `
      @Component({
        selector: 'example-component',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
      })
      export class ExampleComponent {}
    `;
    expect(isStandaloneComponent(code)).toBe(false);
  });

  it('should handle single quotes around standalone', () => {
    const code = `
      @Component({
        selector: 'example-component',
        templateUrl: './example.component.html',
        'standalone': true,
        styleUrls: ['./example.component.css']
      })
      export class ExampleComponent {}
    `;
    expect(isStandaloneComponent(code)).toBe(true);
  });

  it('should handle double quotes around standalone', () => {
    const code = `
      @Component({
        selector: 'example-component',
        templateUrl: './example.component.html',
        "standalone": true,
        styleUrls: ['./example.component.css']
      })
      export class ExampleComponent {}
    `;
    expect(isStandaloneComponent(code)).toBe(true);
  });

  it('should handle double quotes around standalone', () => {
    const code = `
      @Component({
        selector: 'example-component',
        templateUrl: './example.component.html',
        "standalone": true,
        styleUrls: ['./example.component.css']
      })
      export class ExampleComponent {}
    `;
    expect(isStandaloneComponent(code)).toBe(true);
  });

  it('should return false when standalone is set to false', () => {
    const code = `
      @Component({
        selector: 'example-component',
        templateUrl: './example.component.html',
        standalone: false,
        styleUrls: ['./example.component.css']
      })
      export class ExampleComponent {}
    `;
    expect(isStandaloneComponent(code)).toBe(false);
  });
});
