import "styled-components";

declare module "styled-components" {
  export interface ITheme {
    bgColor: {
      dark: string;
      light: string;
    };
    boardColor: string;
    shadowColor: string;
  }
}
