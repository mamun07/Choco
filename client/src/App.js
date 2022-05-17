import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import theme from './theme';
import { ToastContainer } from 'react-toastify';

// Global style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'react-toastify/dist/ReactToastify.css';

// page link
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Pages from './components/mainpage/pages';

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
