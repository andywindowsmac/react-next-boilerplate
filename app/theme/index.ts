// styled-components.ts
import * as styledComponents from 'styled-components';
import { StyledFunction } from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import ColorMap from './Colors';
import FontMap from './Fonts';
import ImageMap from './Images';
import { ThemeColorMap, ThemingInterface } from './types';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemingInterface>;

export {
  ColorMap,
  ImageMap,
  StyledFunction,
  FontMap,
  ThemeColorMap,
  ThemingInterface,
};
export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
