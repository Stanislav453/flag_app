import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeContext } from '../theme/useThemeContext';
import { Header } from '../component/Header/Header';
import { Outlet } from 'react-router';


export const Layout = () => {

  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};
