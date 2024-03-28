import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import SodaPop from "./SodaPop";
import Jerky from "./Jerky";


// const [page, setPage] = useState('/');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/sodapop" element={<SodaPop/>} />
          <Route path="/jerky" element={<Jerky/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;