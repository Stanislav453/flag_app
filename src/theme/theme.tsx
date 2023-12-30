import { PaletteMode } from '@mui/material';
import { amber} from '@mui/material/colors';

export const getDesignTokens = (mode?: PaletteMode) => ({
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    h1: {
      fontSize: 30,
      fontWeight: 800,
    },
  },
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: '#fff',
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: ' hsl(207, 26%, 17%)',
        boxColor: 'hsl(209, 23%, 22%)',
      },
    }),
    ...(mode === 'light' && {
      background: {
        default: 'hsl(0, 0%, 98%)',
        boxColor: 'hsl(0, 0%, 100%)',
        borderColor: 'hsl(0, 0%, 52%)',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: 'hsl(200, 15%, 8%)',
            error: '#c11111',
          }
        : {
            primary: 'hsl(0, 0%, 100%)',
            error: '#c11111',
          }),
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'capitalize',
            border: 'none',
            ':hover': {
              border: 'none',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            textTransform: 'capitalize',
          },
        },
      ],
    },
  },
}) as any
