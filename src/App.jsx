import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import TemplateData from './components/TemplateDate'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/template" element={<TemplateData/>}/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App