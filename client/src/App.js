import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Pages from './components/mainpage/pages';
import { DataProvider } from './GlobalState';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import theme from './theme';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box className="App">
            <Header />
            <Pages />
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;
