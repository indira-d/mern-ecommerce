
import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <Router>
        <Routes>
            <Route  path={'/'} element={<Home />} />
            <Route exact path={'/products/:category'} element={<ProductList />} />
            <Route exact path={'/product/:id'} element={<Product />} />
            <Route exact path={'/cart'} element={<Cart />} />
            <Route exact path={'/login'} element={<Login />} />
            <Route exact path={'/register'} element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
