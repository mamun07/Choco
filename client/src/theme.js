import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
  },
  typography: {
    h1: {
      fontSize: '30px',
      lineHeight: '35px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h3: {
      fontSize: '22px',
      lineHeight: '26px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '25px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h5: {
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h6: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    subtitle1: {
      fontSize: 12,
      lineHeight: '14px',
      fontWeight: 300,
    },
    body1: {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      lineHeight: '20px',
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#3A3A3A',
      dark: '#2D2D2D',
      light: '#DFDBDB',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffffff',
      dark: '#E28C00',
      light: '#FDB95F',
      contrastText: '#fff',
    },
  },
});
export default theme;
