import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home';
import Navbar from './components/Home';
import Styled from './components/Styled';

import './App.css'


function App() {
  //  const [count, setCount] = useState(0)

  return (
    <>
    <Styled/>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App;
