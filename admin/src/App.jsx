import SideBar from './components/SideBar.jsx/SideBar';
import Topbar from "./components/topbar/topbar";
import './app.css'
import Home from './pages/Home/Home';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import NewProduct from './pages/NewProduct/NewProduct';




function App() {
  return (
    <Router>
       <Topbar />
       <div className="container">
          <SideBar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>       
            <Route path='/users' element={<UserList />}></Route>    
            <Route path='/user/:userId' element={<User />}></Route>   
            <Route path='/newUser' element={<NewUser />}></Route>  

            <Route path='/products' element={<ProductList />}></Route>    
            <Route path='/product/:productId' element={<Product />}></Route>   
            <Route path='/newProduct' element={<NewProduct />}></Route>  
            
            
          </Routes>
       </div>
    </Router>
       
    
  );
}

export default App;
