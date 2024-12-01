import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './nav/Navbar'
import Fotbar from './nav/Fotbar'
import Flashsale from './pages/Flashsale'
import Productshownpage from './pages/Productshownpage'

function App() {
  return (
    <BrowserRouter >
     <Navbar />
     <Fotbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flash_sale' element={<Flashsale />} />
        <Route path='/detailes_page' element={<Productshownpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App