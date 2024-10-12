import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Shop' element={<Shop/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
