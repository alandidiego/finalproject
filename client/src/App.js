import React from "react";
import "./App.css";
import CoinChart from "./components/CoinChart";
import Dashboard from "./pages/dashboard";


function App() {

  return (
    <div id="container">
      <CoinChart />
      <Dashboard />
    </div>

  )
}

export default App;
