
import './index.css'
import Home from './Pages/Home'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';

function App() {
  return(
  <BrowserRouter>
  <Layout>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Shop' element={<Shop/>} ></Route>
  </Routes>
  </Layout>
  </BrowserRouter>
  )
}

export default App
