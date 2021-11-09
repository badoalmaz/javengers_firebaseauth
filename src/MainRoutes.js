import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";

const MainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
