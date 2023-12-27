import Button from '@mui/material/Button';
import { dark_mode, hight_text } from '../../string';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useThemeContext } from '../../theme/ThemeContextProvider';
import { MdLightMode } from 'react-icons/md';

export const Header = () => {
  const { mode, toggleColorMode } = useThemeContext()
  return (
    <Box component='header' sx={{ bgcolor: 'background.boxColor' }}>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          py: '1rem',
          px: '2rem',
          margin: '0 auto',
        }}
      >
        <Typography variant='h1' component='h1' sx={{ fontSize: { xs:'1rem', md: '2rem' } }} >
          {hight_text}
        </Typography>
        <Button
          sx={{ bgcolor: 'background.boxColor', color: 'text.primary', fontWeight: 600 }}
          variant='text'
          onClick={toggleColorMode}
          startIcon={mode === 'light' ? <MdOutlineDarkMode /> : <MdLightMode />}
          aria-label='toggle-dark-mode'
        >
          {dark_mode}
        </Button>
      </Box>
    </Box>
  );
};
