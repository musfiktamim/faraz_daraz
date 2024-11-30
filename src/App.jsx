import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './nav/Navbar'
import Fotbar from './nav/Fotbar'
import Flashsale from './pages/Flashsale'

function App() {
  return (
    <BrowserRouter >
     <Navbar />
     <Fotbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flash_sale' element={<Flashsale />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App