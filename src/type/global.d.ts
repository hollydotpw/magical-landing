declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare namespace JSX {
  export type Element = any;
}

declare const __PRESET__: 'browser' | 'node'; // eslint-disable-line
