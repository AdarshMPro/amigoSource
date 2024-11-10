import Header from './components/Header';
import Fab from './components/Fab';
import Cart from './fragments/Cart';
import Home from './fragments/Home';
import Landing from './fragments/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;