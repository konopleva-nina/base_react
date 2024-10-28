declare module '*.module.scss' {
  type Style = {
    [className: string]: string;
  };
  const style: Style;
  export = style;
}
