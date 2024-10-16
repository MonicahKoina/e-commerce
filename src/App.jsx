import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import Login from './Pages/Login'



function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Shop' element={<Shop/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>;
}

export default App
