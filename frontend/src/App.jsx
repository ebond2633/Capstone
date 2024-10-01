import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Products from './components/Products';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/NavBar';
import Register from './components/Register';

// import StripeContainer from './components/StripeContainer';
import Checkout from './components/Checkout';
import SingleItem from './components/SingleItem';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
 <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        
        {/* <Route path="/contactform" element={<ContactForm />} /> */}
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/paymentform" element={<PaymentForm />} />
        <Route path="/stripecontainer" element={<StripeContainer />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<SingleItem />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;