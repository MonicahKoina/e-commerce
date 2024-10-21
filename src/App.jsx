
import './index.css'
import Home from './Pages/Home'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import { useContext } from 'react';
import { ThemeContext } from './context/Theme';

function App() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
  console.log("theme", theme);
  return <>
  <div style={{backgroundColor:theme.backgroundColor, color: theme.color}}>
    <div> {isDark ? 'Dark' : 'Light' } </div>
    <button
    className='bg-yellow-200 rounded-lg p-2' onClick={toggleTheme} >Change Theme</button>
  <BrowserRouter>
  <Layout>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Shop' element={<Shop/>} ></Route>
  </Routes>
  </Layout>
  </BrowserRouter>
  </div>
  </>;
}

export default App
