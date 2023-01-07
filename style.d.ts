import 'styled-components';
import { Breakpoints, TextVariant } from './theme/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutrals: {
        0: string;
        100: string;
        200: string;
        300: string;
        500: string;
        600: string;
        900: string;
      },
      brand: {
        default: string;
        hover: string;
        light: string;
        light2: string;
      },
      green: {
        default: string;
        light: string;
      },
      red: {
        default: string;
        light: string;
      },
      specials: {
        illustrationBg: string;
        sectionBg50Opacity: string;
        aerolab: string;
      }
    },
    fontSize: {
      [key in Breakpoints]: {
        [key in TextVariant]: string;
      }
    },
    fontWeight: {
      [key in TextVariant]: number;
    },
    lineHeight: {
      [key in TextVariant]: string
    },
    letterSpacing: {
      [key in TextVariant]: string;
    },
    breakpoints: {
      [key in Breakpoints]: string;
    }
  }
}