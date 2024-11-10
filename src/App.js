import Cart from './fragments/Cart';
import Home from './fragments/Home';
import Landing from './fragments/Landing';
import ProductView from './fragments/ProductInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="ViewDetails/:id" element={<ProductView />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;