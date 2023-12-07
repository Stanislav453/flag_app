import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './theme/ThemeContextProvider';
import { CssBaseline } from '@mui/material';
import { Home } from './page/Home';

export const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Home /> */}
      jupi
    </ThemeProvider>
  );
};
