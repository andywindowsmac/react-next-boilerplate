import * as React from 'react';

import { ThemeProvider, ColorMap, FontMap, ImageMap, injectGlobal } from './';

interface ThemeWrapperProps {
  children: React.ReactChild;
}

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

class ThemeWrapper extends React.Component<ThemeWrapperProps> {
  public render(): JSX.Element {
    return (
      <ThemeProvider
        theme={{
          colors: { ...ColorMap },
          fonts: { ...FontMap },
          images: { ...ImageMap },
        }}
      >
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default ThemeWrapper;
