import React, { useState } from "react";
import {CovidProvider}from "./context/CovidContext";

import CovidPage from "./pages/CoviedPage";

import "./App.css";

function App() {
  

  return (
    <CovidProvider >
      <div className="App">

        <h1>covid</h1>
        <CovidPage />
      
      </div>
      </CovidProvider>

  );
}

export default App;
