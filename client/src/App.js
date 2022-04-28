import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Pages from "./components/mainpage/pages";
import { DataProvider } from "./GlobalState";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <CssBaseline />
          <Header />
          <Pages />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
