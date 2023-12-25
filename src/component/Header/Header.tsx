
import Button from '@mui/material/Button';
import { dark_mode, hight_text } from '../../string';
import { useThemeContext } from '../../theme/useThemeContext';
import Box from '@mui/system/Box';
import { Typography} from '@mui/material';
import { MdOutlineDarkMode } from 'react-icons/md';

export const Header = () => {
  const { colorMode } = useThemeContext();

  return (
    <Box component='header' sx={{ bgcolor: 'background.boxColor' }}>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1400px',
          py: '1rem',
          px: '2rem',
          margin: '0 auto',
        }}
      >
        <Typography variant='h1' component='h1'>
          {hight_text}
        </Typography>
        <Button
          sx={{ bgcolor: 'background.boxColor' }}
          variant='text'
          onClick={colorMode.toggleColorMode}
          startIcon={<MdOutlineDarkMode />}
          aria-label='toggle-dark-mode'
        >
          {dark_mode}
        </Button>
      </Box>
    </Box>
  );
};
