
import React from "react";
import "./App.css";

// import CoinChart from "./components/CoinChart";

import Navbar from './components/Navbar';
import News from "./components/News";
import Dashboard from './pages/dashboard/index';


import {Routes,Route} from 'react-router-dom';

 

function App() {
  return (
    <div className="app">

      <div className="news"> 
        <Navbar />
      </div>

      <Routes>
        <Route path="/news" element={<News />}></Route>
        <Route path = "/dashboard" element={<Dashboard />}></Route>
        
      </Routes>

    </div>

  )
}

export default App;


 

