
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { useAppDispatch } from './redux/hooks';
import { dataSlice, setData } from './redux/dataSlice';
import { Header } from './component/Header/Header';
import { Switch } from '@mui/material';

export const App = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const API_LINK = '../data.json';

  useEffect(() => {
    const setApi = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_LINK}`);
        const post = await response.json();
        dispatch(setData(post));
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
        console.log(error ? error : '');
      }
    };

    setApi();
  }, []);

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#990000',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        //Adding the switch button
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        ...
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};
