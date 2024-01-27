import React from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import CoinPage from "./pages/CoinPage";
import ComparePage from "./pages/ComparePage";
import WatchlistPage from "./pages/Watchlist";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App" data-theme="light">
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/coin/:id" element={<CoinPage/>} />
        <Route path="/compare" element={<ComparePage/>} />
        <Route path='/watchlist' element={<WatchlistPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
