

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Products from './components/Products'
import Home from './components/Home'
import ContactForm from './components/Contactform'
import Cart from './components/Cart'
import { useState } from 'react'
import Navbar from './components/NavBar'
import Register from './components/Register'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  

  return (
   
      <div className="flex flex-col min-h-screen">
        
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <Routes>
           <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
            <Route path="/contactForm" element={<ContactForm />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/register" element={<Register/>} />
       
           
            
           </Routes>
        <Footer/>
      </div>
 
  )
}

export default App;