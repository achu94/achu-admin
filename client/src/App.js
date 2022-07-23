import {Routes, Route } from 'react-router-dom';

import "./App.css";

import Home from "./components/Home/Home";
import ProductList from "./components/Produkts/ProductList";
import Galerie from "./components/Galerie/Galerie";
import Referenz from "./components/Referenz/Referenz";
import Admin from "./components/Admin/Admin";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/referenz" element={<Referenz />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={"404: Page not Found AMK"} />
      </Routes>
  );
}

export default App;
