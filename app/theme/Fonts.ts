/* @flow */

import Colors from './Colors';
import { ThemeFontMap } from './types';

/* eslint-disable no-magic-numbers */
const Fonts: ThemeFontMap = {
  futuraLight20: `
    font-family: 'FuturaPTLight';
    font-size: 20px;
    color: ${Colors.black};
    line-height: 24px;
  `,
  futuraRegular20: `
    font-family: 'FuturaPTBook';
    font-size: 20px;
    color: ${Colors.white};
    line-height: 24px;
  `,
  futuraRegular24: `
    font-family: 'FuturaPTBook';
    font-size: 24px;
    color: ${Colors.white};
    line-height: 24px;
  `,
  futuraRegular32: `
    font-family: 'FuturaPTBook';
    font-size: 32px;
    color: ${Colors.black};
    line-height: 24px;
  `,
};
/* eslint-enable no-magic-numbers */

export default Fonts;
