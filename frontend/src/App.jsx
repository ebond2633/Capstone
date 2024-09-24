import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Products from './components/Products'


function App() {

  return (
   
      <div className="flex flex-col min-h-screen">
        <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            
           </Routes>
        <Footer/>
      </div>
 
  )
}

export default App;