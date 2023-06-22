declare module '*?raw';
declare module '*?raw';
declare module 'highlight*';

/* SystemJS module definition */
declare const module: NodeModule;

interface NodeModule {
  id: string;
}

declare module '!!file-loader!*' {
  const result: string;

  export = result;
}

declare module '*.html' {
  const result: string;

  export = result;
}

interface NodeModule {
  id: string;
}

/* Import file's content as string.
To understand how it works, see `projects/demo/webpack.config.ts`.
*/
declare module '*?raw' {
  const result: string;

  export default result;
}
