import {Routes, Route } from 'react-router-dom';

import "./App.css";

import Home from "./components/Home/Home";
import Products from "./components/Produkts/Products";
import Galerie from "./components/Galerie/Galerie";
import Referenz from "./components/Referenz/Referenz";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/referenz" element={<Referenz />} />
          <Route path="*" element={"404: Page not Found AMK"} />
      </Routes>
  );
}

export default App;
