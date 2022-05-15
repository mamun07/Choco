import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Pages from './components/mainpage/pages';
import { DataProvider } from './GlobalState';
import CssBaseline from '@mui/material/CssBaseline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box } from '@mui/material';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Box className="App">
          <CssBaseline />
          <Header />
          <Pages />
          <Footer />
        </Box>
      </Router>
    </DataProvider>
  );
};

export default App;
