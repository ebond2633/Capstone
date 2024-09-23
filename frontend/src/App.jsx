import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Cart from './components/Cart'
import Products from './components/Products'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
           <Navbar/>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products/>} />
          </Routes> */}
        </main>
        <Footer />
       
      </div>
    </Router>
  )
}

export default App;