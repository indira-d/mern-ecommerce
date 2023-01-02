
import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {useSelector} from "react-redux";


function App() {
    const user = useSelector(state => state.user.currentUser)
  return (
    <Router>
        <Routes>
            <Route  path={'/'} element={<Home />} />
            <Route exact path={'/products/:category'} element={<ProductList />} />
            <Route exact path={'/product/:id'} element={<Product />} />
            <Route exact path={'/cart'} element={<Cart />} />
            <Route exact path={'/success'} element={<Success />} />
            <Route path={'/login'} element={user ? <Navigate replace to={'/'} /> : <Login/>} />
            <Route  path={'/register'} element={user ? <Navigate replace to={'/'} /> : <Register/>} />
        </Routes>
    </Router>
  );
}

export default App;
