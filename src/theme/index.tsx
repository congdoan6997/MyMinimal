import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles';
import { useMemo } from 'react';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

import merge from 'lodash.merge';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const baseOptions = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const memoizedValue = useMemo(() => merge(baseOptions), [baseOptions]);

  const theme = createTheme(memoizedValue as ThemeOptions);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
