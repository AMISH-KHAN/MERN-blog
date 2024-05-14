
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/signup' element={<Signup/> } />

      </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
