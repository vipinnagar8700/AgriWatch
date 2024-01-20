import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Component/Assets/css/style.css';
import Home from './Component/Home';
import Topbar from './Component/Layout/Topbar';
import Header from './Component/Layout/Header';
import Subscriptions from './Component/Subscriptions';
import Category from './Component/Category';
import About from './Component/About';
import Cart from './Component/Cart';
import Summary from './Component/Cart/Summary';
import Profile from './Component/Profile';
import Address from './Component/Profile/Address';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import ProfileSubscription from './Component/Profile/Subscription';
import ProfileOrder from './Component/Profile/Order';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} title="Home" />
          <Route path="/Subscriptions" element={<Subscriptions />} title="Subscriptions" />
          <Route path="/Category" element={<Category />} title="Category" />
          <Route path="/About" element={<About />} title="About" />
          <Route path="/Cart" element={<Cart />} title="Cart" />
          <Route path="/Summary" element={<Summary />} title="Summary" />
          <Route path="/Profile" element={<Profile />} title="Profile" />
          <Route path="/Address" element={<Address />} title="Address" />
          <Route path="/Login" element={<Login />} title="Login" />
          <Route path="/Register" element={<Register />} title="Register" />
          <Route path="/account/subscriptions" element={<ProfileSubscription/> } title="Profile Subscription"/> 
 <Route path="/account/orders" element={<ProfileOrder/>} title="Profile Orders"/>      
   </Routes>
      </Router>
    </>
  );
}

export default App;
