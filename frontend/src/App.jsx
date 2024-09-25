

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Products from './components/Products'
import Home from './components/Home'
import ContactForm from './components/Contactform'
import Cart from './components/Cart'

function App() {

  return (
   
      <div className="flex flex-col min-h-screen">
        <Header />
          <Routes>
           <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contactForm" element={<ContactForm />} />
            <Route path="/cart" element={<Cart/>} />
            
           </Routes>
        <Footer/>
      </div>
 
  )
}

export default App;