
import './index.css'
import Home from './Pages/Home'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';

function App() {
  return(
  <BrowserRouter>
  <Layout>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Shop' element={<Shop/>} ></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
  </Routes>
  </Layout>
  </BrowserRouter>
  )
}

export default App
