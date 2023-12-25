
import {useState, useMemo} from 'react'
import { createTheme } from '@mui/material';
import { getDesignTokens } from './theme';

export const useThemeContext = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

      

  return {
    colorMode,
    theme,
  };
};
