import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import "./App.css";
import * as authService from "./services/authServices";
import { isAuthContext } from "./components/util/isAuthContext";

import Home from "./components/Home/Home";
import ProductList from "./components/Produkts/ProductList";
import Galerie from "./components/Galerie/Galerie";
import Referenz from "./components/Referenz/Referenz";
import Admin from "./components/Admin/Register";
import Login from "./components/User/Login";

function App(props) {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    isAuth : false,
    id : '',
    eMail : '',
  });

  useEffect( () => {
    authService.isAuth()
      .then( (token) => {
        if(!token) return navigate("/login");

        setUserData( prevState => ({
          ...prevState,
          isAuth : token.isAuth,
          id : token.user._id,
          eMail : token.user.email
        }));
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <isAuthContext.Provider value={{userData, setUserData}}>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            !userData.isAuth ? (
              <Route path="/login" element={<Login />} />
            ) :
            <>
              <Route path="/products" element={<ProductList />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/referenz" element={<Referenz />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={"404: Page not Found AMK"} />
            </>
        }
        </Routes>
      </isAuthContext.Provider>
  );
}

export default App;
