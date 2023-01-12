import React from 'react'
import LanguageWrapperComponent from './components/LanguageComponentWrapper'
import { Routes, Route } from 'react-router-dom'
import Odia from './pages/Odia'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LanguageWrapperComponent />} />
        <Route path='odia' element={<Odia />} />

      </Routes>
    </div>
  )
}

export default App

